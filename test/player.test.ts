import { Bishop, King, Knight, Queen, Rook } from '../src/pieces';

import Color from '../src/enum/color';
import IPiece from '../src/interfaces/piece.interface';
import Player from '../src/player';

describe('Player', () => {
  let player: Player;

  beforeEach(() => {
    const pieces: IPiece[] = [
      new King(Color.Light, { x: 1, y: 1 }),
      new Queen(Color.Light, { x: 1, y: 2 }),
      new Bishop(Color.Light, { x: 1, y: 3 }),
      new Rook(Color.Light, { x: 1, y: 4 }),
      new Knight(Color.Light, { x: 1, y: 5 })
    ];

    player = new Player(Color.Light, pieces);
  });

  describe('Init', () => {
    test('sets pieces on the player', () => {
      expect(player.pieces.length).toEqual(5);
    });
  });
});
