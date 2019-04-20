import Color from '../enum/color';
import PieceType from '../enum/piece-type';

abstract class Piece {
  protected readonly type: PieceType;
  protected readonly color: Color;

  constructor(color: Color, type: PieceType) {
    this.color = color;
    this.type = type;
  }

  abstract getMoves(): void;
}

export default Piece;
