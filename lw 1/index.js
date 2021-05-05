var shiftButton = document.getElementById('shift-button');

function toggleTheme() {
  document.body.classList.toggle('night');
}
shiftButton.onclick = toggleTheme;
