const activeLocks = new Set();

let previousHtmlOverflow = '';
let previousHtmlPaddingRight = '';
let hasStoredInitialStyles = false;

const getScrollbarWidth = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return 0;
  }

  return Math.max(0, window.innerWidth - document.documentElement.clientWidth);
};

const applyLockStyles = () => {
  if (typeof document === 'undefined') {
    return;
  }

  const htmlStyle = document.documentElement.style;

  if (!hasStoredInitialStyles) {
    previousHtmlOverflow = htmlStyle.overflow;
    previousHtmlPaddingRight = htmlStyle.paddingRight;
    hasStoredInitialStyles = true;
  }

  const scrollbarWidth = getScrollbarWidth();
  htmlStyle.overflow = 'hidden';
  htmlStyle.paddingRight = scrollbarWidth > 0 ? `${scrollbarWidth}px` : '';
};

const restoreStyles = () => {
  if (typeof document === 'undefined') {
    return;
  }

  const htmlStyle = document.documentElement.style;
  htmlStyle.overflow = previousHtmlOverflow;
  htmlStyle.paddingRight = previousHtmlPaddingRight;
  hasStoredInitialStyles = false;
};

export const lockPageScroll = (lockId) => {
  if (typeof document === 'undefined') {
    return;
  }

  const id = lockId || 'default';
  activeLocks.add(id);
  applyLockStyles();
};

export const unlockPageScroll = (lockId) => {
  if (typeof document === 'undefined') {
    return;
  }

  const id = lockId || 'default';
  activeLocks.delete(id);

  if (activeLocks.size === 0) {
    restoreStyles();
  }
};

export const clearAllPageScrollLocks = () => {
  if (typeof document === 'undefined') {
    return;
  }

  activeLocks.clear();
  restoreStyles();
};

export const hasActivePageScrollLocks = () => activeLocks.size > 0;
