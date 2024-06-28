// Your code here
// index.js
let dodger;

function moveDodgerLeft() {
  let left = parseInt(dodger.style.left);
  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}

function moveDodgerRight() {
  let left = parseInt(dodger.style.left);
  if (left < 360) {
    dodger.style.left = `${left + 10}px`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  dodger = document.getElementById('dodger');
});
