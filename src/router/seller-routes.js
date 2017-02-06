module.exports = [
  {
    path: '/sellers/reporting/program-revenue',
    name: 'sellers-reporting-program-revenue',
    component: require('pages/sellers/reporting/program-revenue')
  },
  {
    path: '/sellers/reporting/account-performance',
    name: 'sellers-reporting-account-performance',
    component: require('pages/sellers/reporting/account-performance')
  },
  {
    path: '/sellers/reporting/order-reporting',
    name: 'sellers-reporting-order-reporting',
    component: require('pages/sellers/reporting/order-reporting')
  },
  {
    path: '/sellers/reporting/order-reporting/:id',
    name: 'sellers-reporting-order-reporting-id',
    component: require('pages/sellers/reporting/order-reporting/_id')
  },
  {
    path: '/sellers/campaign-performance',
    name: 'sellers-campaign-performance',
    component: require('pages/sellers/campaign-performance')
  },
  {
    path: '/sellers/campaign-performance/:id',
    name: 'sellers-campaign-performance-id',
    component: require('pages/sellers/campaign-performance/_id')
  }
]