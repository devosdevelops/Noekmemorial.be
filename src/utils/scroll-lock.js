const activeLocks = new Set();

let previousHtmlOverflow = '';
let hasStoredInitialStyles = false;

const applyLockStyles = () => {
  if (typeof document === 'undefined') {
    return;
  }

  const htmlStyle = document.documentElement.style;

  if (!hasStoredInitialStyles) {
    previousHtmlOverflow = htmlStyle.overflow;
    hasStoredInitialStyles = true;
  }

  htmlStyle.overflow = 'hidden';
};

const restoreStyles = () => {
  if (typeof document === 'undefined') {
    return;
  }

  const htmlStyle = document.documentElement.style;
  htmlStyle.overflow = previousHtmlOverflow;
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
