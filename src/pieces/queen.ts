import Color from '../enum/color';
import PieceType from '../enum/piece-type';
import IPosition from '../interfaces/position.interface';
import Piece from './piece';

export default class Queen extends Piece {
  constructor(color: Color, position: IPosition) {
    super(color, position, PieceType.Queen);
  }

  getMoves(): void {
    console.log('getMoves');
  }
}
