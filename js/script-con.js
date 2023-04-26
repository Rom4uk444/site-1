// Burger handler
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.projects__nav');
    const menuCloseItem = document.querySelector('.projects__nav-close');
    const menuLinks = document.querySelectorAll('.projects__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('projects__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('projects__nav_active');
    });
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('projects__nav_active');
            });
        }
    }
  }());


const checkbox11 = document.getElementById("myCheckbox11");
const checkbox12 = document.getElementById("myCheckbox12");
const checkbox13 = document.getElementById("myCheckbox13");
const label = document.getElementById("outputs");
checkbox11.addEventListener("change", updateLabel);
checkbox12.addEventListener("change", updateLabel);
checkbox13.addEventListener("change", updateLabel);
function updateLabel() {
    // перевірка стану checkbox та встановлення відповідного тексту label
    if (checkbox11.checked) {
      label.innerText = "UAN";
    } else if (checkbox12.checked) {
      label.innerText = "USD";
    } else if (checkbox13.checked) {
      label.innerText = "EU";
    } else {
      label.innerText = "Виберіть валюту";
    }
  }