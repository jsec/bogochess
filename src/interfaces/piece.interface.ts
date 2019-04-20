import Color from '../enum/color';
import PieceType from '../enum/piece-type';
import Move from './move-interface';

export default interface IPiece {
  color: Color;
  type: PieceType;
  moveSet: Move[];
}
