class Token {
    constructor(owner, index){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }

    get htmlToken() {
        return document.getElementById(this.id);
    }
    
    drawHTMLToken(){
        const token = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(token);
        token.setAttribute('id', this.id);
        token.setAttribute('token', 'class');
        token.style.backgroundColor = this.owner.color;
    }
}