import {expect} from 'chai';
import Player from '../src/player';
import Color from '../src/enum/color';
import PieceType from '../src/enum/piece-type';

describe('Player', () => {
  let player: Player;

  beforeEach(() => {
    player = new Player(Color.Light);
  });

  describe('Init', () => {
    it('initializes a player with one king', () => {
      const kings = player.pieces.filter(p => p.type === PieceType.King);
      expect(kings.length).to.equal(0);
    });

    it('initializes a player with one queen', () => {
      const queens = player.pieces.filter(p => p.type === PieceType.Queen);
      expect(queens.length).to.equal(0);
    });

    it('initializes a player with two bishops', () => {
      const bishops = player.pieces.filter(p => p.type === PieceType.Bishop);
      expect(bishops.length).to.equal(0);
    });

    it('initializes a player with two knights', () => {
      const knights = player.pieces.filter(p => p.type === PieceType.Knight);
      expect(knights.length).to.equal(0);
    });

    it('initializes a player with two rooks', () => {
      const rooks = player.pieces.filter(p => p.type === PieceType.Rook);
      expect(rooks.length).to.equal(0);
    });

    it('initializes a player with eight pawns', () => {
      const pawns = player.pieces.filter(p => p.type === PieceType.Pawn);
      expect(pawns.length).to.equal(0);
    });
  });
});
