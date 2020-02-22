import Color from '../enum/color';
import IPosition from './position.interface';
import PieceType from '../enum/piece-type';

export default interface IPiece {
  color: Color;
  pieceType: PieceType;
  position: IPosition;
}
