import Color from '../enum/color';
import PieceType from '../enum/piece-type';
import Piece from './piece';

class Rook extends Piece {
  constructor(color: Color) {
    super(color, PieceType.Rook);
  }

  getMoves(): void {
    console.log('getMoves');
  }
}

export default Rook;