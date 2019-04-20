import Color from '../enum/color';
import PieceType from '../enum/piece-type';
import Piece from './piece';

class Bishop extends Piece {
  constructor(color: Color) {
    super(color, PieceType.Bishop);
  }

  getMoves(): void {
    console.log('getMoves');
  }
}

export default Bishop;
