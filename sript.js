// sticky navbar animation 
const navbar = document.getElementById("mainNavbar");
function makeNavbarSticky() {
  if (window.scrollY > 0){
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener("scroll", makeNavbarSticky);
// animation using Intersection observer
const banner = document.querySelector("#banner");
let observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    banner.style.opacity = 1;
  }
});

// observe #banner element
observer.observe(banner);

const scrolledBanner = document.getElementById("banner");
Observer.observe(scrolledBanner)


document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const comunityName = document.getElementById("Comunity").value;
    const email = document.getElementById("email").value;
    alert(`Thank you for submitting your information. We have received your comunity name: ${comunityName} and email: ${email}. We will send the registration form to your email.`);
    // kosongkan input field
    document.getElementById("comunityName").value = '';
    document.getElementById("email").value = '';
});




