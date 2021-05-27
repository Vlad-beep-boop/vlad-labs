function calculateNumbers(num1, num2, action) {
  switch (action) {
    case "+":
      return Number(num1) + Number(num2);
    case "-":
      return Number(num1) - Number(num2);
    case "*":
      return Number(num1) * Number(num2);
    case "/":
      if (num2 !== 0) {
        return Number(num1) / Number(num2);
      } else {
        return "Ошибка. На 0 не делится!";
      }
  }
}

function calculator(newString) {
  if (typeof newString !== "string") {
    return "Ошибка. Введена не строка!";
  }
  let signs = newString.match(/\+|-(?!\d)|\*|\/|(?<!\()-/g);
  let numbers = newString.match(/\d+|(?<=\()\-?\d+(?=\))/g);
  let symbols = newString.match(/[^0-9\+\-\*\/\(\)]/g);
  if (signs === null || numbers === null || symbols !== null) {
    return "Ошибка. Введенно не выражение!";
  }
  if (numbers.length > 5) {
    return "Ошибка. Введенно более пяти слагаемых!";
  }

  for (i = 0; signs.indexOf("*") !== -1 || signs.indexOf("/") !== -1; i++) {
    if (signs[i] === "*" || signs[i] === "/") {
      let expression = calculateNumbers(numbers[i], numbers[i + 1], signs[i]);
      if (expression === Infinity) {
        return "Ошибка. На 0 не делится!";
      }
      signs.splice(i, 1);
      numbers[i] = expression;
      numbers.splice(i + 1, 1);
      i--;
    }
  }
  for (i = 0; signs.indexOf("+") !== -1 || signs.indexOf("-") !== -1; ) {
    let expression = calculateNumbers(numbers[i], numbers[i + 1], signs[i]);
    signs.splice(i, 1);
    numbers[i] = expression;
    numbers.splice(i + 1, 1);
  }
  return isNaN(numbers[0]) ? "Ошибка. Введено не выражение!" : numbers[0];
}