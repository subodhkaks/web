// Mobile navigation toggle

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const roles = [
  "A Web Developer",
  "A UI/UX Designer",
  "A Application Developer"
];

let roleIndex = 0;
const roleText = document.getElementById("role-text");

setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  roleText.textContent = roles[roleIndex];
}, 4000);
