import Color from '../enum/color';
import PieceType from '../enum/piece-type';
import Piece from './piece';

class Queen extends Piece {
  constructor(color: Color) {
    super(color, PieceType.Queen);
  }

  getMoves(): void {
    console.log('getMoves');
  }
}

export default Queen;
