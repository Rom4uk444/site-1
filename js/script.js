var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
spaceBetween: 15,
loop: true,
centerSlide: 'true',
fade: 'true',
grabCursor: 'true',
pagination: {
el: ".swiper-pagination",
clickable: true,
dynamicBullets: true,
},
navigation: {
  nextEl: ".next-btn",
  prevEl: ".prev-btn",
},

breakpoints:{
  0: {
      slidesPerView: 1,
  },
  520: {
      slidesPerView: 2,
  },
  950: {
      slidesPerView: 3,
  },
},
});

var swipers = new Swiper(".mySwipers", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  grabCursor: 'true',
  fade: 'true',
});






(function(){
  const header= document.querySelector('.header');
  window.onscroll = () => {
      if (window.pageYOffset > 100){
          header.classList.add('header_active')
      }else{
          header.classList.remove('header_active')
      }
  };
}()); 





var currentModal = null;

function openModal(id) {
  if (currentModal) {
    closeModal(currentModal);
  }
  var modal = document.getElementById(id);
  modal.style.display = "flex";
  currentModal = id;
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  var modal = document.getElementById(id);
  modal.style.display = "none";
  currentModal = null;
  document.body.style.overflow = "auto";
}



const checkbox8 = document.getElementById("myCheckbox8");
const checkbox9 = document.getElementById("myCheckbox9");
const checkbox10 = document.getElementById("myCheckbox10");
const label = document.getElementById("outputs");
const label2 = document.getElementById("outputs-title");
// додавання обробника події до checkbox
checkbox8.addEventListener("change", updateLabel);
checkbox9.addEventListener("change", updateLabel);
checkbox10.addEventListener("change", updateLabel);

checkbox8.addEventListener("change", updateLabel2);
checkbox9.addEventListener("change", updateLabel2);
checkbox10.addEventListener("change", updateLabel2);

function updateLabel() {
  // перевірка стану checkbox та встановлення відповідного тексту label
  if (checkbox8.checked) {
    label.innerText = "UAN";
  } else if (checkbox9.checked) {
    label.innerText = "USD";
  } else if (checkbox9.checked) {
    label.innerText = "EU";
  } else {
    label.innerText = "Виберіть валюту";
  }
}

function updateLabel2() {
  // перевірка стану checkbox та встановлення відповідного тексту label
  if (checkbox8.checked) {
    label2.innerText = "(UAH) UKRAINIAN HRYVNA";
  } else if (checkbox9.checked) {
    label2.innerText = "(USD) US DOLLAR";
  } else if (checkbox9.checked) {
    label2.innerText = "(EU) EURO";
  } else {
    label2.innerText = "Виберіть валюту";
  }
}




// Burger handler
(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuCloseItem = document.querySelector('.header__nav-close');
  const menuLinks = document.querySelectorAll('.header__link');
  burgerItem.addEventListener('click', () => {
      menu.classList.add('header__nav_active');
  });
  menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('header__nav_active');
  });
  if (window.innerWidth <= 767) {
      for (let i = 0; i < menuLinks.length; i += 1) {
          menuLinks[i].addEventListener('click', () => {
              menu.classList.remove('header__nav_active');
          });
      }
  }
}());







