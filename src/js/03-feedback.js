//3.1.
import throttle from 'lodash.throttle';
//3.2.
const form = document.querySelector('.feedback-form');
//3.3.2.
const LOCAL_KEY = 'feedback-form-state';

//3.3.1.
form.addEventListener('input', throttle(onInputdataForm, 500));
form.addEventListener('submit', onFormSubmit);
//3.4.1
let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;
reloadPage();
//3.3.3.
function onInputdataForm(event) {
  let dataForm = localStorage.getItem(LOCAL_KEY);
  dataForm = dataForm ? JSON.parse(dataForm) : {};
  dataForm[event.target.name] = event.target.value.trim();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}
//3.5.1.
function onFormSubmit(event) {
  event.preventDefault();
  // localStorage.getItem(LOCAL_KEY);
  const { email, message } = event.currentTarget.elements;
  if (!email.value || !message.value) {
    return alert('А всі поля хто буде заповнювати ? 🙄');
  } else {
    localStorage.removeItem(LOCAL_KEY);
    console.log({ email: email.value, message: message.value });
  }
  event.currentTarget.reset();
}
//3.4.2
function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}
