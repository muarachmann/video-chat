import Vue from 'vue'
import WebRTC from 'vue-webrtc'
import App from './App.vue'
import * as io from 'socket.io-client'
window.io = io


Vue.use(WebRTC)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
