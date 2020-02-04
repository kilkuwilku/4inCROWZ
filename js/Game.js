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
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeTokens.drawHTMLToken();
        this.ready = true;
    }

    /* listening for key events*/
    handleKeydown(e) {
        if (this.ready) {
            if (e.key === "ArrowLeft") {
                this.activePlayer.activeTokens.moveLeft();
            } else if (e.key === "ArrowRight") {
                this.activePlayer.activeTokens.moveRight(this.board.columns);
            } else if (e.key === "ArrowDown") {
                this.activePlayer.activeTokens.dropToken();
            }
        }
    }

    playToken() {
        let spaces = this.board.spaces;
        let activeTokens = this.activePlayer.activePlayer;
        let targetColumn = spaces[activeTokens.columnLocation];
        let targetSpace = null;
        for (let space of targetColumn) {
            if (space.token === null) {
                targetSpace = space;
            }
        }
        if (targetSpace !== null) {
            game.ready = false;
            activeTokens.dropToken(targetSpace);
        }
    }

}