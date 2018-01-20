Piece = require('./piece')

class Knight extends Piece
  constructor: ->
    super()
    @type = 'Knight'

module.exports = Knight
