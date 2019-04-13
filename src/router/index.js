
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