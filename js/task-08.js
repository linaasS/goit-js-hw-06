const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const formValues = {};

  for (let [name, value] of formData) {
    formValues[name] = value;
  }

  const { email, password } = formValues;

  if (!email || !password) {
    alert('Будь ласка, заповніть всі поля');
    return;
  }

  const userData = { email, password };
  console.log(userData);

  this.reset();
});
