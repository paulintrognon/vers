import playerFactory from './player.js';
import keyboardFactory from './keyboard.js';

export default create;

const SIZE_X = 500;
const SIZE_Y = 300;
const SIZE = 50;

function create(specs) {
  const context = specs.context;
  const player = playerFactory();
  const keyboardService = keyboardFactory();
  const keyboard = keyboardService.getKeyboard();
  const game = {
    players: [player],
  };

  game.start = start;
  game.refresh = refresh;

  return game;

  // ------------------------------------------------------

  function start() {
    window.setInterval(() => {
      update();
    }, 30);
  }

  function update() {
    let needRefresh = false;
    if (keyboard.up.wasPressed) {
      player.moveUp();
      needRefresh = true;
    }
    if (keyboard.down.wasPressed) {
      player.moveDown();
      needRefresh = true;
    }
    if (keyboard.right.wasPressed) {
      player.moveRight();
      needRefresh = true;
    }
    if (keyboard.left.wasPressed) {
      player.moveLeft();
      needRefresh = true;
    }
    if (needRefresh) {
      refresh();
    }
    keyboardService.sync();
  }

  function refresh() {
    clean();
    drawPlayer();
  }

  function drawPlayer() {
    context.fillStyle = "rgb(155,25,25)";
    context.fillRect (player.position.x, player.position.y, SIZE, SIZE);
  }

  function clean() {
    context.clearRect(0, 0, SIZE_X, SIZE_Y);
  }
}
