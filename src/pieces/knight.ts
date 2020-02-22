import Color from '../enum/color';
import IPosition from '../interfaces/position.interface';
import Piece from './piece';
import PieceType from '../enum/piece-type';

export default class Knight extends Piece {
  constructor(color: Color, position: IPosition) {
    super(color, position, PieceType.Knight);
  }

  getMoves(): void {
    console.log('getMoves');
  }
}
