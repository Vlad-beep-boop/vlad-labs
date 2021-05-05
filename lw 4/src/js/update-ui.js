export function updateErrorUI(elem, error, message) {
  if (error) {
    elem.classList.remove = 'none';
    elem.innerText = message;
  } else {
    elem.classList.add = 'none';
    elem.innerText = '';
  }
  // console.log({ form });
  // storeSelect.innerHTML = '';
  // listingSelect.innerHTML = '';

  // for (var i = 0; i < listingElements.length; i++) {
  //   var newOption = document.createElement("option");
  //   newOption.innerText = listingElements[i];
  //   listingSelect.append(newOption);
  // }

  // for (var i = 0; i < storeElements.length; i++) {
  //   var newOption = document.createElement("option");
  //   newOption.innerText = storeElements[i];
  //   storeSelect.append(newOption);
  // }
}
