import Color from '../enum/color';
import PieceType from '../enum/piece-type';
import Piece from './piece';

class King extends Piece {
  constructor(color: Color) {
    super(color, PieceType.King);
  }

  getMoves(): void {
    console.log('getMoves');
  }
}

export default King;
