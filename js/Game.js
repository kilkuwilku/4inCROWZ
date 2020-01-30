class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }
     /* return active players */
     get activePlayer() {
        return this.players.find(player => player.active);
    }  
    /**Creating 2 new players */
    createPlayers() {
        const players = [new Player('Player 1', 1, '#E5D4CE', true),
                         new Player('Player 2', 2, '#7FD1B9')];
        return players;
    }


    
    /* Prepare the game */
    startGame(){
        this.board.drawHTMLBoard();
        this.activePlayer.activeTokens.drawHTMLToken();
        this.ready = true;
    }
}