/***************************************************/
// BRICK-GAME 9999in1 JS Game                       //
// Made by IlyaBOT: github.com/IlyaBOT              //
// Date: 07.11.2024                                 //
// Version: 0.1                                     //
/***************************************************/

var DEBUG = true;

var gameCanvas = document.getElementById("gameScreen");
var gamectx = gameCanvas.getContext("2d");
var FIRST_START = true; // If game is first started or reseted
var GAME_STATE = 1;

// Right Screen Values
var GAME_SCORE = 0;
var HIGH_SCORE = 0;
var GAME_SOUND = true;
var NEXT_FIGURE = 0;
var GAME_SPEED = 1;
var GAME_LEVEL = 1;
var GAME_COMBO = false;
var GAME_PAUSE = false;
var GAME_OVER = false;

let cookieVarArray = ["user", "hiscore", "speed", "level", "sound", "gamestate", "pause", "firststart"];
let cookieDataArray = ["anon", 0, 1, 1, true, 1, false, true];

const SCREEN_WIDTH = 10; // 10 Pixels width
const SCREEN_HEIGHT = 20; // 20 Pixels height
const cellSize = 20;
let player = {x: 0,y: 0,width: cellSize,height: cellSize};

console.log("### BRICK-GAME 9999in1 ###\n" + "[BG] Starting the script!");

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function cookieReadTest(){
  if(DEBUG){
    alert("Cookie read data:\n" +
    "\nPlayer Name: " + getCookie(cookieVarArray[0])+
    "\nHigh Score: " + getCookie(cookieVarArray[1])+
    "\nGame speed: " + getCookie(cookieVarArray[2])+
    "\nGame level: " + getCookie(cookieVarArray[3])+
    "\nSound: " + getCookie(cookieVarArray[4]) +
    "\nGame State: " + getCookie(cookieVarArray[5])+
    "\nPause State: " + getCookie(cookieVarArray[6])+
    "\nFirst game launch: " + getCookie(cookieVarArray[7]));
  }
  else{
    console.log("[BG] Debug mode is not enabled!\n" +
    "To use this function, change the DEBUG variable to true in brickgame.js");
  }
}
function cookieWriteTest(){
  if(DEBUG){
    document.cookie = cookieVarArray[0] + "=" + cookieDataArray[0] + ";";
    document.cookie = cookieVarArray[1] + "=" + cookieDataArray[1] + ";";
    document.cookie = cookieVarArray[2] + "=" + cookieDataArray[2] + ";";
    document.cookie = cookieVarArray[3] + "=" + cookieDataArray[3] + ";";
    document.cookie = cookieVarArray[4] + "=" + cookieDataArray[4] + ";";
    document.cookie = cookieVarArray[5] + "=" + cookieDataArray[5] + ";";
    document.cookie = cookieVarArray[6] + "=" + cookieDataArray[6] + ";";
    document.cookie = cookieVarArray[7] + "=" + cookieDataArray[7] + ";";

    alert("Test cookie writed!\n" + document.cookie);
  }
  else{
    console.log("[BG] Debug mode is not enabled!\n" +
    "To use this function, change the DEBUG variable to true in brickgame.js");
  }
}
function testFunc(){
  console.log("TEST: " + cookieVarArray.length + " | " + cookieDataArray.length);
}
function loadGameData(){
  if (getCookie(cookieVarArray[0]) != NaN && getCookie(cookieVarArray[0]) != undefined && getCookie(cookieVarArray[0]) != "undefined") {
    if(DEBUG){console.log("[BG] [DEBUG] Some cookies found! The developer will not starve :D");}

    for(let i=0; i<cookieVarArray.length; i++){
      if(DEBUG){console.log("[BG] [DEBUG] Reading \"" + cookieVarArray[i] + "\" to local data from cookies...");}
      cookieDataArray[i] = getCookie(cookieVarArray[i]);
      if(DEBUG){console.log("[BG] [DEBUG] Readed \"" + cookieDataArray[i] + "\" value from cookies.");}
    }

    FIRST_START = cookieDataArray[7];
    GAME_STATE = cookieDataArray[5];
    HIGH_SCORE = cookieDataArray[1];
    GAME_SOUND = cookieDataArray[4];
    GAME_SPEED = cookieDataArray[2];
    GAME_LEVEL = cookieDataArray[3];
    GAME_PAUSE = cookieDataArray[6];
  }
  else{
    if(DEBUG){console.log("[BG] [DEBUG] Cookies not found! :(\n[BG] Creating new cookies...");}

    for(let j=0; j<cookieVarArray.length; j++){
      if(DEBUG){console.log("[BG] [DEBUG] Writing \"" + cookieVarArray[j] + "\" to cookies from local data...");}
      document.cookie = cookieVarArray[j] + "=" + cookieDataArray[j] + ";";
      if(DEBUG){console.log("[BG] [DEBUG] Writed \"" + getCookie(cookieVarArray[j]) + "\" value to cookies.");}
    }
  }
}

function soundSwitch(){GAME_SOUND = !GAME_SOUND; if(DEBUG){console.log('[BG] DEBUG: Sound state changed to: "' + GAME_SOUND + '".');} return GAME_SOUND;}

function soundHandler(soundPath, soundVolume){
  if(soundPath!=0 && soundPath!=undefined){
    if(GAME_SOUND==true){
      let audio = new Audio(soundPath);
      if(soundVolume!=0 && soundVolume!=undefined){audio.volume = soundVolume;}
      audio.play();

      if(DEBUG){console.log('[BG] [DEBUG]: Playing sound "' + soundPath + '"...');}
    }
    else{
      if(DEBUG){console.log('[BG] [DEBUG]: Can\'t play sound "' + soundPath + '" because it\'s turned off or undefined (GAME_SOUND=' + GAME_SOUND + ').');}
    }
  }
  else{
    if(DEBUG){console.log('[BG] [DEBUG]: Function call error. The "soundPath" argument is missing.');}
  }
}

function drawGrid() {
  gamectx.clearRect(0, 0, canvas.width, canvas.height);
  gamectx.strokeStyle = "#ddd";

  for (let x = 0; x <= canvas.width; x += cellSize) {
      gamectx.beginPath();
      gamectx.moveTo(x, 0);
      gamectx.lineTo(x, canvas.height);
      gamectx.stroke();
  }

  for (let y = 0; y <= canvas.height; y += cellSize) {
      gamectx.beginPath();
      gamectx.moveTo(0, y);
      gamectx.lineTo(canvas.width, y);
      gamectx.stroke();
  }
}

// Функция для отрисовки игрока
function drawPlayer() {
  gamectx.fillStyle = "#333";
  gamectx.fillRect(player.x, player.y, player.width, player.height);
}

// Обработчик клавиш для управления объектом
function handleKeyDown(event) {
  switch (event.key) {
      case "ArrowLeft":
          if (player.x > 0) player.x -= cellSize;
          break;
      case "ArrowRight":
          if (player.x < canvas.width - cellSize) player.x += cellSize;
          break;
      case "ArrowUp":
          if (player.y > 0) player.y -= cellSize;
          break;
      case "ArrowDown":
          if (player.y < canvas.height - cellSize) player.y += cellSize;
          break;
  }
  draw();
}

// Функция для перерисовки экрана
function draw() {
  drawGrid();
  drawPlayer();
}

// Слушатель событий для клавиатуры
window.addEventListener("keydown", handleKeyDown);

// Первоначальная отрисовка
draw();

// function keyHandler() {
//   document.addEventListener("keydown", function (event) {
//     switch (event.keyCode) {
//       case 37:
//         paddle.moveLeft();
//         //alert("move left");
//         break;
//       case 39:
//         paddle.moveRight();
//         //alert("move right");
//         break;
//       case 32:
//         toggleGame();

//         break;
//     }
//   });
//   document.addEventListener("keyup", function (event) {
//     switch (event.keyCode) {
//       case 37:
//         if (paddle.speed < 0) paddle.stop();
//         break;
//       case 39:
//         if (paddle.speed > 0) paddle.stop();
//         break;
//     }
//   });
// }
