import Vue from 'vue'
import VueScroll from 'vue-scrollto'

Vue.use(VueScroll)

// You can also pass in the default options
Vue.use(VueScroll, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
