King   = require('./pieces/king')
Queen  = require('./pieces/queen')
Bishop = require('./pieces/bishop')
Knight = require('./pieces/knight')
Rook   = require('./pieces/rook')
Pawn   = require('./pieces/pawn')

class Player
  constructor: (color) ->
    @color = color
    @pieces = []

    @addPieces()

  addPieces: ->
    @pieces.push(new King())
    @pieces.push(new Queen())

    for i in [0..1]
      @pieces.push(new Bishop())
      @pieces.push(new Knight())
      @pieces.push(new Rook())

    for i in [0..7]
      @pieces.push(new Pawn())

module.exports = Player
