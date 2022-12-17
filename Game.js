class Game {
    constructor() {}
  
    getState() {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data) {
        gameState = data.val();
      });
    }
  
    update(state)
    {
      database.ref("/").update({
        gameState:state
      })
    }
  
    start() {
      player = new Player();
      playerCount = player.getCount();
  
      form = new Form();
      form.display();
  
      player1 = createSprite(width/2-50,height-100);
      player1.addImage("player1",player1Image);
      player1.scale = 0.07;
  
      player2 = createSprite(width/2+50,height-100);
      player2.addImage("player2",player2Image);
      player2.scale = 0.07;
  
      players = [player1, player2]
    }
  
    handleElements() {
      form.hide();
      form.titleImg.position(40, 50);
      form.titleImg.class("gameTitleAfterEffect");
    }
  
    play() 
    {
      this.handleElements();
      Player.getPlayersInfo();
      if (allPlayers !== undefined) {
        image(background, 0, -height * 5, width, height * 6);
  
        //this.show_leaderboard()
  
        //index of the array
        var index = 0;
        for (var plr in allPlayers) {
          //add 1 to the index for every loop
          index = index + 1;
  
          //use data form the database to display the cars in x and y direction
          var x = allPlayers[plr].positionX;
          var y = height - allPlayers[plr].positionY;
  
          players[index - 1].position.x = x;
          players[index - 1].position.y = y;
  
          if (index === player.index) {
            stroke(10);
            fill("red");
            ellipse(x, y, 60, 60);
  
            // Changing camera position in y direction
            camera.position.x = players[index - 1].position.x;
            camera.position.y = players[index - 1].position.y;
          }
        }
        drawSprites();
      }
    }
  }
  