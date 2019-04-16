import Color from '../enum/color';
import PieceType from '../enum/piece-type';
import IPiece from '../interfaces/piece.interface';
import Move from './move-interface';

class King implements IPiece {
  protected type: PieceType;
  protected color: Color;
  protected moveSet: Move[];

  constructor(color: Color) {
    this.type = PieceType.King;
    this.color = color;
    this.moveSet = [];
  }
}

export default King;
