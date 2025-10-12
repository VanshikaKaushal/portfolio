// Example: smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
// Change email link color on click
const emailLink = document.getElementById('email-link');
if (emailLink) {
  emailLink.addEventListener('click', () => {
    emailLink.style.color = 'var(--green)';
  });
}