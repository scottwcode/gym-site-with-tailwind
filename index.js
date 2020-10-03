// Script portion of the html

function toggleNavbar(collapseID) {
  document.getElementById(collapseID).classList.toggle('hidden');
  document.getElementById(collapseID).classList.toggle('block');
}

AOS.init({
  delay: 250,
  duration: 1400,
  once: false,
});
