const accordions = document.querySelectorAll('.accordion');
//Sets .accThree as expanded initially
document.querySelector('.accThree').classList.add('expanded');

// On mouseenter, collapse all others, expand hovered
accordions.forEach(acc => {
  acc.addEventListener('click', () => {
    accordions.forEach(other => {
      other.classList.remove('expanded');
    });
    acc.classList.add('expanded');
  });
});
