import Color from '../enum/color';
import PieceType from '../enum/piece-type';
import IPiece from '../interfaces/piece.interface';
import IPosition from '../interfaces/position.interface';

export default abstract class Piece implements IPiece {
  public readonly type: PieceType;
  public readonly color: Color;
  public position: IPosition;

  constructor(color: Color, position: IPosition, type: PieceType) {
    this.color = color;
    this.type = type;
    this.position = position;
  }

  abstract getMoves(): void;

  move(position: IPosition): void {
    this.position = position;
  }
}
