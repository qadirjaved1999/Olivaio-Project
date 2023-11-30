let toggleIcon = document.querySelector(".humber-burger");
console.log(toggleIcon);

let mobile_menu = document.querySelector(".mobile-menu");
console.log(mobile_menu);
let mobile = document.querySelector(".mobile");
console.log(mobile_menu);

let close_icon = document.querySelector(".close-icon");
console.log(close_icon);

toggleIcon.addEventListener("click", () => {
  toggleIcon.classList.toggle("change");
  toggleIcon.classList.toggle("cricle");
  mobile_menu.classList.toggle("mobile-menu");
});
