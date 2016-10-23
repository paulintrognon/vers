import keyboardFactory from './keyboard.js';
import physics from './physics.js';

export default create;

const SIZE_X = 500;
const SIZE_Y = 300;
const SIZE = 50;
const SPEED = 3;
const world = {
  size: {
    x: SIZE_X,
    y: SIZE_Y,
  },
  objects: []
};


function create(specs) {
  const context = specs.context;
  const player1 = physics.createObject({
    position: {x: 0, y:0},
    size: {x: SIZE, y:SIZE},
    name: 'player1',
    world,
  });
  const player2 = physics.createObject({
    position: {x: 100, y:100},
    size: {x: SIZE, y:SIZE},
    name: 'player2',
    world,
  });
  world.objects.push(player1);
  world.objects.push(player2);
  const keyboardService = keyboardFactory();
  const keyboard = keyboardService.getKeyboard();
  const game = {};

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
    if (keyboard.down.wasPressed && player1.speed.y < SPEED) {
      player1.speed.y = Math.min(player1.speed.y += SPEED, SPEED);
    }
    if (keyboard.up.wasPressed && player1.speed.y > -SPEED) {
      player1.speed.y = Math.max(player1.speed.y -= SPEED, -SPEED);
    }
    if (keyboard.right.wasPressed && player1.speed.x < SPEED) {
      player1.speed.x = Math.min(player1.speed.x += SPEED, SPEED);
    }
    if (keyboard.left.wasPressed && player1.speed.x > -SPEED) {
      player1.speed.x = Math.max(player1.speed.x -= SPEED, -SPEED);
    }
    player1.move();
    refresh();
    keyboardService.sync();
  }

  function refresh() {
    clean();
    drawPlayer(player1, "rgb(155,25,25)");
    drawPlayer(player2, "rgb(25,25,155)");
  }

  function drawPlayer(player, color) {
    context.fillStyle = color;
    context.fillRect (player.position.x, player.position.y, SIZE, SIZE);
  }

  function clean() {
    context.clearRect(0, 0, SIZE_X, SIZE_Y);
  }
}
