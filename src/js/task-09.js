const changeColorBtnEl = document.querySelector(".change-color");
const colorValueEl = document.querySelector(".color")

changeColorBtnEl.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = color;
 colorValueEl.textContent = color;
}