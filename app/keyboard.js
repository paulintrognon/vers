export default create;

function create() {
  document.onkeydown = onKeyDown;
  document.onkeyup = onKeyUp;

  const that = {};
  const keyboard = {
    up: {pressed: false, wasPressed: false},
    down: {pressed: false, wasPressed: false},
    right: {pressed: false, wasPressed: false},
    left: {pressed: false, wasPressed: false},
  };

  that.getKeyboard = getKeyboard;
  that.sync = sync;

  return that;

  // ------------------------------------------------------

  function getKeyboard() {
    return keyboard;
  }

  function correspond(e) {
    e = e || window.event;
    if (e.keyCode == '38') { // up arrow
      return 'up';
    }
    else if (e.keyCode == '40') { // down arrow
      return 'down';
    }
    else if (e.keyCode == '39') { // right arrow
      return 'right';
    }
    else if (e.keyCode == '37') { // left arrow
      return 'left';
    }
  }

  function onKeyDown(e) {
    const key = correspond(e);
    keyboard[key].pressed = true;
    keyboard[key].wasPressed = true;
  }

  function onKeyUp(e) {
    const key = correspond(e);
    keyboard[key].pressed = false;
  }

  function sync() {
    keyboard.up.wasPressed = keyboard.up.pressed;
    keyboard.down.wasPressed = keyboard.down.pressed;
    keyboard.left.wasPressed = keyboard.left.pressed;
    keyboard.right.wasPressed = keyboard.right.pressed;
  }
}
