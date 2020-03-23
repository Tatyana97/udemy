let navMenu = document.querySelector(".menu"),
    navMenuItem = document.querySelectorAll(".menu .menu-item"),
    changeTextTitle = document.querySelector("#title"),
    promptforApple = document.querySelector("#prompt"),
    removeAdvertising = document.querySelector(".adv");
    


let addFivePoint = document.createElement("li");
addFivePoint.innerHTML = "Пятый пункт";
addFivePoint.classList.add("menu-item");
navMenu.appendChild(addFivePoint);

document.body.style.backgroundImage = "url('img/apple_true.jpg')"; 

changeTextTitle.innerHTML = "Мы продаем только подлинную технику Apple";

removeAdvertising.remove();

let yourOpinion = prompt("Ваше отношение к технике apple?");
promptforApple.textContent = yourOpinion;


