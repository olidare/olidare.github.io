// assets/js/main.js
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Dark mode toggle
  const darkModeToggle = document.createElement('button');
  darkModeToggle.textContent = '🌙';
  darkModeToggle.style.position = 'fixed';
  darkModeToggle.style.bottom = '20px';
  darkModeToggle.style.right = '20px';
  darkModeToggle.style.border = 'none';
  darkModeToggle.style.background = 'var(--primary-color)';
  darkModeToggle.style.color = 'white';
  darkModeToggle.style.borderRadius = '50%';
  darkModeToggle.style.width = '50px';
  darkModeToggle.style.height = '50px';
  darkModeToggle.style.cursor = 'pointer';
  darkModeToggle.style.fontSize = '20px';
  
  darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
  
  document.body.appendChild(darkModeToggle);

  // Add dark mode styles
  const style = document.createElement('style');
  style.textContent = `
    .dark-mode {
      background-color: #1a1a1a;
      color: #f0f0f0;
    }
    .dark-mode .project-card {
      background-color: #2d2d2d;
      color: #f0f0f0;
    }
  `;
  document.head.appendChild(style);
});