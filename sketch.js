/*Hyeonjoon_nam
  Final Project
  CS099
  Spring 2020 */

let MAIN_MENU = 0;
let GAME = 1;
let OPTIONS = 2;
let CREDITS = 3;
let GAMEOVER = 4;
let PAUSE = 5;
let CLEAR = 6;
let TUTORIAL = 7;
let ENDING = 8;
let REST = 9;

let currentScreen = MAIN_MENU;

let MainMenuScreen;
let GameScreen;
let OptionsScreen;
let CreditsScreen;
let GameOverScreen;
let PauseScreen;
let ClearScreen;
let TutorialScreen;
let EndingScreen;

let zombie_walk;
let grenadeImage;
let BG;
let explode;
let zombieSound;
let mainBG;


function setup(){
  createCanvas(400, 400);
  
  MainMenuScreen = new MainMenu();
  OptionsScreen = new Options();
  CreditsScreen = new Credits();
  GameScreen = new Game();
  GameOverScreen = new GameOver();
  ClearScreen = new Clear();
  TutorialScreen = new Tutorial();
  EndingScreen = new Ending();
  RestScreen = new Rest();
  
  player = new Player();
  
}

function preload(){
  zombie_walk = loadImage("Imagies/Zombie_Walk.gif");
  grenadeImage = loadImage("Imagies/grenade.png");
  BG = loadImage("Imagies/BG.png");
  explode = loadSound("Sounds/explosion.wav");
  zombieSound = loadSound("Sounds/Zombie003_Idle_A_001.mp3");
  mainBG = loadImage("Imagies/gameBG.png");
}


function draw() {
  background(255);
  
  
  switch(currentScreen){
    case MAIN_MENU:
      MainMenuScreen.Update();
      MainMenuScreen.Draw();
      push();
    translate(40, 70);
    circle(0, 0, 40);
    circle(-10, 0, 15);
    circle(10, 0, 15);
    fill(0);
    circle(-10 + cos(angle()), sin(angle()), 5);
    circle(10 + cos(angle()), sin(angle()), 5);
    pop();
      break;
      
    case TUTORIAL:
      TutorialScreen.Update();
      TutorialScreen.Draw();
      break;
      
    case GAME:
      GameScreen.Update();
      GameScreen.Draw();
      break;
      
    case OPTIONS:
      OptionsScreen.Update();
      OptionsScreen.Draw();
      break;
      
    case CREDITS:
      CreditsScreen.Update();
      CreditsScreen.Draw();
      break;
      
    case GAMEOVER:
      GameOverScreen.Update();
      GameOverScreen.Draw();
      break;
      
    case REST:
      RestScreen.Update();
      RestScreen.Draw();
      break;
      
    case CLEAR:
      ClearScreen.Update();
      ClearScreen.Draw();
      break;
      
      
    case ENDING:
      EndingScreen.Draw();
      break;
      
  }
  
}

function angle(){
  let Angle = atan2(mouseY - 70, mouseX - 40);
  return Angle;
}