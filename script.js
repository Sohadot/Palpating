(() => {
  const data = {
    stiffness: { label: 'STIFFNESS', scale: 1.00, skew: 0 },
    elasticity: { label: 'ELASTICITY', scale: 1.06, skew: 10 },
    pressure: { label: 'PRESSURE', scale: .94, skew: -8 },
    tension: { label: 'TENSION', scale: 1.10, skew: 4 },
    texture: { label: 'TEXTURE', scale: 1.03, skew: -4 },
    mobility: { label: 'MOBILITY', scale: .97, skew: 13 },
    resistance: { label: 'RESISTANCE', scale: 1.08, skew: -12 },
    deformation: { label: 'DEFORMATION', scale: .92, skew: 7 },
    asymmetry: { label: 'ASYMMETRY', scale: 1.04, skew: -15 }
  };

  const field = document.querySelector('[data-signal-field]');
  const readout = document.querySelector('[data-readout]');
  const contours = field?.querySelectorAll('.contours path');
  const stage = document.querySelector('[data-landscape-stage]');
  const stageWord = document.querySelector('[data-stage-word]');
  const stageLines = stage?.querySelectorAll('.stage-line');

  function applySign(key) {
    const item = data[key] || data.stiffness;
    if (readout) readout.textContent = item.label;
    if (stageWord) stageWord.textContent = item.label;
    contours?.forEach((path, index) => {
      const localScale = item.scale + index * .006;
      path.style.transformOrigin = '320px 280px';
      path.style.transform = `scale(${localScale}) translateX(${item.skew * (index / 5)}px)`;
    });
    stageLines?.forEach((line, index) => {
      line.style.transformOrigin = 'center';
      line.style.transform = `translateY(${(item.skew * (index + 1)) / 3}px) scaleY(${item.scale})`;
    });
  }

  document.querySelectorAll('[data-sign]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-sign]').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      applySign(button.dataset.sign);
    });
    button.addEventListener('mouseenter', () => applySign(button.dataset.sign));
    button.addEventListener('focus', () => applySign(button.dataset.sign));
  });

  field?.querySelectorAll('[data-point]').forEach(point => {
    point.style.cursor = 'pointer';
    point.addEventListener('mouseenter', () => applySign(point.dataset.point));
    point.addEventListener('focus', () => applySign(point.dataset.point));
  });

  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: .12 })
    : null;

  document.querySelectorAll('main > section').forEach((section, index) => {
    if (index === 0 || !observer) return;
    section.classList.add('reveal');
    observer.observe(section);
  });

  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  applySign('stiffness');
})();
