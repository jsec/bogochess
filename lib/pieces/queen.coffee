Piece = require('./piece')

class Queen extends Piece
  constructor: ->
    super()
    @type = 'Queen'

module.exports = Queen
