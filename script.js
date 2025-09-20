//alert("connected");

function switchTheme() {
  document.body.classList.toggle("alt");
  const themeIcon = document.querySelector('.theme-toggle i');
  if (document.body.classList.contains('alt')) {
    themeIcon.className = 'fas fa-sun';
    localStorage.setItem('theme', 'alt');
  } else {
    themeIcon.className = 'fas fa-moon';
    localStorage.setItem('theme', 'default');
  }
}

document.getElementById('mobileToggle').addEventListener('click', function () {
  document.getElementById('navLinks').classList.toggle('active');
  const icon = this.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

document.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'alt') {
    document.body.classList.add('alt');
    document.querySelector('.theme-toggle i').className = 'fas fa-sun';
  }
});