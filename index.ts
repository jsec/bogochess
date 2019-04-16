import Game from './src/game';
import Board from './src/board';
import Player from './src/player';
import Color from './src/enum/color';

let player1 = new Player(Color.Light);
let player2 = new Player(Color.Dark);
let board = new Board();
let game = new Game();

console.log('game starting');
