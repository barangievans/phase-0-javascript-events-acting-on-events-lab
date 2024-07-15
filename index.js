// dodger.js

function moveDodgerLeft() {
  let left = parseInt(dodger.style.left) || 180;
  if (left > 0) {
    left -= 1;
    dodger.style.left = left + 'px';
  }
}

function moveDodgerRight() {
  let left = parseInt(dodger.style.left) || 180;
  if (left < 360) {
    left += 1;
    dodger.style.left = left + 'px';
  }
}

module.exports = {
  moveDodgerLeft,
  moveDodgerRight
};
