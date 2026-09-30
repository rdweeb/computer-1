const items = document.querySelectorAll(".menu-item");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
let currentIndex = 0;
function updateDisplay() {
  items.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
updateDisplay();
rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateDisplay();
});
leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateDisplay();
});
items.forEach((item) => {
  item.addEventListener("click", () => {
    window.location.href = item.dataset.url;
  });
});
