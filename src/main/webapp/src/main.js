import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import VueCropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';


createApp(App).use(router).mount('#app')
