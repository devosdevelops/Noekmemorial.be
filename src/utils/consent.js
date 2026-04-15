export const CONSENT_COOKIE = 'noek_consent';
export const CONSENT_STATUS = {
  UNKNOWN: 'unknown',
  ESSENTIAL: 'essential',
  ALL: 'all'
};

const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180;
const CONSENT_EVENT = 'noek:consent:changed';
const CONSENT_OPEN_EVENT = 'noek:consent:open';

const readCookie = (name) => {
  if (typeof document === 'undefined') {
    return '';
  }

  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : '';
};

const writeCookie = (name, value) => {
  if (typeof document === 'undefined') {
    return;
  }

  let cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${CONSENT_MAX_AGE_SECONDS}; samesite=lax`;
  if (typeof location !== 'undefined' && location.protocol === 'https:') {
    cookie += '; secure';
  }
  document.cookie = cookie;
};

const pushConsentMode = (status) => {
  if (typeof window === 'undefined') {
    return;
  }

  const granted = status === CONSENT_STATUS.ALL;
  const update = {
    ad_storage: 'denied',
    analytics_storage: granted ? 'granted' : 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  };

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', update);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(['consent', 'update', update]);
};

const pushConsentEvent = (status) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'consent_update',
    consent_status: status,
    analytics_storage: status === CONSENT_STATUS.ALL ? 'granted' : 'denied',
    ad_storage: 'denied'
  });
};

export const getConsentStatus = () => {
  const value = readCookie(CONSENT_COOKIE);
  if (!value) {
    return CONSENT_STATUS.UNKNOWN;
  }
  if (value === CONSENT_STATUS.ALL || value === CONSENT_STATUS.ESSENTIAL) {
    return value;
  }
  return CONSENT_STATUS.UNKNOWN;
};

export const setConsentStatus = (status) => {
  if (status !== CONSENT_STATUS.ALL && status !== CONSENT_STATUS.ESSENTIAL) {
    return;
  }

  writeCookie(CONSENT_COOKIE, status);
  pushConsentMode(status);
  pushConsentEvent(status);

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: { status } }));
  }
};

export const initConsent = () => {
  const status = getConsentStatus();
  if (status !== CONSENT_STATUS.UNKNOWN) {
    pushConsentMode(status);
    pushConsentEvent(status);
  }
  return status;
};

export const hasAnalyticsConsent = () => getConsentStatus() === CONSENT_STATUS.ALL;

export const onConsentChange = (handler) => {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const listener = (event) => handler(event.detail);
  window.addEventListener(CONSENT_EVENT, listener);
  return () => window.removeEventListener(CONSENT_EVENT, listener);
};

export const openConsentManager = () => {
  if (typeof window === 'undefined') {
    return;
  }

  window.dispatchEvent(new CustomEvent(CONSENT_OPEN_EVENT));
};

export const onConsentManagerOpen = (handler) => {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const listener = () => handler();
  window.addEventListener(CONSENT_OPEN_EVENT, listener);
  return () => window.removeEventListener(CONSENT_OPEN_EVENT, listener);
};
