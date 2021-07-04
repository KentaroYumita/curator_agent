import { createApp } from 'vue'
import App from './App.vue'
//@ts-ignore
import router from './router/index.ts'
//@ts-ignore
import store from './store/index.ts'
// eslint-disable-next-line no-unused-vars
import VueCropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

createApp(App).use(router).use(store).mount('#app')
