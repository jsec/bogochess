import Color from '../enum/color';
import PieceType from '../enum/piece-type';
import Piece from '../interfaces/piece.interface';

class Queen implements Piece {
  protected type: PieceType;
  protected color: Color;

  constructor(color: Color) {
    this.type = PieceType.Queen;
    this.color = color;
  }
}

export default Queen;
