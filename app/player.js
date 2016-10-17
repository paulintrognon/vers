const SPEED = 2;
const SIZE_X = 500;
const SIZE_Y = 300;
const SIZE = 50;

export default create;

function create() {
  const position = {}
  const player = {
    position,
  };

  init();

  player.moveUp = moveUp;
  player.moveDown = moveDown;
  player.moveLeft = moveLeft;
  player.moveRight = moveRight;

  return player;

  // ------------------------------------------------------

  function init() {
    position.x = 0;
    position.y = 0;
  }

  function moveUp() {
    position.y -= SPEED;
    if (position.y < 0) {
      position.y = 0;
    }
  }

  function moveDown() {
    position.y += SPEED;
    if (position.y > SIZE_Y-SIZE) {
      position.y = SIZE_Y-SIZE;
    }
  }

  function moveRight() {
    position.x += SPEED;
    if (position.x > SIZE_X-SIZE) {
      position.x = SIZE_X-SIZE;
    }
  }

  function moveLeft() {
    position.x -= SPEED;
    if (position.x < 0) {
      position.x = 0;
    }
  }
}
