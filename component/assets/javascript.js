// document.getElementById("#menu-icon").addEventListener("click", hamburger);

// function hamburger() {
//   var menuicon = document.getElementById("menu-icon");
//   var linex = document.getElementById("line");
//   menuicon.classList.toggle("active");
//   linex.style.background = "blue";
// }

var btnKeAtas = document.getElementById("back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnKeAtas.style.display = "block";
  } else {
    btnKeAtas.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function gobackTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// window.HTMLElement.prototype.scrollIntoView = function () {};

function btnJelajahi() {
  // const nav = document.getElementsByClassName("nav");
  // console.log("jalan");
  // nav.scrollIntoView({
  //   behavior: "smooth",
  // });
}
