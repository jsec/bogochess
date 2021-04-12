import Board from './src/board';
import Color from './src/enum/color';
import Game from './src/game';
import Player from './src/player';

const player1 = new Player(Color.Light);
const player2 = new Player(Color.Dark);
const board = new Board();
const game = new Game();

console.log('game starting');
