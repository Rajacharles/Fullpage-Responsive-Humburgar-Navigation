const iconMenu = document.querySelector(".mainNav__iconMenu"),
      menu = document.querySelector(".mainNav"),
      menuItem = document.querySelectorAll(".mainNav__menuItem"),
      body = document.querySelector("body");

iconMenu.addEventListener("click", openMenu);

menuItem.forEach(function(el) {
   el.addEventListener("mouseover", opacityIn);
   el.addEventListener("mouseleave", opacityOut);
});

function openMenu() {
   if (menu.classList.contains("menuOpen")) {
      menu.classList.add("menuClose");
      body.style.overflow ="initial";

      setTimeout(function() {
         menu.classList.remove("menuClose");
         menu.classList.remove("menuOpen");
      }, 1200);
   } else {
      body.style.overflow ="hidden";
      menu.classList.add("menuOpen");
   }
}

function opacityIn(e) {
   menuItem.forEach(function(el) {
      el.classList.add("disable");
   });
   e.currentTarget.classList.remove("disable");
}

function opacityOut() {
   menuItem.forEach(function(el) {
      el.classList.remove("disable");
   });
}
