document.addEventListener("DOMContentLoaded", function() {
  var touchMenu = document.getElementById("touch-menu");
  var mainMenu = document.querySelector(".menu-list");
  var burgerLines = document.querySelectorAll(".line");
  var form = document.querySelector('form');

  form.addEventListener('click', function () {
    form.classList.toggle('expanded');
  });

  touchMenu.addEventListener("click", function (e) {
    e.preventDefault();
    mainMenu.classList.toggle("show-menu");
    burgerLines.forEach(function (line) {
      line.classList.toggle("change");
    });
  });

  touchMenu.addEventListener("click", function(e) {
    e.preventDefault();
    if (mainMenu.style.display === "block") {
      mainMenu.style.display = "none";
    } else {
      mainMenu.style.display = "block";
    }
  });

  function toggleSubMenu(subMenu) {
    if (subMenu.style.display === "block") {
      subMenu.style.display = "none";
    } else {
      subMenu.style.display = "block";
    }
  }

  var subMenuLinks = document.querySelectorAll(".menu-list li > a");
  subMenuLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      var submenu = link.nextElementSibling;
      if (submenu && submenu.classList.contains("sub-menu")) {
        toggleSubMenu(submenu);
      }
    });
  });

  var subMenuLinksLevel3 = document.querySelectorAll(".menu-list li ul li a");
  subMenuLinksLevel3.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      var submenu = link.nextElementSibling;
      if (submenu && submenu.tagName.toLowerCase() === "ul") {
        toggleSubMenu(submenu);
      }
    });
  });
});


const SkewedOne = document.querySelector('.skewedOne');
const SkewedTwo = document.querySelector('.skewedTwo');
window.addEventListener('scroll', function(){
  const value1 = -15 + window.scrollY/40;
  const value2 = 15 + window.scrollY/-40;
  SkewedOne.style.transform = "skewy(" + value1 + "deg)";
  SkewedTwo.style.transform = "skewy(" + value2 + "deg)";
})