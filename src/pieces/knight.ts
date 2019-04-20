import Color from '../enum/color';
import PieceType from '../enum/piece-type';
import Piece from './piece';

class Knight extends Piece {
  constructor(color: Color) {
    super(color, PieceType.Knight);
  }

  getMoves(): void {
    console.log('getMoves');
  }
}

export default Knight;
