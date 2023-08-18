const toggleButton = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
  console.log("Button clicked");
});
