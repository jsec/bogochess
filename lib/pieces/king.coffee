Piece = require('./piece')

class King extends Piece
  constructor: ->
    super()
    @type = 'King'


module.exports = King
