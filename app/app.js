import Game from './game.js';

const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');

const game = Game({ context });
game.refresh();
game.start();
