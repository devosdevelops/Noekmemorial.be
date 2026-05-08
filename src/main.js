import { nextTick } from 'vue';
import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import './assets/styles.css';
import { scrollReveal } from './directives/scroll-reveal';
import { routes, scrollBehavior } from './router';
import { CONSENT_STATUS, hasAnalyticsConsent, initConsent, onConsentChange } from './utils/consent';
import { clearAllPageScrollLocks } from './utils/scroll-lock';

const GTM_ID = 'GTM-PSS6J47R';
let gtmLoaded = false;
let applyHeadingDigitFontFn = null;

const runWhenBrowserIdle = (task) => {
	if (typeof window === 'undefined') {
		return;
	}

	if ('requestIdleCallback' in window) {
		window.requestIdleCallback(task, { timeout: 1500 });
		return;
	}

	window.setTimeout(task, 0);
};

const loadGtm = () => {
	if (typeof window === 'undefined' || gtmLoaded) {
		return;
	}

	gtmLoaded = true;
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'gtm.start': new Date().getTime(),
		event: 'gtm.js'
	});

	const script = document.createElement('script');
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
	document.head.appendChild(script);
};

const applyHeadingDigitFontDeferred = () => {
	if (applyHeadingDigitFontFn) {
		applyHeadingDigitFontFn();
		return;
	}

	import('./utils/apply-heading-digit-font').then(({ applyHeadingDigitFont }) => {
		applyHeadingDigitFontFn = applyHeadingDigitFont;
		applyHeadingDigitFontFn();
	});
};

const maybeInitOverflowDebug = () => {
	if (typeof window === 'undefined') {
		return;
	}

	const params = new URLSearchParams(window.location.search);
	const fromQuery = params.get('debugOverflow');
	const fromStorage = window.localStorage.getItem('noek:debugOverflow') === '1';
	const shouldLoad = fromQuery === '1' || fromQuery === '0' || fromStorage;

	if (!shouldLoad) {
		return;
	}

	import('./utils/debug-overflow').then(({ initOverflowDebug }) => {
		initOverflowDebug();
	});
};

export const createApp = ViteSSG(
	App,
	{
		routes,
		scrollBehavior
	},
	({ app, router, isClient }) => {
		app.directive('scroll-reveal', scrollReveal);

		if (isClient) {
			const initialConsentStatus = initConsent();

			runWhenBrowserIdle(() => {
				import('./utils/cta-variant').then(({ pushCtaVariantToDataLayer }) => {
					pushCtaVariantToDataLayer();
				});
			});

			if (initialConsentStatus === CONSENT_STATUS.ALL) {
				runWhenBrowserIdle(() => {
					loadGtm();
				});
			}

			const startOverflowDebug = () => {
				requestAnimationFrame(() => maybeInitOverflowDebug());
			};

			if (document.readyState === 'complete') {
				startOverflowDebug();
			} else {
				window.addEventListener('load', startOverflowDebug, { passive: true, once: true });
			}

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
					runWhenBrowserIdle(() => {
						applyHeadingDigitFontDeferred();
					});
					pushPageview(to);
				});
			});

			onConsentChange(({ status }) => {
				if (status === CONSENT_STATUS.ALL) {
					loadGtm();
					pushPageview(router.currentRoute.value);
				}
			});

			nextTick(() => {
				resetPageScrollState();
				runWhenBrowserIdle(() => {
					applyHeadingDigitFontDeferred();
				});
			});
		}
	}
);
