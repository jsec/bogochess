Game   = require('./lib/game')
Board  = require('./lib/board')
Player = require('./lib/player')

player1 = new Player('white')
player2 = new Player('dark')
board   = new Board(player1, player2)
game    = new Game(board)

console.log "game starting"
