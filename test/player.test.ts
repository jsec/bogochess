import {expect} from 'chai';
import Player from '../src/player';
import Color from '../src/enum/color';
import * as _ from 'lodash';

describe('Player', () => {
  let player: Player;

  beforeEach(() => {
    player = new Player(Color.Light);
  });

  describe('Init', () => {
    it('initializes a player with one king', () => {});

    it('initializes a player with one queen', () => {});

    it('initializes a player with two bishops', () => {});

    it('initializes a player with two knights', () => {});

    it('initializes a player with two rooks', () => {});

    it('initializes a player with eight pawns', () => {});
  });
});
