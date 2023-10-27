const opens = document.getElementById("open");
const closes = document.getElementById("close");
const navBar = document.getElementById("nav-bar");
const sections = document.getElementById("section");
const mains = document.getElementById("main");
const footers = document.getElementById("footer");

opens.addEventListener("click", function () {
  navBar.classList.add("active");
  sections.style.display = "none";
  mains.style.display = "none";
  footers.style.display = "none";
});
closes.addEventListener("click", function () {
  navBar.classList.remove("active");
  sections.style.display = "block";
  mains.style.display = "block";
  footers.style.display = "block";
});

window.onscroll = function () {
  const navBars = document.getElementById("nav");
  if (window.pageYOffset > 400) {
    // Adjust the distance as needed
    navBars.classList.add("active");
  } else {
    navBars.classList.remove("active");
  }
};
