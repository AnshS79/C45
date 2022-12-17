var canvas;
var lifeImage;
var letter_holderImage;
var backgroundImage;
var database, gamestate;
var form, player, playerCount
var player1, player2
var allPlayers, player1Image, player2Image
var players = [];

function preload()
{
  lifeImage = loadImage("./assets/life.png")
  letter_holderImage = loadImage("./assets/letter_holder.png")
  backgroundImage = loadImage("./assets/background.png")
  player1Image = loadImage("./assets/player1.png")
  player2Image = loadImage("./assets/player2.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);

  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}