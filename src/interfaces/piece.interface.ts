import Color from '../enum/color';
import PieceType from '../enum/piece-type';
import IPosition from './position.interface';

export default interface IPiece {
  color: Color;
  type: PieceType;
  position: IPosition;
}
