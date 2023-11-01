// html elements we need to use javascript on
const navBar = document.querySelector(".navBarUl");
const hamburger = document.querySelector(".hamburger");
// tracks if the navbar is opened or not
let navOpen = false;

// toggles navbar and changes the styling
function toggleNav() {
  if (navOpen === false) {
    navBar.classList = "showNav";
    hamburger.classList = "fixedBurger";
    navOpen = true;
  } else {
    navBar.classList = "navBarUl";
    hamburger.classList = "hamburger";
    navOpen = false;
  }
}
