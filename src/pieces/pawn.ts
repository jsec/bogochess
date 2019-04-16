Piece = require('./piece')

class Pawn extends Piece
  constructor: ->
    super()
    @type = 'Pawn'

module.exports = Pawn
