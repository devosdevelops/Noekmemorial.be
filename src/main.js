import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles.css';
import { scrollReveal } from './directives/scroll-reveal';
import router from './router';

const app = createApp(App);
app.directive('scroll-reveal', scrollReveal);
app.use(router);
app.mount('#app');
