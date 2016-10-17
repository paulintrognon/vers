export default create;

const SIZE_X = 500;
const SIZE_Y = 300;
const SIZE = 50;

function create(specs) {
  const game = {};
  const context = specs.context;
  const posPlayer1 = {x: 10, y: 10};
  const posPlayer2 = {x: SIZE_X-10-SIZE, y: SIZE_Y-10-SIZE};

  document.onkeydown = checkKey;
  game.refresh = refresh;

  return game;

  // ------------------------------------------------------

  function moveUp() {
    posPlayer1.y -= 1;
    if (posPlayer1.y < 0) {
      posPlayer1.y = 0;
    }
    refresh();
  }

  function moveDown() {
    posPlayer1.y += 1;
    if (posPlayer1.y > SIZE_Y-SIZE) {
      posPlayer1.y = SIZE_Y-SIZE;
    }
    refresh();
  }

  function moveRight() {
    posPlayer1.x += 1;
    if (posPlayer1.x > SIZE_X-SIZE) {
      posPlayer1.x = SIZE_X-SIZE;
    }
    refresh();
  }

  function moveLeft() {
    posPlayer1.x -= 1;
    if (posPlayer1.x < 0) {
      posPlayer1.x = 0;
    }
    refresh();
  }

  function refresh() {
    clean();
    drawPlayers();
  }

  function drawPlayers() {
    context.fillStyle = "rgb(155,25,25)";
    context.fillRect (posPlayer1.x, posPlayer1.y, SIZE, SIZE);

    context.fillStyle = "rgb(25,25,155)";
    context.fillRect (posPlayer2.x, posPlayer2.y, SIZE, SIZE);
  }

  function clean() {
    context.clearRect(0, 0, SIZE_X, SIZE_Y);
  }

  function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '38') { // up arrow
      moveUp();
    }
    else if (e.keyCode == '40') { // down arrow
      moveDown();
    }
    else if (e.keyCode == '37') { // left arrow
      moveLeft();
    }
    else if (e.keyCode == '39') { // right arrow
      moveRight();
    }
  }
}
