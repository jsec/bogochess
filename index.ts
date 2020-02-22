import Board from './src/board';
import Color from './src/enum/color';
import Game from './src/game';
import Player from './src/player';

let player1 = new Player(Color.Light);
let player2 = new Player(Color.Dark);
let board = new Board();
let game = new Game();

console.log('game starting');
