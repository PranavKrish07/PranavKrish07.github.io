// ===========================================================
// Pranav Krishna Kandi — Portfolio interactions
// ===========================================================
document.addEventListener('DOMContentLoaded', () => {

  /* --- Nav: scrolled state + mobile toggle --- */
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');

  const onScroll = () => {
    if (window.scrollY > 12) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('is-open');
      links.classList.toggle('is-open');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('is-open');
        links.classList.remove('is-open');
      });
    });
  }

  /* --- Scroll reveal --- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* --- Stat bar fill on visible (About page "stat sheet") --- */
  const statFills = document.querySelectorAll('.stat__fill');
  if ('IntersectionObserver' in window && statFills.length) {
    const statIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target.dataset.level || 0;
          entry.target.style.width = target + '%';
          statIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    statFills.forEach(el => statIo.observe(el));
  } else {
    statFills.forEach(el => { el.style.width = (el.dataset.level || 0) + '%'; });
  }

  /* --- Hero typing effect --- */
  const typeEl = document.querySelector('[data-typeline]');
  if (typeEl) {
    const phrases = JSON.parse(typeEl.dataset.typeline);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      typeEl.textContent = phrases[0];
    } else {
      let phraseIndex = 0, charIndex = 0, deleting = false;
      const textNode = document.createElement('span');
      typeEl.innerHTML = '';
      typeEl.appendChild(textNode);
      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      typeEl.appendChild(cursor);

      const tick = () => {
        const current = phrases[phraseIndex];
        if (!deleting) {
          charIndex++;
          textNode.textContent = current.slice(0, charIndex);
          if (charIndex === current.length) {
            deleting = true;
            setTimeout(tick, 1400);
            return;
          }
        } else {
          charIndex--;
          textNode.textContent = current.slice(0, charIndex);
          if (charIndex === 0) {
            deleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
          }
        }
        setTimeout(tick, deleting ? 35 : 65);
      };
      setTimeout(tick, 500);
    }
  }

  /* --- Copy email button --- */
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const value = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(value);
        const original = btn.textContent;
        btn.textContent = 'Copied to clipboard';
        setTimeout(() => { btn.textContent = original; }, 1800);
      } catch (e) {
        /* clipboard unavailable — link still works as a fallback */
      }
    });
  });

  /* --- Custom Cursor --- */
  if (!window.matchMedia('(pointer: coarse)').matches) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    const cursorTrail = document.createElement('div');
    cursorTrail.className = 'custom-cursor-trail';
    document.body.appendChild(cursor);
    document.body.appendChild(cursorTrail);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    });

    const animate = () => {
      let distX = mouseX - cursorX;
      let distY = mouseY - cursorY;
      cursorX = cursorX + (distX * 0.15);
      cursorY = cursorY + (distY * 0.15);
      cursorTrail.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    };
    animate();

    const interactiveEls = document.querySelectorAll('a, button, .btn');
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('is-hovering');
        cursorTrail.classList.add('is-hovering');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('is-hovering');
        cursorTrail.classList.remove('is-hovering');
      });
    });
  }

});
