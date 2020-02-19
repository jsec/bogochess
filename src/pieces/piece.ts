import Color from '../enum/color';
import PieceType from '../enum/piece-type';
import IPiece from '../interfaces/piece.interface';
import IPosition from '../interfaces/position.interface';

export default abstract class Piece implements IPiece {
  public readonly pieceType: PieceType;
  public readonly color: Color;
  public position: IPosition;

  constructor(color: Color, position: IPosition, type: PieceType) {
    this.color = color;
    this.pieceType = type;
    this.position = position;
  }

  public abstract getMoves(): void;

  public move(position: IPosition): void {
    this.position = position;
  }
}
