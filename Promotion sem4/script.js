window.onscroll = function() { makeSticky(); };

var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

function makeSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function scrollToDiv(divId) {
  var element = document.getElementById(divId);
  element.scrollIntoView({ behavior: 'smooth' });
}