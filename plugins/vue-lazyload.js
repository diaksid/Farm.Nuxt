import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  // proportion of pre-loading height
  // preLoad: 1.3,
  // src of the image upon load fail
  error: '/images/error.svg',
  // src of the image while loading
  loading: '/images/loading/0.svg'
  // default 3
  // attempt: 1,
  // default ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  // listenEvents: [ 'scroll', 'resize' ]
})
