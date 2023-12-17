const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let currentValue = 0;

function updateCounterValue(value) {
  counterValue.textContent = value;
}

// Збільшити на 1
incrementBtn.addEventListener('click', () => {
  currentValue += 1;
  updateCounterValue(currentValue);
});

// Зменшити на 1
decrementBtn.addEventListener('click', () => {
  currentValue -= 1;
  updateCounterValue(currentValue);
});
