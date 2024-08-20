const burgerMenu = document.querySelector(".burger-menu");
const menuModal = document.querySelector(".menu-modal");

burgerMenu.addEventListener("click", () => {
  menuModal.style.display =
    menuModal.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!burgerMenu.contains(e.target) && !menuModal.contains(e.target)) {
    menuModal.style.display = "none";
  }
});

// Получаем модальное окно
var modal = document.getElementById("modal");

// Получаем картинку и модальный элемент, где будет отображаться картинка
var images = document.querySelectorAll(".project__grid img");
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");

// Для каждой картинки добавляем событие клика
images.forEach(function (image) {
  image.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});

// Получаем элемент <span> (x), который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на <span> (x), закрываем модальное окно
span.onclick = function () {
  modal.style.display = "none";
};
