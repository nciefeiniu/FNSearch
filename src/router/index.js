// import Vue from 'vue'
// import Router from 'vue-router'
// import Index from '@/components/Index'
// import SearchResult from '@/components/SearchResult'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/search',
//       name: 'search',
//       compent: SearchResult
//     },
//     {
//       path: '/',
//       name: 'index',
//       component: Index
//     },

//   ]
// })


import App from '../App'

export default [{
  path: '/',
  component: App,
  children: [{
    path: '/',
    component: r => require.ensure([], () => r(require('@/components/Index')), 'index')
  }, {
    path: '/search',
    component: r => require.ensure([], () => r(require('@/components/SearchResult')), 'search')
  }]
}]