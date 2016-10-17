export default create;

function create() {
  document.onkeydown = onKeyDown;
  document.onkeyup = onKeyUp;

  const keyboard = {
    upPressed: false,
    downPressed: false,
    rightPressed: false,
    leftPressed: false,
  };

  return keyboard;

  // ------------------------------------------------------

  function onKeyDown(e) {
    e = e || window.event;

    if (e.keyCode == '38') { // up arrow
      keyboard.upPressed = true;
    }
    else if (e.keyCode == '40') { // down arrow
      keyboard.downPressed = true;
    }
    else if (e.keyCode == '39') { // right arrow
      keyboard.rightPressed = true;
    }
    else if (e.keyCode == '37') { // left arrow
      keyboard.leftPressed = true;
    }
  }

  function onKeyUp(e) {
    e = e || window.event;

    if (e.keyCode == '38') { // up arrow
      keyboard.upPressed = false;
    }
    else if (e.keyCode == '40') { // down arrow
      keyboard.downPressed = false;
    }
    else if (e.keyCode == '39') { // right arrow
      keyboard.rightPressed = false;
    }
    else if (e.keyCode == '37') { // left arrow
      keyboard.leftPressed = false;
    }
  }
}
