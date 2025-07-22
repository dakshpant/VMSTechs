const accordions = document.querySelectorAll('.accordion');
//Sets .accThree as expanded initially
document.querySelector('.accThree').classList.add('expanded');

accordions.forEach(acc => {
  acc.addEventListener('click', () => {
    accordions.forEach(other => {
      other.classList.remove('expanded');
    });
    acc.classList.add('expanded');
  });
});
// Vertical Accordion
  const VerticalAccordions = document.querySelectorAll('.verticalAccordion');

  // Set default open accordion
  document.querySelector('.VaccThree')?.classList.add('expanded');

VerticalAccordions.forEach(acc => {
    acc.addEventListener('click', () => {
      // Collapse others
     VerticalAccordions.forEach(other => other.classList.remove('expanded'));
      // Expand this one
      acc.classList.add('expanded');
    });
  });



