import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import VueCropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記
Vue.use(VueAxios, axios) //追記

createApp(App).use(router).mount('#app')
