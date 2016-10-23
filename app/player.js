const SPEED = 2;
const SIZE_X = 500;
const SIZE_Y = 300;
const SIZE = 50;

const receivableInstructions = [
  'MOVE_UP',
  'MOVE_DOWN',
  'MOVE_RIGHT',
  'MOVE_LEFT',
];

export default create;

function create() {
  const position = {};
  const speed = 
  const player = {
    position,
  };

  init();

  player.process = process;

  return player;

  // ------------------------------------------------------

  function init() {
    position.x = 0;
    position.y = 0;
  }

  function process(instructions) {
    if (instructions.moveUp) {
      moveUp();
    }
    if (instructions.moveDown) {
      moveDown();
    }
    if (instructions.moveRight) {
      moveRight();
    }
    if (instructions.moveLeft) {
      moveLeft();
    }
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
