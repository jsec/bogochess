import Color from '../enum/color';
import PieceType from '../enum/piece-type';
import Move from './move-interface';

interface IPiece {
  color: Color;
  type: PieceType;
  moveSet: Move[];
}

export default IPiece;
