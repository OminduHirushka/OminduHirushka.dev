export const performanceUtils = {
  isMobile: () => {
    return (
      window.innerWidth <= 768 ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    );
  },

  prefersReducedMotion: () => {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  },

  throttle: (func, limit) => {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  debounce: (func, wait, immediate) => {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },

  getDevicePerformanceScore: () => {
    const isMobile = performanceUtils.isMobile();
    const isLowEnd = navigator.hardwareConcurrency <= 2;
    const hasSlowConnection =
      navigator.connection &&
      (navigator.connection.effectiveType === "slow-2g" ||
        navigator.connection.effectiveType === "2g");

    if (isMobile && (isLowEnd || hasSlowConnection)) {
      return "low";
    } else if (isMobile) {
      return "medium";
    } else {
      return "high";
    }
  },

  getAnimationSettings: () => {
    const performanceScore = performanceUtils.getDevicePerformanceScore();
    const reducedMotion = performanceUtils.prefersReducedMotion();

    if (reducedMotion) {
      return {
        duration: 0.1,
        stagger: 0,
        particles: 0,
        effects: false,
      };
    }

    switch (performanceScore) {
      case "low":
        return {
          duration: 0.3,
          stagger: 0.05,
          particles: 10,
          effects: false,
        };
      case "medium":
        return {
          duration: 0.5,
          stagger: 0.1,
          particles: 20,
          effects: true,
        };
      case "high":
      default:
        return {
          duration: 0.8,
          stagger: 0.3,
          particles: 30,
          effects: true,
        };
    }
  },
};

export default performanceUtils;
