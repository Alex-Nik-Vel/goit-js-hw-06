// Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change - color и 
//   выводит значение цвета в span.color.
const refs = {
  changeColorClickrBtn : document.querySelector('.change-color'),
  newNameColor : document.querySelector('.color'),
}

refs.changeColorClickrBtn.addEventListener("click", onChangeColorClick);

function onChangeColorClick() {
  const randomColor = getRandomHexColor();
  console.log(`New color body: ${randomColor}`);
  document.body.style.background = randomColor;
  refs.newNameColor.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
