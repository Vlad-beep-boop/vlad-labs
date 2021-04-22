window.onload = function () {
  var listingElements = ['apple', 'orange'];
  var storeElements = [];
  var toggleSortListing = true;
  var toggleSortStore = true;
  // логика JS, не связана с DOM
  function addToStoreElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }
  function addToListingElements(element) {
    var elementPosition = storeElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.push(element);
      storeElements.splice(elementPosition, 1);
    }
  }
  function deleteItem(element, type) {
    switch (type) {
      case 'listing':
        listingElements = listingElements.filter((listingElementsItem) => listingElementsItem !== element);
        break;
      case 'store':
        storeElements = storeElements.filter((storeElementsItem) => storeElementsItem !== element);
        break;
    }
  }
  function sortElements(elements, toggle) {
    if (toggle) {
      return [elements.sort(), false];
    }
    return [elements.sort().reverse(), true];
  }
  function renameItem(element, type, name) {
    switch (type) {
      case 'listing':
        listingElements = listingElements.map((listingElementsItem) =>
          listingElementsItem === element ? name : listingElementsItem,
        );
        break;
      case 'store':
        storeElements = storeElements.map((storeElementsItem) =>
          storeElementsItem === element ? name : storeElementsItem,
        );
        break;
    }
  }
  // updateUI берет данные из массивов и занимается вставкой
  function updateUI() {
    var storeSelect = document.querySelector('.store-select');
    var listingSelect = document.querySelector('.listing-select');
    storeSelect.innerHTML = '';
    listingSelect.innerHTML = '';

    for (var i = 0; i < listingElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.setAttribute('data-type', 'listing');
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }

    for (var i = 0; i < storeElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.setAttribute('data-type', 'store');
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }

  function promptListing() {
    let value = prompt();
    let isUnique = true;
    listingElements.forEach((listingElementsItem) => {
      if (listingElementsItem === value) {
        isUnique = false;
      }
    });
    storeElements.forEach((storeElementsItem) => {
      if (storeElementsItem === value) {
        isUnique = false;
      }
    });
    if (isUnique) {
      listingElements.push(value);
    } else {
      alert('This item already exists');
    }
  }
  // регистрируем события
  var addButton = document.querySelector('#add-button');
  addButton.onclick = function () {
    var selectedOption = document.querySelector('.listing-select option:checked');
    addToStoreElements(selectedOption.innerText);
    updateUI();
  };

  var addToListingButton = document.querySelector('#add-to-listing-button');
  addToListingButton.onclick = function () {
    var selectedOption = document.querySelector('.store-select option:checked');
    addToListingElements(selectedOption.innerText);
    updateUI();
  };

  var deleteButton = document.querySelector('#delete-button');
  deleteButton.onclick = function () {
    var selectedOption = document.querySelector('.app option:checked');
    deleteItem(selectedOption.innerText, selectedOption.getAttribute('data-type'));
    updateUI();
  };

  var promptButton = document.querySelector('#prompt-button');
  promptButton.onclick = function () {
    promptListing();
    updateUI();
  };
  var sortListingButton = document.querySelector('#sort-listing-button');
  sortListingButton.onclick = function () {
    [listingElements, toggleSortListing] = sortElements(listingElements, toggleSortListing);
    updateUI();
  };
  var sortStoreButton = document.querySelector('#sort-store-button');
  sortStoreButton.onclick = function () {
    [storeElements, toggleSortStore] = sortElements(storeElements, toggleSortStore);
    updateUI();
  };
  var renameButton = document.querySelector('#rename-button');
  renameButton.onclick = function () {
    var selectedOption = document.querySelector('.app option:checked');
    if (!selectedOption) {
      return null;
    }
    var name = prompt('New name', selectedOption.innerText);
    renameItem(selectedOption.innerText, selectedOption.getAttribute('data-type'), name);
    updateUI();
  };
};
