// точка входа в приложение (entry)

// import { updateErrorUI } from './update-ui';
import './css/main.css';
import Product from './js/product.js';
import createObservableArray from './js/createObservableArray.js';

const tableElem = document.querySelector('#table');

function updateTableUI(list) {
  tableElem.innerHTML = '';

  list.forEach((listItem) => {
    const trElem = document.createElement('tr');
    const elements = [];
    Object.keys(listItem.values).forEach((key) => {
      const tdElem = document.createElement('td');
      const inputElem = document.createElement('input');
      inputElem.setAttribute('value', listItem.values[key]);
      inputElem.setAttribute('disabled', true);
      inputElem.classList.add('input');
      inputElem.addEventListener('change', (e) => {
        changeItem(listItem.id, { [key]: e.target.value });
      });
      tdElem.addEventListener('dblclick', () => {
        inputElem.removeAttribute('disabled');
        inputElem.focus();
      });
      inputElem.addEventListener('blur', () => {
        inputElem.setAttribute('disabled', true);
      });
      inputElem.setAttribute('data-id', listItem.id);
      tdElem.append(inputElem);
      elements.push(tdElem);
    });
    elements.forEach((elementsItem) => {
      trElem.append(elementsItem);
    });
    tableElem.append(trElem);
  });
  const elements = [];
  ['', '', '', getTotal(list)].forEach((value) => {
    const tdElem = document.createElement('td');
    const inputElem = document.createElement('input');
    inputElem.setAttribute('value', value);
    inputElem.setAttribute('disabled', 'true');
    inputElem.classList.add('input');
    tdElem.append(inputElem);
    elements.push(tdElem);
  });
  const trElem = document.createElement('tr');
  elements.forEach((elementsItem) => {
    trElem.append(elementsItem);
  });
  tableElem.append(trElem);
}

let productsList = createObservableArray(
  [
    new Product({ id: 1, values: { name: 'Молоко', count: 40, priceForOne: 50 } }),
    new Product({ id: 2, values: { name: 'Хлеб', count: 100, priceForOne: 20 } }),
    new Product({ id: 3, values: { name: 'Лук', count: 200, priceForOne: 5 } }),
  ],
  updateTableUI
);

function getTotal(list) {
  let total = 0;
  list.forEach((productsListItem) => {
    total += productsListItem.values.total;
  });
  return total;
}

function getIndexForID(id) {
  let index = null;
  productsList.forEach((listItem, newIndex) => {
    if (listItem.id === id) {
      index = newIndex;
    }
  });
  return index;
}
function changeItem(id, values) {
  let index = getIndexForID(id);
  if (typeof index === 'number') {
    let newItem = new Product({
      ...productsList[index],
      values: { ...productsList[index].values, ...values },
    });
    productsList[index] = newItem;
  }
}
function setItem(values) {
  productsList.push(new Product(values));
}
changeItem(1, { name: 'МолокоKOKO', count: 10 });
