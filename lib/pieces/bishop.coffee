Piece = require('./piece')

class Bishop extends Piece
  constructor: ->
    super()
    @type = 'Bishop'


module.exports = Bishop
