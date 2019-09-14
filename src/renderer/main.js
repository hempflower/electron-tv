import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import router from './router'
import Video from 'video.js'
import 'videojs-contrib-hls'
import 'video.js/dist/video-js.css'
import 'ant-design-vue/dist/antd.css'
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

Vue.prototype.$video = Video
Vue.use(Antd)
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
