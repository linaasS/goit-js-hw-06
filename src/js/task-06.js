const input = document.querySelector('#validation-input');

function checkInputLength() {
  const enteredText = input.value;
  const expectedLength = parseInt(input.getAttribute('data-length'), 10);

  if (enteredText.length === expectedLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}

input.addEventListener('blur', checkInputLength);

