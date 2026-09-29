(() => {
  const container = document.querySelector('.home-panels');
  if (!container) return;
  const main = document.querySelector('.home-main');
  const profile = main.querySelector('.profile');
  const footer = document.querySelector('.site-footer');

  // Center only the introduction. Panel height must never change its position.
  const updateIntroSpacing = () => {
    main.style.setProperty('--profile-height', profile.getBoundingClientRect().height + 'px');
    main.style.setProperty('--footer-height', footer.getBoundingClientRect().height + 'px');
  };
  updateIntroSpacing();
  main.classList.add('anchored');
  const introObserver = new ResizeObserver(updateIntroSpacing);
  introObserver.observe(profile);
  introObserver.observe(footer);

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const revealSpeed = 3.825; // CSS pixels per millisecond, shared in both directions.
  const rampTime = 40;
  const fadeTime = 320 / 3;
  const panels = [...document.querySelectorAll('[data-panel-toggle]')].map(toggle => ({
    toggle,
    panel: document.getElementById(toggle.getAttribute('aria-controls'))
  })).filter(({ panel }) => panel);
  let active = null;
  let animations = [];
  let transition = 0;

  const cancelAnimations = () => {
    animations.forEach(animation => {
      animation.onfinish = null;
      animation.cancel();
    });
    animations = [];
  };

  const resetLayout = () => {
    container.style.removeProperty('height');
  };

  const show = (next, animate = true) => {
    const version = ++transition;
    const previous = panels.find(({ panel }) => !panel.hidden);
    const startHeight = container.getBoundingClientRect().height;
    const startOpacity = previous ? Number(getComputedStyle(container).opacity) : 0;
    cancelAnimations();

    panels.forEach(entry => {
      const open = entry === next;
      entry.toggle.setAttribute('aria-expanded', String(open));
      entry.toggle.querySelector('.panel-indicator').textContent = open ? '−' : '+';
      if (!open && entry.panel.contains(document.activeElement)) {
        (next || entry).toggle.focus({ preventScroll: true });
      }
      entry.panel.inert = !open;
    });
    active = next;

    const finish = () => {
      cancelAnimations();
      panels.forEach(entry => { entry.panel.hidden = entry !== active; });
      resetLayout();
    };
    if (!animate || reducedMotion.matches) {
      finish();
      return;
    }

    const move = (opacity) => {
      if (version !== transition) return;
      cancelAnimations();
      resetLayout();
      panels.forEach(entry => { entry.panel.hidden = entry !== next; });

      // Measure the panel while keeping the introduction anchored above it.
      const endHeight = container.getBoundingClientRect().height;
      const visibleHeight = Math.max(window.innerHeight * .5,
        window.innerHeight - container.getBoundingClientRect().top + 48);
      if (!next && previous) previous.panel.hidden = false;
      const fromHeight = Math.min(startHeight, visibleHeight);
      const toHeight = Math.min(endHeight, visibleHeight);
      container.style.height = fromHeight + 'px';

      // Use the same reveal speed, not the same total duration. Fixed-time
      // acceleration/deceleration ramps join a constant-speed middle section.
      const distance = Math.abs(toHeight - fromHeight);
      const ramp = Math.min(rampTime, distance / revealSpeed);
      const duration = distance / revealSpeed + ramp;
      const rampOffset = duration ? ramp / duration : 0;
      const rampProgress = distance ? revealSpeed * ramp / (2 * distance) : 0;
      const movement = distance ? [
        { offset: 0, progress: 0, easing: 'cubic-bezier(.333333, 0, .666667, .333333)' },
        { offset: rampOffset, progress: rampProgress, easing: 'linear' },
        { offset: 1 - rampOffset, progress: 1 - rampProgress, easing: 'cubic-bezier(.333333, .666667, .666667, 1)' },
        { offset: 1, progress: 1 }
      ] : [{ offset: 0, progress: 0 }, { offset: 1, progress: 1 }];
      const timing = { duration, fill: 'both' };

      // Only animate the height visible on screen. Restore the full document
      // height afterward; the extra content is already below the viewport.
      const reveal = container.animate(movement.map(({ progress, ...frame }) => ({
        ...frame, height: (fromHeight + (toHeight - fromHeight) * progress) + 'px'
      })), timing);
      const fade = container.animate([{ opacity }, { opacity: next ? 1 : 0 }], {
        duration: fadeTime, delay: next ? 0 : Math.max(0, duration - fadeTime),
        easing: 'ease-in-out', fill: 'both'
      });
      animations = [reveal, fade];
      const lastAnimation = duration >= fadeTime ? reveal : fade;
      lastAnimation.onfinish = () => {
        if (version === transition) finish();
      };
    };

    if (next && previous && next !== previous && startOpacity > .05) {
      // Let the outgoing content fade before replacing it, without stacking
      // sections or moving the intro during the handoff.
      container.style.height = startHeight + 'px';
      const fade = container.animate([{ opacity: startOpacity }, { opacity: 0 }], {
        duration: fadeTime, easing: 'ease-in-out', fill: 'both'
      });
      animations = [fade];
      fade.onfinish = () => move(0);
    } else {
      move(startOpacity);
    }
  };

  panels.forEach(entry => {
    entry.toggle.addEventListener('click', () => show(active === entry ? null : entry));
  });

  const followHash = () => {
    const target = document.getElementById(location.hash.slice(1));
    if (!target) return;
    const match = panels.find(({ panel }) => panel.contains(target));
    if (!match) return;
    show(match, false);
    requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  };
  followHash();
  window.addEventListener('hashchange', followHash);
  window.addEventListener('resize', () => { if (animations.length) show(active, false); });
  reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) show(active, false); });
})();
