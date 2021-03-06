<template lang="pug">
  #app.app(@click='$emit("close")')
    app-header
    app-navigation
    //- https://robots.thoughtbot.com/transitions-and-transforms
    main.vui-main(
      v-bind:class = '{ "vui-main--login": $store.state.activeApp == "login" }'
    )
      //- router-view(name='header-top')
      transition(name='slide',  :duration="{ enter: 300, leave: 500 }")
        router-view
    app-footer
    app-help
</template>

<script>
  import AppNavigation from '~components/global/app-navigation'
  import AppHeader from '~components/global/app-header'
  import AppFooter from '~components/global/app-footer'
  import AppHelp from '~components/global/app-help'

  import { EventBus } from '~plugins/event-bus'

  export default {
    name: 'App',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Default Title',
      // all titles will be injected into this template
      titleTemplate: '%s | Videa Demo'
    },

    components: {
      AppNavigation,
      AppHeader,
      AppFooter,
      AppHelp
    },

    data: () => ({
      version: '0.10.0',
      callingAPI: false,
      serverURI: 'http://10.110.1.10:8080',
      caller: this.$http
    }),

    methods: {
      // callAPI (method, url, data) {
      //   this.callingAPI = true
      //   url = url || this.serverURI // if no url is passed then inheret local server URI
      //   return this.caller({
      //     url: url,
      //     method: method,
      //     data: data
      //   })
      // },

      // logout () {
      //   this.$store.commit('SET_USER', null)
      //   this.$store.commit('SET_TOKEN', null)
      //   if (window.localStorage) {
      //     window.localStorage.setItem('user', null)
      //     window.localStorage.setItem('token', null)
      //   }
      //   this.$router.push('/login')
      // }
    },

    mounted () {
      document.body.addEventListener('click', event => EventBus.fire('body-clicked', event))
    }
  }
</script>

<style lang="stylus">
  @import '~assets/variables'

  .app
    display flex
    flex-direction column
    min-height 100vh
    height 100%  // Avoid the IE 10-11 `min-height` bug.
    background-color #f4f6f9
    color #000000
    position relative

  a
    transition 1s color
</style>

<style lang="sass">
  @import '~vue-flexboxgrid/dist/vue-flexboxgrid'
  @import '~mathsass'
  @import '~accoutrement-color/sass/color'
  @import '~assets/sass/accoutrement/color'

  // .example
  //   border: 1px solid transparent
  //   // call any color
  //   border-color: color('border')
  //   color: color('brand-orange')

  //   // adjust on the fly
  //   background-color: color('brand-purple' ('shade': 90))
  //   background-color: color('brand-dark')

  //   &:hover
  //     background-color: color('brand-purple' ('shade': 25))
  // a:hover
  //   // set a background, and get well-contrasted text
  //   @include contrasted('link')
</style>

<style lang="sass">
  // .box
  //   width: calc(100% - 50px)

  // /// TODO Find that article, and test the code below.
  // /// also delete or move to an appropriate location
  // //
  // #slider:after
  //   content: attr(value) '%'
  //   // custom styling

  // //
  // #inbox:after
  //   content: attr(data-new-items)
  //   // custom styling
</style>


<style lang="stylus">
  @import '~assets/variables'

  #loadingWidget
    position: fixed
    z-index: 9999

  .shaded
    background-color: #eeeeee

  // Table
  .vui-table tr.with-row-span,
  .vui-table tr.with-row-span td
    height: 41px

  // Fieldset
  .vui-fieldset
    padding: 5px
    border: 1px solid #a9aeb9
    position: relative

    > .vui-fieldset-header
      position: absolute
      z-index: 100
      top: -15px
      left: 0
      right: 0

    > .vui-fieldset-header label
      font-size: .85rem
      background: white


  // vui-display-block
  .vui-display--block
    display: block

  .vui-display--inline-block
    display: inline-block

  .vui-text-grey,
  .vui-text-grey:hover
    color: #cccccc

  .vui-no-border-right
    border-right: 0 !important

  .vui-no-border-left
    border-left: 0 !important

  // resizable textarea
  .resizable
    min-width: 25px
    min-height: 25px
    padding-right: 3px
    padding-bottom: 3px

    textarea
      width: 100%
      height: 100%
      resize: none
</style>

<style>
 .debug * { background-color: rgba(255, 0 , 0, 0.2) }
 .debug * * { background-color: rgba(0, 255, 0, 0.2) }
 .debug * * * { background-color: rgba(0, 0, 255, 0.2) }
 .debug * * * * { background-color: rgba(255, 0, 255, 0.2) }
 .debug * * * * * { background-color: rgba(0, 255, 255, 0.2) }
 .debug * * * * * * { background-color: rgba(255, 255, 0, 0.2) }
</style>

<style lang="scss">
  @import './assets/sass/app'
</style>

<style lang="stylus">
  @import '~assets/variables'

  // @import './stylus/main'
  .vui-text-heading--x-large
    font-weight 300
    font-size 4rem
    line-height 1.25
</style>

<!-- Add to Vui -->
<style lang="stylus">
  @import '~assets/variables'

  // BUG FIX: Need to resolve in videa-ui-css
  html
    background-color #f4f6f9

  // BUG FIX: Modifier to enable tab focusing
  .vui-button--can-be-focused:focus
    outline 1px solid currentColor

  .vui-text-link,
  .vui-text-link:hover,
  .vui-text-link:focus
    color #0177a2
    text-decoration none

  .vui-text-color--error,
  .text-red
    color #c5203e

  .text-bold
    font-weight 700

  .vui-badge.badge--dev-ready
    border-radius 0.125rem

  .vui-icon.inactive
    opacity 0.5

  .vui-theme--dark
    background-color #51535c
    color white
    border-color #51535c

  .vui-checkbox .glyphicon,
  .dropdown-toggle .icon-angle-down
    color #692565

  // Password validatator styles
  .password-validator .password-validation-decoration
    color #0177a2

  // Remove spinners and html5 validation effect for input type=number
  input[type=number]
    -moz-appearance textfield

  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button
    margin 0
    -webkit-appearance none

  input[type=number]::invalid
    box-shadow none

  // Status classes for table columns with sorting
  .vui-sort
    opacity 0.5
    &.active
      opacity 1

  // Special class needed to draw an asterisk if we generate table using ng-repeat
  .vui-star--after::after
    content '*'
    position relative
    top -0.5em
    font-size 75%
    color #f4831f
    line-height 0
    vertical-align baseline

  // BUG 48189: Center Station Selecotor items
  .station-selector .vui-dropdown__item a
    -webkit-box-pack center
    -webkit-justify-content center
    -ms-flex-pack center
    justify-content center

  // BUG 48779: Global Table zebra stripping color is incorrect
  .vui-highlight
    background-color #F0F7F9
    background-color #f4f6f9

  .vui-highlight--videa
    background-color #F0F7F9

  .uib-day button.active .text-info
    color white

  // BUG : Disabled days shouldn't be green
  .uib-day button:disabled
    background #e0e4e5
    border-color white

  .uib-day .text-muted
    color #eee !important

  /* Styles for Datepicker START */
  /* Ideally these styles should merged with existing (not just copied) */
  /* Align datepicker next to icon */
  .uib-datepicker-popup
    left auto !important
    right 0 !important
    transform translateX(45%)

  /* Explicitly set styles for 3 kinds of datapicker */
  table.uib-daypicker td,
  table.uib-daypicker th,
  table.uib-monthpicker td,
  table.uib-monthpicker th,
  table.uib-yearpicker th,
  table.uib-yearpicker td
    padding 0
    border none
    background #fff

  /* Reset styles for buttons at table header */
  .uib-daypicker th button,
  .uib-monthpicker th button,
  .uib-yearpicker th button
    min-width 100%
    background-color white
    border none

  /* Set names of days to bold */
  .uib-daypicker tr:last-child th
    font-weight 600

  /* Remove outline from table */
  .uib-daypicker,
  .uib-monthpicker,
  .uib-yearpicker
    outline none

  /* No need to display cursor as a pointer if element is not clickable */
  .uib-datepicker thead tr:nth-child(2),
  .uib-weeks .h6
    cursor default

  /* Decrease the size of cells */
  .uib-day button,
  .uib-month button,
  .uib-year button
    line-height 32px

  /* Set month picker to have fixed button width */
  .uib-month button
    width 86px

  /* Add hover to all kinds of datepicker */
  .uib-day button:hover,
  .uib-month button:hover,
  .uib-year button:hover
    border 1px solid #692565

  /* Styles for Datepicker END */
  /* Fix for Loading Widget */
  #loadingWidget
    position fixed
    z-index 9999

  /* Price guide shaded background*/
  .shaded
    background-color #eee
  .vui-table tr.with-row-span,
  .vui-table tr.with-row-span td
    height 41px

  /* Bordered fieldset with optional label */
  .vui-fieldset
    padding 5px
    border solid 1px #A9AEB9
    position relative
    > .vui-fieldset-header
      position absolute
      z-index 100
      top -15px
      left 0
      right 0
      label
        font-size 0.85rem
        background white

  /* Helper classes which are used to set display: block or inline.
     Class vui-show and vui-show--inline-block are doing the same but naming is not correct for such cases */
  .vui-display--block
    display block

  .vui-display--inline-block
    display inline-block

  /* Class for emphasize some pieces of text by grey color. We had many such cases before, and had to use inline styles */
  .vui-text-grey,
  .vui-text-grey:hover
    color #cccccc

  /* Class for making custom tables */
  .vui-no-border-right
    border-right 0 !important

  .vui-no-border-left
    border-left 0 !important

  /* Angular-resizable Customization
  for resizable blocks */
  .resizable
    min-width 25px
    min-height 25px
    padding-right 3px
    padding-bottom 3px
    textarea
      width 100%
      height 100%
      resize none

  /* Bug because of z-index, must be higher than 1*/
  .uib-datepicker-popup.dropdown-menu
    z-index 2

  /* item-actions */
  .item-actions
    font-size 1.8em
    position relative
    span
      cursor pointer
      margin-left 5px
    span[disabled]
      cursor initial
      opacity 0.3
</style>

<style lang="stylus">
  @import '~assets/variables'

  // MISC
  .pointer
    cursor pointer

  /*** Success notification ***/
  .notification-success
    background-color #1D7E4B
    padding-top 0.25rem
    padding-bottom 0.25rem

  /*** Dropdown fix for arrow at the top of DDL ***/
  .dropdown-menu.vui-nubbin--top::before
    z-index -1
</style>

<!-- Debug Panel -->
<style lang="stylus">
  .debug-panel
    position fixed
    bottom 0
    left 0
    background-color #555555
    padding 5px
    border-top-right-radius 3px
</style>

<!-- Table -->
<style lang="stylus">
  @import '~assets/variables'

  // BUG 48773: no th border in FF and IE
  .vui-table th,
  .vui-table td,
  .vui-table tr,
  .vui-table tbody
    background-clip padding-box

  .vui-table tr > th:first-child,
  .vui-table tr > td:first-child
    padding-left 0.5rem


  .vui-table .vui-table th,
  .vui-table .vui-table th a
    background transparent
    color #555

  .vui-table .vui-table th,
  .vui-table .vui-table tbody tr:last-child > td
    background-color transparent

  .vui-table .vui-table th,
  .vui-table .vui-table th a
    background transparent

  .om-nested-table-container
    .vui-table thead th
      border 1px solid #e0e4e5

  .vui-table .vui-table-hidden-cell
    font-size 0
    padding 0
    background none

  // // Override VUI setting
  // .vui-table tr > th:first-child,
  // .vui-table tr > td:first-child
  //   padding-left 0

  // .vui-table tr > th:last-child,
  // .vui-table tr > td:last-child
  //   padding-right: 0


  // TABLES
  .vui-table th [class^="icon-"],
  .vui-table th [class*=" icon-"]
    color color-white
    margin-left 1rem

  // .vui-table tbody tr:last-child > td
  //   background-color #cce4ea

  // .vui-table .vui-table tbody tr:last-child > td,
  // .vui-table tfoot tr:last-child > td
  //   background-color white


  // TABLES
  .vui-table tbody tr.vui-is-selected > td
    background-color #cce4ea

  .vui-table tbody tr.vui-is-expanded > td
    background-color #f0f8fc
    border-bottom 1px solid #51535c
    border 1px solid #51535c

  // TABLES -- Nested
  .vui-table .vui-table thead th
    border 1px solid #e0e4e5
    border-bottom 1px solid #51535c

  .vui-table .vui-table th,
  .vui-table .vui-table th a
    background #fff
    color #555555

  .vui-table .vui-table tbody tr:last-child > td,
  .vui-table .vui-table th
    background-color transparent

  .vui-table .vui-table th,
  .vui-table .vui-table th a
    background transparent

  // TABLES -- Order Management Context
  .om-nested-table-container .vui-table thead th
    border 1px solid #e0e4e5

  // TABLES -- Makegood Context
  .mg-offer-spots th:not(.spot-allocation-column),
  .mg-preempts th:not(.spot-allocation-column),
  .mg-missed-spots th:not(.spot-allocation-column),
  .mg-program-name-change th:not(.spot-allocation-column)
    padding 1px 4px
    font-size 13px

  .mg-offer-spots th,
  .mg-preempts th,
  .mg-missed-spots th,
  .mg-program-name-change th
    font-size 13px

  .mg-offer-spots td input,
  .mg-offer-spots td select,
  .mg-preempts td input,
  .mg-preempts td select
    width 100%
    height 100%

  .vui-table .vui-table-hidden-cell
    font-size 0
    padding 0
    background none

  .vui-table tbody tr.vui-is-selected > td
    background-color #cce4ea

  .vui-table tbody tr.vui-is-expanded > td
    background-color #f0f8fc
    border-bottom 1px solid #51535c
    border 1px solid #51535c

  .vui-table .vui-table thead th
    border 1px solid #e0e4e5
    border-bottom 1px solid #51535c
</style>

<!-- Site Navigation -->
<style lang="stylus">
  @import '~assets/variables'

  /*** Top Menu ***/
  .vui-site-navigation
    a:hover
      border-color transparent

    .active > a
      color #83c9bd
      border-bottom-color #83c9bd

  .navigation-dropdown .vui-dropdown
    background #275f91
    border none
    top 90%
    white-space nowrap
    min-width 12.5rem
    border-radius 0
    font-size 1rem

    .active a
      border-color transparent

    a
      width 100%
      &:hover
        border-color transparent
</style>

<!-- Site Navigation -->
<style lang="stylus">
  .vui-site-navigation a:hover
    border-color transparent

  .vui-site-navigation .active > a
    color #83c9bd
    border-bottom-color #83c9bd
</style>

<style lang="stylus">
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button
    -webkit-appearance: none
    margin: 0

  /* Days dropdown selector */
  .days-dropdown-selector .input
    position: relative

  .days-dropdown-selector .input i
    position: absolute
    top: 8px
    right: 6px

  .dropdown-menu-timeframe
    min-width: 8rem
    -webkit-transform: translate(-1rem, -120%)
    transform: translate(-1rem, -120%)
    z-index: 10000

  .dropdown-menu-timeframe.vui-nubbin--bottom:before
    z-index: -1

  .dropdown-menu-timeframe li
    line-height: 1rem
    padding: 0.25rem 0.5rem

  .dropdown-menu-timeframe li .checkbox
    display: block

  .dropdown-menu-fall-down
    -webkit-transform: translate(-1rem, 1%)
    transform: translate(-1rem, 1%)

  /* Time dropdown-selector */
  .time-dropdown-selector .dropdown
    padding: 0

  .time-dropdown-selector .dropdown input
    background: none

  .time-dropdown-selector .dropdown div i
    position: absolute
    top: 4px
    right: 0

  .time-dropdown.vui-dropdown
    min-width: 7rem
    -webkit-transform: translateX(-14%)
    transform: translateX(-14%)

  .time-dropdown.vui-nubbin--bottom:before
    z-index: -1

  .time-dropdown li
    padding: 0.25rem 0.5rem
    line-height: 1rem

  .time-dropdown li a
    display: block
    font-size: 1rem

  /* Old Custom Checkboxes */
  .checkbox
    display: inline-block
    padding-left: 0
    margin: 0

  .vui-checkbox label
    display: inline
    padding-left: 5px

  .vui-checkbox input[type="checkbox"]
    display: none

  .vui-checkbox-unchecked,
  .vui-checkbox-checked
    display: inline-block
    padding-left: 2px
    padding-right: 3px
    font-size: 12px
    color: #ffffff
    background-color: #ffffff
    border: solid 1px #ccc
    -webkit-border-radius: 2px
    -moz-border-radius: 2px
    -ms-border-radius: 2px
    border-radius: 2px

  .disabled label
    color: rgba(82, 84, 93, 0.6)
    cursor: not-allowed !important

  .disabled .vui-checkbox-checked,
  .disabled .vui-checkbox-unchecked
    color: #51545D
    border: solid 1px rgba(82, 84, 93, 0.14902)
    background-color: rgba(82, 84, 93, 0.14902)
    cursor: not-allowed !important

  .vui-checkbox-checked
    display: none
    color: #000000
    background-color: #ffffff

  .checked .vui-checkbox-checked
    display: inline-block

  .checked .vui-checkbox-unchecked
    display: none

  .checkbox .icons .vui-checkbox-unchecked i
    color: #fff

  .vui-time
    display: flex
    flex-direction: row
    align-items: center
    justify-content: flex-start

  .vui-time .vui-input
    width: 80px

  .vui-time input
    border: none
    width: 22px
    padding: 0
    margin: 0
    text-align: center
    height: 100%
    line-height: 100%

  .vui-time select
    width: 65px

  .vui-time input:focus
    color: #000
    border: none
    animation: blinker 1s linear infinite

  .vui-time input::selection
    background: none

  .vui-time > span
    display: none
</style>

<!-- TODO: De-dupe -->
<!-- Spot Allocations -- from videa-ui-components -->
<style lang="stylus">
  @import '~assets/variables'

  spot-allocation-width = 35px
  spot-allocation-height = 30px
  spotallocation-editable-height = 40px
  hiatus-color = #add8e6
  navigation-section-background-color = #51545D
  spot-item-color = white
  spot-item-border-color = #999
  spot-item-disabled = rgb(235, 235, 228)
  spot-allocation-cell-background-color = #D8E0E3

  .spot-allocation-cell
    background-color spot-allocation-cell-background-color

  .spot-allocation-cell > *, .spot-allocation-column > *
    display block
    height 100%
    .spot-allocation-row
      height 100%
      display flex
      flex-direction row
      justify-content flex-start
      align-items center
      & > div
        float left
      & > div:last-child
        right 2px
      .spot-allocation-nav-section
        width 24px
        height 100%
        position relative
        background-color navigation-section-background-color
        display inherit
        flex-direction inherit
        align-items inherit

      .spot-allocation-container
        overflow hidden

      .spot-allocation
        width 100%
        list-style none
        display flex
        padding 0
        margin 0
        position relative
        transition left 0.5s

        &.spot-allocation-headers
          & > li:last-child
            div
              border-right none
        & > li
          width auto
        li > div
          width spot-allocation-width
          text-align center
          border-right 2px solid spot-item-color
        li.hiatus-spot > div, li.hiatus-spot > div.spot-item-disabled
          background-color hiatus-color
          input
            background-color hiatus-color
        li > div.spot-item-disabled
          background-color spot-item-disabled
        li > div.editable-spot-value
          input
            border none
            height 100%
            text-align center
      .spot-allocation-data
        margin-left 24px
        li > div
          height spot-allocation-height
          border 1px solid spot-item-border-color
          margin-right 2px
          width 33px
          background-color spot-item-color
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          & > span
            line-height spot-allocation-height
            letter-spacing -0.03em
      &.has-quantity .table-row
        &.value
          height 0.625*spotallocation-editable-height
        &.quantity
          height 0.375*spotallocation-editable-height
          line-height 1.2
          text-decoration underline
          border none
          background spot-allocation-cell-background-color

  .spot-allocation-cell.editable-spot-allocation-cell
    .spot-allocation-data
      li > div
        height spotallocation-editable-height
        background-color transparent
        input
          text-align center
      li > div > span.text-underline
        line-height spotallocation-editable-height
        letter-spacing 0em
      li div.table-row span
        line-height 0
</style>

<!-- Spot Allocation -- from sellers -->
<style lang="stylus">
  @import '~assets/variables'
  /* Spot Allocation Column */
  .spot-allocation-column
    white-space normal !important
  .edit-spot-allocation input, .editable-spot-value input
    text-align center
    height 100%
    width 100%
  div.spot-item-disabled
    background-color rgb(235, 235, 228) !important
  th.spot-allocation-column,
  td.spot-allocation-cell
    padding 1px
  .spot-allocation-cell
    background-color #D8E0E3
  .spot-allocation-row > div
    float left
  .spot-allocation-row .spot-allocation-nav-section
    width 22px
    margin-top 7px
  .spot-allocation-row .spot-allocation-container
    overflow hidden
  .spot-allocation-row .spot-allocation
    display flex
    position relative
    width 100%
    padding 0
    margin 0
    list-style none
    transition left 0.5s
  .spot-allocation-row .spot-allocation > li
    width auto
  .spot-allocation-row .spot-allocation li > div
    width 35px
    text-align center
  .spot-allocation-row .spot-allocation li:not(:only-of-type) > div
    border-right 2px solid white
  .spot-allocation-row .spot-allocation-data
    margin-left 23px
  .spot-allocation-row .spot-allocation-data li > div
    width 33px
    height 30px
    border 1px solid silver
    margin-right 2px
    background-color #FFF
    font-size 0.7rem
  .spot-allocation-row .spot-allocation-data li > div span
    line-height 30px
  .spot-allocation-row .spot-allocation-data li > div span .highlight
    color #c5203e
  .left-icon
    background-image url('/static/shared/img/left-arrow.png')
  .button-icon
    display block
    width 100%
    height 21px
    padding 0
    margin 0
    background-repeat no-repeat
    background-position center
    cursor pointer
  .right-icon
    background-image url('/static/shared/img/right-arrow.png')
  .button-icon[disabled]
    opacity 0.5
</style>
