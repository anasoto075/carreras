class Form {
constructor(){
this.input = createInput("Name");
this.button = createButton('Play');
this.greeting = createElement('h2');
this.reset = createButton("Reset");
}
hide (){
this.input.hide(); 
this.button.hide();
this.greeting.hide();
}
display (){
    var title = createElement('h2');
    title.html("Car Racing Game");
    title.position(130,0);
    this.input.position(130,160);
    this.button.position(250,200);
    this.reset.position(displayWidth+40,displayHeight/4);
    this.button.mousePressed(()=>a{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount +=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello "+ player.name);
        this.greeting.position(130,160);
    //gameState = 1;
    });
    this.reset.mousePressed(()=>{
         player.updateCount(0);
        game.update(0);
        Player.updatecarsAtEnd(0);
    });
}
}