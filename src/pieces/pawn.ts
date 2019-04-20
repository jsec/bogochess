import Color from '../enum/color';
import PieceType from '../enum/piece-type';
import Piece from './piece';

class Pawn extends Piece {
  constructor(color: Color) {
    super(color, PieceType.Pawn);
  }

  getMoves(): void {
    console.log('getMoves');
  }
}

export default Pawn;
