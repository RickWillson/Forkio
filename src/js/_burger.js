const burger = document.querySelector(".burger");
const  menu = document.querySelector(".menu-list");
const  links = document.querySelectorAll(".menu-list li");

function slider() {
  
  burger.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
    burger.classList.toggle("toggle");
  })


}


slider(); 