import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import BootstrapVueNext from 'bootstrap-vue-next'
import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faWineBottle, faBed, faBath, faUserSecret, faTv, faCouch, faSnowflake, faWifi, faMugSaucer, faWheelchairMove} from '@fortawesome/free-solid-svg-icons'

library.add(faWineBottle, faBed, faBath, faTv, faCouch, faSnowflake, faWifi, faMugSaucer, faWheelchairMove )

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BootstrapVueNext)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

