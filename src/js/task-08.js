const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = this.elements;

  const formValues = {};

  for (let i = 0; i < formData.length; i++) {
    const element = formData[i];

    if (element.type !== 'submit') {
      formValues[element.name] = element.value;
    }
  }

  const email = formValues['email'];
  const password = formValues['password'];

  if (!email || !password) {
    alert('Будь ласка, заповніть всі поля');
    return;
  }

  const formDataObject = { email, password };
  console.log(formDataObject);

  this.reset();
});