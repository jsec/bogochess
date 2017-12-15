_          = require('lodash')
{ expect } = require('./test-setup')
Player     = require('../lib/player')

describe "Player", ->
  beforeEach ->
    @player = new Player()

    @getPieces = (pieceName) ->
      _.filter @player.pieces, (piece) ->
        piece.type == pieceName

  describe "Init", ->
    it "initializes a player with one king", ->
      kings = @getPieces('King')

      expect(kings.length).to.equal(1)

    it "initializes a player with one queen", ->
      queens = @getPieces('Queen')

      expect(queens.length).to.equal(1)

    it "initializes a player with two bishops", ->
      bishops = @getPieces('Bishop')

      expect(bishops.length).to.equal(2)

    it "initializes a player with two knights", ->
      knights = @getPieces('Knight')

      expect(knights.length).to.equal(2)

    it "initializes a player with two rooks", ->
      rooks = @getPieces('Rook')

      expect(rooks.length).to.equal(2)

    it "initializes a player with eight pawns", ->
      pawns = @getPieces('Pawn')

      expect(pawns.length).to.equal(8)
