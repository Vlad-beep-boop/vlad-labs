// точка входа в приложение (entry)

import { updateErrorUI } from './js/update-ui';
import {
  nameValidation,
  surnameValidation,
  emailValidation,
  passwordValidation,
} from './js/validations.js';
import './css/main.css';

var form = document.querySelector('#signup-form');
var submitInput = form.querySelector('input[name="submit"]');

var nameInput = form.querySelector('input[name="name"]');
nameInput.addEventListener('focus', () => {
  var inputError = form.querySelector('#signup-form-name');
  updateErrorUI(inputError, false);
});

var surnameInput = form.querySelector('input[name="surname"]');
surnameInput.addEventListener('focus', () => {
  var inputError = form.querySelector('#signup-form-surname');
  updateErrorUI(inputError, false);
});

var emailInput = form.querySelector('input[name="email"]');
emailInput.addEventListener('focus', () => {
  var inputError = form.querySelector('#signup-form-email');
  updateErrorUI(inputError, false);
});

var passwordInput = form.querySelector('input[name="password"]');
passwordInput.addEventListener('focus', () => {
  var inputError = form.querySelector('#signup-form-password');
  updateErrorUI(inputError, false);
});

function validation() {
  nameValidation();
  surnameValidation();
  emailValidation();
  passwordValidation();
}
submitInput.onclick = validation;
