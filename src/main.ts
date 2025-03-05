import App from './App.vue'
import autofit from 'autofit.js'
import { router } from '@/router'
import { createApp } from 'vue'
import 'animate.css'
import 'leaflet/dist/leaflet.css'
import '@arco-design/web-vue/dist/arco.less'
import '@/assets/styles/reset.scss'
import '@/assets/fonts/DincorosBlack/result.css'
import '@/assets/fonts/SarasaMonoSC/result.css'
import '@/assets/fonts/Furore/result.css'
import '@/assets/iconfont/iconfont.css'

const boostrap = async () => {
  const app = createApp(App)
  app.use(router)
  app.mount('#app')

  const ScreenSize = {
    big: [2560, 1440],
    normal: [1500, 1000],
    small: [1280, 720],
  }['normal']

  autofit.init({
    el: '#app',
    dw: ScreenSize[0],
    dh: ScreenSize[1],
    resize: true,
    ignore: ['.map-container', '.base-uav-marker'],
  })
}

boostrap()
