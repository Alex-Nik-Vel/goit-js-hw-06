// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит 
// количество элементов в input и нажимает кнопку Создать, после чего рендерится
// коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};
const { input, createBtn, destroyBtn, boxes } = refs;

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let divSize = 30;
  amount = input.value;
  if (amount > 100) {
    input.value = null;
    return `${alert('enter a number up to 100')}`;
    }

  let newDiv = '';

  for (let i = 0; i < amount; i += 1) {
    newDiv += `<div style="width: ${divSize}px; height: ${divSize}px; background-color: ${getRandomHexColor()};">
    ${i+1}
    </div>`;
    divSize += 10;
  }

  boxes.insertAdjacentHTML('beforeend', newDiv);
  input.value = null;
}

function destroyBoxes() {
  boxes.innerHTML = '';
 }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

  