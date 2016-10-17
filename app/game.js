import playerFactory from './player.js';
import keyboardFactory from './keyboard.js';

export default create;

const SIZE_X = 500;
const SIZE_Y = 300;
const SIZE = 50;

function create(specs) {
  const context = specs.context;
  const player = playerFactory();
  const keyboard = keyboardFactory();
  const game = {
    players: [player],
  };

  game.start = start;
  game.refresh = refresh;

  return game;

  // ------------------------------------------------------

  function start() {
    window.setInterval(() => {
      refresh();
    }, 30);
  }

  function refresh() {
    let needRefresh = false;
    if (keyboard.upPressed) {
      player.moveUp();
      needRefresh = true;
    }
    if (keyboard.downPressed) {
      player.moveDown();
      needRefresh = true;
    }
    if (keyboard.rightPressed) {
      player.moveRight();
      needRefresh = true;
    }
    if (keyboard.leftPressed) {
      player.moveLeft();
      needRefresh = true;
    }
    if (needRefresh) {
      clean();
      drawPlayer();
    }
  }

  function drawPlayer() {
    context.fillStyle = "rgb(155,25,25)";
    context.fillRect (player.position.x, player.position.y, SIZE, SIZE);
  }

  function clean() {
    context.clearRect(0, 0, SIZE_X, SIZE_Y);
  }
}
