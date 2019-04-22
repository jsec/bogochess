import Color from '../enum/color';
import PieceType from '../enum/piece-type';
import IPiece from '../interfaces/piece.interface';
import IMove from '../interfaces/move.interface';

abstract class Piece implements IPiece {
  public readonly type: PieceType;
  public readonly color: Color;
  public abstract moveSet: IMove[];

  constructor(color: Color, type: PieceType) {
    this.color = color;
    this.type = type;
  }

  abstract getMoves(): void;
}

export default Piece;
