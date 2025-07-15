
  const container = document.querySelector('.projectsSection .container');
  const cols = document.querySelectorAll('.projectsSection .col');

  container.addEventListener('scroll', () => {
    const scrollTop = container.scrollTop;

    cols.forEach((col) => {
      // Skip middle divs from parallax
      if (col.classList.contains('MiddleDiv')) {
        col.style.transform = 'none';
        return;
      }

      // Determine scroll direction effect
      if (col.classList.contains('moveUp')) {
        col.style.transform = `translateY(${-scrollTop * 0.1}px)`;
      } else if (col.classList.contains('moveDown')) {
        col.style.transform = `translateY(${scrollTop * 0.1}px)`;
      }
    });
  });

// M3
// (() => {
//   const container = document.querySelector('.projectsSection .container');
//   if (!container) return;

//   const cols = Array.from(container.querySelectorAll('.col'));
//   const animatedCols = cols.filter(col => !col.classList.contains('MiddleDiv'));

//   let lastScrollTop = 0;
//   let ticking = false;
//   let scrollResetTimeout;

//   function applyParallax(scrollTop) {
//     animatedCols.forEach(col => {
//       const direction = col.classList.contains('moveUp') ? -1 : 1;
//       const offset = scrollTop * 0.1 * direction;
//       col.style.transform = `translateY(${offset}px)`;
//     });
//   }

//   function resetParallax() {
//     animatedCols.forEach(col => {
//       col.style.transform = 'none';
//     });
//   }

//   function onScroll() {
//     lastScrollTop = container.scrollTop;

//     if (!ticking) {
//       window.requestAnimationFrame(() => {
//         applyParallax(lastScrollTop);
//         ticking = false;
//       });
//       ticking = true;
//     }

//     clearTimeout(scrollResetTimeout);
//     scrollResetTimeout = setTimeout(() => {
//       resetParallax();
//     }, 150);
//   }

//   container.addEventListener('scroll', onScroll);
// })();

// if (Math.abs(offset) < 400) {
//   col.classList.add('visible');
// } else {
//   col.classList.remove('visible');
// }
