import Color from './enum/color';
import Piece from './pieces/piece';

export default class Player {
  protected color: Color;
  public pieces: Piece[];

  constructor(color: Color) {
    this.color = color;
    this.pieces = [];
  }
}
