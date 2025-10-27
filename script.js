// Mobile nav toggle (optional)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if(navToggle){
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Dynamic year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('current-year');
  if(yearSpan) yearSpan.textContent = new Date().getFullYear();
});
