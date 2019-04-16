import Color from '../enum/color';
import PieceType from '../enum/piece-type';
import Piece from '../interfaces/piece.interface';

class Bishop implements Piece {
  protected type: PieceType;
  protected color: Color;

  constructor(color: Color) {
    this.type = PieceType.Bishop;
    this.color = color;
  }
}

export default Bishop;
