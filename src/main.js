import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import BootstrapVueNext from 'bootstrap-vue-next'
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import axios from 'axios'

import App from './App.vue'
import router from './router'

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faWineBottle, faBed, faBath, faUserSecret, faTv, faCouch, faSnowflake, faWifi, faMugSaucer, 
    faWheelchairMove, faRightToBracket, faUser, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { useAuthenticationApiStore } from './stores/authenticationApiStore'

library.add(faWineBottle, faBed, faBath, faTv, faCouch, faSnowflake, faWifi, faMugSaucer, faWheelchairMove, faRightToBracket, faRightFromBracket, faUser )

const app = createApp(App)

axios.defaults.baseURL = 'https://boutique-hotel.helmuth-lammer.at/api/v1/';

axios.interceptors.request.use(
  (config) => {
    const token = useAuthenticationApiStore().$state.token
    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


app.use(createPinia())
app.use(router)
app.use(BootstrapVueNext)

if(localStorage.token == null){
  useAuthenticationApiStore().logout();
}

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

