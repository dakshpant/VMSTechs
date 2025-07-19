
  // const container = document.querySelector('.projectsSection .container');
  // const cols = document.querySelectorAll('.projectsSection .col');

  // container.addEventListener('scroll', () => {
  //   const scrollTop = container.scrollTop;

  //   cols.forEach((col) => {
  //     // Skip middle divs from parallax
  //     if (col.classList.contains('MiddleDiv')) {
  //       col.style.transform = 'none';
  //       return;
  //     }

  //     // Determine scroll direction effect
  //     if (col.classList.contains('moveUp')) {
  //       col.style.transform = `translateY(${-scrollTop * 0.05}px)`;
  //     } else if (col.classList.contains('moveDown')) {
  //       col.style.transform = `translateY(${scrollTop * 0.03}px)`;
  //     }
  //   });
  // });

const container = document.querySelector('.projectsSection .container');
const cols = document.querySelectorAll('.projectsSection .col');
const section = document.querySelector('.projectsSection');

container.addEventListener('scroll', () => {
  const scrollTop = container.scrollTop;

  // Get viewport height and section position
  const rect = section.getBoundingClientRect();
  const sectionMiddle = rect.top + rect.height / 2;
  const viewportMiddle = window.innerHeight / 2;

  // Only apply parallax if the middle of the section is near the middle of the viewport
  const isMiddleVisible = Math.abs(sectionMiddle - viewportMiddle) < 200; // adjust threshold as needed

  cols.forEach((col) => {
    if (!isMiddleVisible) {
      col.style.transform = 'none';
      return;
    }

    // Skip middle divs
    if (col.classList.contains('MiddleDiv')) {
      col.style.transform = 'none';
      return;
    }

    // Apply parallax scroll effect
    if (col.classList.contains('moveUp')) {
      col.style.transform = `translateY(${-scrollTop * 0.2}px)`;
    } else if (col.classList.contains('moveDown')) {
      col.style.transform = `translateY(${scrollTop * 0.2}px)`;
    }
  });
});
