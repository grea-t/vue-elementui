import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Mine from '../pages/Mine'
import Search from '../pages/Search'
import SongList from '../pages/SongList'
import Artists from '../pages/Artists'
import Top from '../pages/Top'

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/mine',
      component: Mine
    }, {
      path: '/search',
      component: Search
    }, {
      path: '/songList',
      component: SongList
    }, {
      path: '/artists',
      component: Artists
    }, {
      path: '/top',
      component: Top
    }
  ]
})

