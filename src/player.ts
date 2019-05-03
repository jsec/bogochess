import Color from './enum/color';
import IPiece from './interfaces/piece.interface';

export default class Player {
  protected color: Color;
  public pieces: IPiece[];

  constructor(color: Color, pieces: IPiece[]) {
    this.color = color;
    this.pieces = pieces;
  }
}
