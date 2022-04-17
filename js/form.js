class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
       this.instructions = createElement('p');
       this.gameEnded = createElement('h2');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.instructions.hide();
    }
    display() {
        this.title.html("Trash Catcher Game");
        this.title.position(500, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(670,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(680,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(740, 670);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');
        this.instructions.html("Use your bin to pick up as much trash as possible before it is dumped into the ocean, playing against a friend!");
        this.instructions.position(280, 250);
        this.instructions.style('font-size', '22px');
        this.instructions.style('color', 'skyblue');
        

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            this.instructions.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hi, " + player.name + "! Waiting for Player 2");
            this.greeting.position(615,250);
            this.greeting.style('color', 'skyblue');
            this.greeting.style('font-size', '25px');
        });

        this.reset.mousePressed(() => {
            this.gameEnded.html("Game Over! " + player.name + " collected roughly " + player.score / 5 + " pounds of trash!");
            this.gameEnded.position(470,250);
            this.gameEnded.style('color', 'skyblue');
            this.gameEnded.style('font-size', '25px');    
            Player.updateScore(0);
            game.end();
        });

    }
}