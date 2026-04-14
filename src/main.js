import { nextTick } from 'vue';
import { ViteSSG } from 'vite-ssg';
import { createHeadCore } from '@unhead/vue';
import App from './App.vue';
import './assets/styles.css';
import { scrollReveal } from './directives/scroll-reveal';
import { routes, scrollBehavior } from './router';
import { applyHeadingDigitFont } from './utils/apply-heading-digit-font';

export const createApp = ViteSSG(
	App,
	{
		routes,
		scrollBehavior
	},
	({ app, router, isClient }) => {
		const head = createHeadCore();
		app.use(head);
		app.directive('scroll-reveal', scrollReveal);

		if (isClient) {
			router.afterEach((to) => {
				nextTick(() => {
					applyHeadingDigitFont();
					window.dataLayer = window.dataLayer || [];
					window.dataLayer.push({
						event: 'pageview',
						page_path: to.fullPath,
						page_title: document.title,
						page_location: window.location.href
					});
				});
			});

			nextTick(() => applyHeadingDigitFont());
		}
	}
);
