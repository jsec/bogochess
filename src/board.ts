import Color from './enum/color';
import IPiece from './interfaces/piece.interface';

export default class Board {
  constructor() {}

  setInitialState(color: Color): void {
    let pawnRow: number;
    let royalRow: number;

    if (color === Color.Light) {
      pawnRow = 6;
      royalRow = 7;
    } else {
      pawnRow = 1;
      royalRow = 0;
    }
  }
}
