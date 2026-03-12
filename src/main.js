import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles.css';
import { scrollReveal } from './directives/scroll-reveal';

const app = createApp(App);
app.directive('scroll-reveal', scrollReveal);
app.mount('#app');
