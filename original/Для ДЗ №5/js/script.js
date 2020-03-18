let navMenu = document.querySelector(".menu"),
    navMenuItem = document.querySelectorAll(".menu .menu-item");
    // bodyImgBackground = document.getElementsByTagName("body");


let addFivePoint = document.createElement("li");
addFivePoint.innerHTML = "Пятый пункт";
addFivePoint.classList.add("menu-item");
navMenu.appendChild(addFivePoint);



document.getElementsByTagName("body").style.backgroundImage = "url(../../../img/apple_true.jpg) no-repeat";

