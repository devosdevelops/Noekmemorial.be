import { createApp, nextTick } from 'vue';
import App from './App.vue';
import './assets/styles.css';
import { scrollReveal } from './directives/scroll-reveal';
import router from './router';
import { applyHeadingDigitFont } from './utils/apply-heading-digit-font';

const app = createApp(App);
app.directive('scroll-reveal', scrollReveal);
app.use(router);

router.afterEach(() => {
	nextTick(() => applyHeadingDigitFont());
});

app.mount('#app');
nextTick(() => applyHeadingDigitFont());
