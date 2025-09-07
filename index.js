// Gestion simple du formulaire
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Merci pour votre message ! Je vous répondrai bientôt.");
  this.reset();
});

const burger = document.querySelector(".burger");
const nav = document.querySelector("header nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});
