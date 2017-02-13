'use strict';

const Path        = require('path');
const fs          = require('fs');
const _           = require('lodash');
const Theme       = require('@frctl/fractal').WebTheme;
const packageJSON = require('../package.json');
const marked      = require('marked');

module.exports = function(options){

    const config = _.defaultsDeep(_.clone(options || {}), {
        imagePath: null,
        includePaths: [],
        globals: {},
        cachebust: {
            css: ''
        }
    });

    const theme = new Theme(Path.join(__dirname, 'views'), config);

    theme.setErrorView('error.nunj');
    theme.addStatic(Path.join(__dirname, 'dist'), '/theme');

    theme.addRoute('/', {
        handle: 'home',
        view: 'index.nunj'
    });

    theme.addRoute('/assets/images/:path(.*)', {
        handle: 'image',
        static: function(params, app){
            return Path.join(Path.resolve(config.imagePath), params.path);
        }
    }, function(){
        return fs.readdirSync(Path.resolve(config.imagePath)).map(filePath => ({ path: filePath }));
    });

    theme.addRoute('/:path(.*)', {
        handle: 'page',
        view: 'page.nunj'
    }, function(app){
        return app.docs.filter(d => (!d.isHidden)).flatten().map(page => ({path: page.path}));
    });



    theme.on('init', function(env, app){

        const logger = app.cli.console;

        env.engine.addFilter('url', (item) => theme.urlFromRoute('page', {path: item.path}) );

        env.engine.addGlobal('image', srcPath => `/assets/images/${srcPath}`);

        let globals = _.defaults(config.globals, {
            link: function(handleAnchor, linkText){
                const handleParts = handleAnchor.split('#');
                const handle      = handleParts[0];
                const anchor      = handleParts[1] ? `#${handleParts[1]}` : '';
                const pathify     = this.env.getFilter('path');
                const page        = app.docs.find(handle);
                let path          = page ? pathify.call(this, `/${page.path}`) : '';
                linkText          = linkText || page.label;
                if (path === '') {
                    logger.warn(`Could not create link to ${handleAnchor}`);
                }
                return `[${linkText}](${path}${anchor})`;
            },
            image: function(srcPath, altText, pathOnly){
                if (!config.imagePath) {
                    return '#';
                }
                altText = altText || '';
                const pathify = this.env.getFilter('path');
                const path = pathify.call(this, `/${app.web.get('assets.mount')}/images/${srcPath}`)
                return pathOnly ? path : `![${altText}](${path})`;
            }
        });

        app.docs.engine(require('@frctl/nunjucks')({
            paths: config.includePaths,
            globals: globals,
            filters: {
                md: function(str){
                    return marked(str, {
                        gfm: true,
                        tables: true,
                        breaks: false,
                        pedantic: false,
                        sanitize: false,
                        smartLists: true,
                        smartypants: true
                    });
                }
            }
        }));
    });

    return theme;
};
