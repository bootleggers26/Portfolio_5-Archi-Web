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
