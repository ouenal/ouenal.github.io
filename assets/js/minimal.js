(() => {
  const container = document.querySelector('.home-panels');
  if (!container) return;
  const main = document.querySelector('.home-main');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const revealSpeed = .85; // CSS pixels per millisecond, shared by every panel.
  const rampTime = 120;
  const fadeTime = 160;
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
    main.style.removeProperty('align-self');
    main.style.removeProperty('margin-top');
    container.style.removeProperty('height');
  };

  const show = (next, animate = true) => {
    const version = ++transition;
    const previous = panels.find(({ panel }) => !panel.hidden);
    const startTop = main.getBoundingClientRect().top + window.scrollY;
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

      // Measure the final natural layout, then move the intro independently
      // of the document's height so a long list cannot rush its movement.
      const endTop = main.getBoundingClientRect().top + window.scrollY;
      const endHeight = container.getBoundingClientRect().height;
      const panelOffset = container.getBoundingClientRect().top - main.getBoundingClientRect().top;
      const visibleHeight = Math.max(window.innerHeight * .5,
        window.scrollY + window.innerHeight - Math.min(startTop, endTop) - panelOffset + 48);
      if (!next && previous) previous.panel.hidden = false;
      main.style.alignSelf = 'start';
      main.style.marginTop = endTop + 'px';
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
      const position = main.animate(movement.map(({ progress, ...frame }) => ({
        ...frame, transform: `translateY(${(startTop - endTop) * (1 - progress)}px)`
      })), timing);
      const reveal = container.animate(movement.map(({ progress, ...frame }) => ({
        ...frame, height: (fromHeight + (toHeight - fromHeight) * progress) + 'px'
      })), timing);
      const fade = container.animate([{ opacity }, { opacity: next ? 1 : 0 }], {
        duration: fadeTime, delay: next ? 0 : Math.max(0, duration - fadeTime),
        easing: 'ease-in-out', fill: 'both'
      });
      animations = [position, reveal, fade];
      const lastAnimation = duration >= fadeTime ? reveal : fade;
      lastAnimation.onfinish = () => {
        if (version === transition) finish();
      };
    };

    if (next && previous && next !== previous && startOpacity > .05) {
      // Let the outgoing content fade before replacing it, without stacking
      // sections or moving the intro during the handoff.
      main.style.alignSelf = 'start';
      main.style.marginTop = startTop + 'px';
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
