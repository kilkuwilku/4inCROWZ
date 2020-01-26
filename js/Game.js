class Game {
    constructor(board, players) {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }
    /**Creating 2 new players */
    createPlayers() {
        const players = [new Player('Player 1', 1, '#E5D4CE', true),
                         new Player('Player 2', 2, '#7FD1B9')];
        return players;
    }
}