/***************************************************/
// BRICK-GAME 9999in1 JS Game                       //
// Made by IlyaBOT: github.com/IlyaBOT              //
// Date: 07.11.2024                                 //
// Version: 0.1                                     //
/***************************************************/

var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d");
var FIRST_START = true; // If game is first started or reseted
var GAME_STATE = 1;
var cookieData = "";

// Right Screen Values
var GAME_SCORE = 0;
var HIGH_SCORE = 0;
var NEXT_FIGURE = 0;
var GAME_SPEED = 1;
var GAME_LEVEL = 1;
var GAME_COMBO = false;
var GAME_PAUSE = false;
var GAME_OVER = false;

const SCREEN_WIDTH = 10; // 10 Pixels width
const SCREEN_HEIGHT = 20; // 20 Pixels height

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);
let level = new Level();
let bricks = level.buildLevel(GAME_WIDTH, GAME_HEIGHT, level.level1);

function cookieReadTest(){
    alert(document.cookie);
}
function cookieWriteTest(){
    alert(document.cookie);
}

function keyHandler() {
  document.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
      case 37:
        paddle.moveLeft();
        //alert("move left");
        break;
      case 39:
        paddle.moveRight();
        //alert("move right");
        break;
      case 32:
        toggleGame();

        break;
    }
  });
  document.addEventListener("keyup", function (event) {
    switch (event.keyCode) {
      case 37:
        if (paddle.speed < 0) paddle.stop();
        break;
      case 39:
        if (paddle.speed > 0) paddle.stop();
        break;
    }
  });
}
