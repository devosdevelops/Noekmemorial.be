const observerMap = new WeakMap();

const getOffset = (origin, distance) => {
  switch (origin) {
    case 'left':
      return { x: -distance, y: 0 };
    case 'right':
      return { x: distance, y: 0 };
    case 'up':
      return { x: 0, y: -distance };
    default:
      return { x: 0, y: distance };
  }
};

const normalizeConfig = (value) => {
  const config = {
    delay: 0,
    duration: 300,
    distance: 24,
    origin: 'down'
  };

  if (!value || typeof value !== 'object') {
    return config;
  }

  return {
    delay: Number.isFinite(value.delay) ? value.delay : config.delay,
    duration: Number.isFinite(value.duration) ? value.duration : config.duration,
    distance: Number.isFinite(value.distance) ? value.distance : config.distance,
    origin: value.origin || config.origin
  };
};

const shouldReduceMotion = () => {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const scrollReveal = {
  mounted(el, binding) {
    if (typeof window === 'undefined') {
      return;
    }

    if (shouldReduceMotion()) {
      el.classList.add('is-revealed');
      return;
    }

    const config = normalizeConfig(binding.value);
    const { x, y } = getOffset(config.origin, config.distance);

    el.classList.add('scroll-reveal');
    el.style.setProperty('--reveal-distance-x', `${x}px`);
    el.style.setProperty('--reveal-distance-y', `${y}px`);
    el.style.setProperty('--reveal-duration', `${config.duration}ms`);
    el.style.setProperty('--reveal-delay', `${config.delay}ms`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          el.classList.add('is-revealed');
          observer.unobserve(el);
        });
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    observer.observe(el);
    observerMap.set(el, observer);
  },
  unmounted(el) {
    const observer = observerMap.get(el);
    if (!observer) {
      return;
    }

    observer.unobserve(el);
    observer.disconnect();
    observerMap.delete(el);
  }
};
