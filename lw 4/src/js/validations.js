import { updateErrorUI } from './update-ui';
export function nameValidation() {
  var form = document.querySelector('#signup-form');
  var input = form.querySelector('input[name="name"]');
  var nameInputError = form.querySelector('#signup-form-name');
  if (
    /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(input.value) &&
    typeof input.value === 'string'
  ) {
    updateErrorUI(nameInputError, false);
    return true;
  }
  updateErrorUI(nameInputError, true, 'Name entered incorrectly!');
  return false;
}

export function surnameValidation() {
  var form = document.querySelector('#signup-form');
  var input = form.querySelector('input[name="surname"]');
  console.log(input);
  var inputError = form.querySelector('#signup-form-surname');
  if (
    /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(input.value) &&
    typeof input.value === 'string'
  ) {
    updateErrorUI(input, false);
    return true;
  }
  updateErrorUI(inputError, true, 'Surname entered incorrectly!');
  return false;
}

export function emailValidation() {
  var form = document.querySelector('#signup-form');
  var input = form.querySelector('input[name="email"]');
  var inputError = form.querySelector('#signup-form-email');
  if (/\S+@\S+\.\S+/.test(input.value) && typeof input.value === 'string') {
    updateErrorUI(input, false);
    return true;
  }
  updateErrorUI(inputError, true, 'Email entered incorrectly!');
  return false;
}

export function passwordValidation() {
  var form = document.querySelector('#signup-form');
  var input = form.querySelector('input[name="password"]');
  var inputError = form.querySelector('#signup-form-password');

  var lowerCaseLetters = /[a-z]/g;
  if (input.value.match(lowerCaseLetters)) {
    updateErrorUI(inputError, false, '');
  } else {
    updateErrorUI(inputError, true, 'Password must contain lowercase characters!');
    return false;
  }

  var upperCaseLetters = /[A-Z]/g;
  if (input.value.match(upperCaseLetters)) {
    updateErrorUI(inputError, false, '');
  } else {
    updateErrorUI(inputError, true, 'Password must contain uppercase characters!');
    return false;
  }

  var numbers = /[0-9]/g;
  if (input.value.match(numbers)) {
    updateErrorUI(inputError, false, '');
  } else {
    updateErrorUI(inputError, true, 'Password must contain numbers!');
    return false;
  }

  if (input.value.length >= 8) {
    updateErrorUI(inputError, false, '');
  } else {
    updateErrorUI(inputError, true, 'The password must be longer than 8 characters!');
    return false;
  }

  updateErrorUI(input, false);
  return true;
}
