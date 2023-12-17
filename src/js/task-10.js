function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.querySelector('#controls');
const boxesDiv = document.querySelector('#boxes');

const input = controlsDiv.querySelector('input');
const createBtn = controlsDiv.querySelector('[data-create]');
const destroyBtn = controlsDiv.querySelector('[data-destroy]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = input.valueAsNumber;
  const boxSize = 30;

  clearBoxes();

  let html = '';

  for (let i = 0; i < amount; i++) {
    const size = boxSize + i * 10;
    const color = getRandomHexColor();

    html += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}; margin-bottom: 5px;"></div>`;
  }

  boxesDiv.insertAdjacentHTML('beforeend', html);
}

function destroyBoxes() {
  clearBoxes();
}

function clearBoxes() {
  boxesDiv.innerHTML = '';
}