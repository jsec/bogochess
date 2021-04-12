import Color from '../enum/color';
import PieceType from '../enum/piece-type';
import IPosition from '../interfaces/position.interface';
import Piece from './piece';

export default class Bishop extends Piece {
  constructor(color: Color, position: IPosition) {
    super(color, position, PieceType.Bishop);
  }

  getMoves(): void {
    console.log('getMoves');
  }
}
