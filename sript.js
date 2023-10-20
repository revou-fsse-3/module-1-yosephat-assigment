const navbar = document.getElementById("mainNavbar");
function makeNavbarSticky() {
  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener("scroll", makeNavbarSticky);





