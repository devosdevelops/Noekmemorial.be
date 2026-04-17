import { nextTick } from 'vue';
import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import './assets/styles.css';
import { scrollReveal } from './directives/scroll-reveal';
import { routes, scrollBehavior } from './router';
import { applyHeadingDigitFont } from './utils/apply-heading-digit-font';
import { CONSENT_STATUS, hasAnalyticsConsent, initConsent, onConsentChange } from './utils/consent';
import { initOverflowDebug } from './utils/debug-overflow';
import { clearAllPageScrollLocks } from './utils/scroll-lock';

export const createApp = ViteSSG(
	App,
	{
		routes,
		scrollBehavior
	},
	({ app, router, isClient }) => {
		app.directive('scroll-reveal', scrollReveal);

		if (isClient) {
			initOverflowDebug();
			initConsent();

			const resetPageScrollState = () => {
				const hasOpenConsentModal = Boolean(document.querySelector('.consent-backdrop'));
				if (hasOpenConsentModal) {
					return;
				}

				clearAllPageScrollLocks();
			};

			const pushPageview = (route) => {
				if (!hasAnalyticsConsent()) {
					return;
				}
				window.dataLayer = window.dataLayer || [];
				window.dataLayer.push({
					event: 'pageview',
					page_path: route.fullPath,
					page_title: document.title,
					page_location: window.location.href
				});
			};

			router.afterEach((to) => {
				nextTick(() => {
					resetPageScrollState();
					applyHeadingDigitFont();
					pushPageview(to);
				});
			});

			onConsentChange(({ status }) => {
				if (status === CONSENT_STATUS.ALL) {
					pushPageview(router.currentRoute.value);
				}
			});

			nextTick(() => {
				resetPageScrollState();
				applyHeadingDigitFont();
			});
		}
	}
);
