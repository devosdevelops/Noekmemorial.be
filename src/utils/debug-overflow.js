const OVERFLOW_DEBUG_PARAM = 'debugOverflow';
const OVERFLOW_DEBUG_KEY = 'noek:debugOverflow';

function getOverflowAmount() {
  const root = document.documentElement;
  return Math.ceil(root.scrollWidth - root.clientWidth);
}

function collectOffenders(viewportWidth) {
  const offenders = [];
  const nodes = document.body?.querySelectorAll('*') || [];

  nodes.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) {
      return;
    }

    const overflowRight = Math.max(0, rect.right - viewportWidth);
    const overflowLeft = Math.max(0, 0 - rect.left);
    const overflowPixels = Math.max(overflowRight, overflowLeft);

    if (overflowPixels > 1) {
      offenders.push({
        element,
        overflowPixels,
        left: Math.round(rect.left),
        right: Math.round(rect.right),
        width: Math.round(rect.width)
      });
    }
  });

  return offenders
    .sort((a, b) => b.overflowPixels - a.overflowPixels)
    .slice(0, 12)
    .map(({ element, overflowPixels, left, right, width }) => ({
      node: element.tagName.toLowerCase(),
      className: element.className || '-',
      overflowPixels,
      left,
      right,
      width
    }));
}

function shouldEnableDebug() {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get(OVERFLOW_DEBUG_PARAM);

  if (fromQuery === '1') {
    localStorage.setItem(OVERFLOW_DEBUG_KEY, '1');
    return true;
  }

  if (fromQuery === '0') {
    localStorage.removeItem(OVERFLOW_DEBUG_KEY);
    return false;
  }

  return localStorage.getItem(OVERFLOW_DEBUG_KEY) === '1';
}

export function initOverflowDebug() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  if (!shouldEnableDebug()) {
    return;
  }

  const reportOverflow = () => {
    const overflowAmount = getOverflowAmount();
    if (overflowAmount <= 0) {
      return;
    }

    const viewportWidth = document.documentElement.clientWidth;
    const offenders = collectOffenders(viewportWidth);

    console.groupCollapsed(`[overflow-debug] Horizontal overflow: ${overflowAmount}px`);
    console.log('Enable: ?debugOverflow=1, Disable: ?debugOverflow=0');

    if (offenders.length > 0) {
      console.table(offenders);
    } else {
      console.log('No obvious offenders found in body descendants.');
    }

    console.groupEnd();
  };

  const scheduleReport = () => {
    requestAnimationFrame(reportOverflow);
  };

  const observer = new MutationObserver(scheduleReport);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class', 'style']
  });

  window.addEventListener('load', scheduleReport, { passive: true });
  window.addEventListener('resize', scheduleReport, { passive: true });
  window.addEventListener('orientationchange', scheduleReport, { passive: true });

  scheduleReport();
}
