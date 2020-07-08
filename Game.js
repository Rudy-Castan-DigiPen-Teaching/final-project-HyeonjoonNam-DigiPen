/*Hyeonjoon_nam
  Final Project
  CS099
  Spring 2020 */

let player;
let bullets = [];
let enemies = [];
let mouseCount = 0;
let score = 0;
let gold = 0;
let Grenade = 0;
let spawnRate = 40;


function mousePressed(){

  if(currentScreen == GAME){
    bullets.push(new Shot());
  }

}

class Game
{
  constructor(){
    this.life = 400;
    this.turret = 0;
    this.damage = 1;
    this.Day = 1;
  }
  Update(){
    switch(GameScreen.Day){
      case 1:
        spawnRate = 40;
        break;
        
      case 2:
        spawnRate = 30;
        break;
        
      case 3:
        spawnRate = 25;
        break;
        
      case 4:
        spawnRate = 20;
        break;
        
      case 5:
        spawnRate = 15;
        break;
        
      case 6:
        spawnRate = 10;
        break;
        
      case 7:
        spawnRate = 8;
        break;
    }
    
  }
  Draw(){
    
    if(frameCount % spawnRate == 0){
      enemies.push(new Enemy());
    }
    
    if(mouseIsPressed){
      let i = random(2);
      if(i < 0.05){
        zombieSound.play();
      }
    }
    
    image(BG, 0, 50, 400, 350);
    
    push();
    rectMode(CENTER);
    fill(map(this.life, 0, 400, 255, 0), map(this.life, 0, 400, 0, 255), 0);
    rect(300, 200, map(this.life, 400, 0, 30, 0), 400);
    pop();
    
    
    // player.Update();
    player.Draw();

    for(let i = 0; i < bullets.length; i++){
      bullets[i].Draw();
      bullets[i].Update();
    }
  
    for(let i = 0; i < bullets.length; i++){
      if(bullets[i].x > 400 || bullets[i].x < 0 || bullets[i].y > 400 || bullets[i].y <0){
        bullets.splice(i, 1);
      }
    }
  
    for(let i = 0; i < enemies.length; i++){
      enemies[i].Update();
      enemies[i].Draw();
      if(dist(enemies[i].baseX, enemies[i].baseY, player.x, player.y) < 60){
        console.log("Game Over");
      }
    }
    
  
    for(let i = 0; i < enemies.length; i++){
      for(let j = 0; j < bullets.length; j++){
        if(bullets[j].x > enemies[i].baseX && bullets[j].x < enemies[i].baseX + 43 && bullets[j].y > enemies[i].baseY && bullets[j].y < enemies[i].baseY + 54){
          enemies[i].life -= this.damage;
          bullets.splice(j, 1);
          if(enemies[i].life <= 0){
            enemies.splice(i, 1);
            score++;
            gold += floor(random(1, 3));
          }
        }
      }
    }
    
    if(this.turret > 0){
      if(keyIsDown(49)){

        this.turret--;
      }else if(keyIsDown(50)){

        this.turret--;
      }else if(keyIsDown(51)){

        this.turret--;
      }else if(keyIsDown(52)){

        this.turret--;
      }
    }
  
    push();
    textSize(25);
    text(score, 340, 30);
    pop();
    
    text(this.life + '/' + 400, 340, 360);
    
    if(this.life < 0){
      
      enemies.splice(0, enemies.length);
      bullets.splice(0, bullets.length);
      
      currentScreen = GAMEOVER;

    }
    
    if(Grenade >= 1){
      if(keyIsDown(81)){
        for(let i = 0; i < enemies.length; i++){
          enemies[i].life--;
          explode.play();
        }
        Grenade--;
      }
    }
    
    
    push();
    textSize(20);
    textAlign(CENTER, CENTER);
    strokeWeight(3);
    fill(0);
    
    image(grenadeImage, 90, 10, 40, 40);
    text('X' + Grenade,140, 30);
    
    text('Gold :' + gold, 210, 30);
    pop();
    
    push();
    textAlign(CENTER, CENTER);
    textSize(20);
    switch(this.Day){
      case 1:
        text("DAY 1", 30, 30);
        if(score >= 10){
          currentScreen = REST;
          enemies.splice(0, enemies.length);
          bullets.splice(0, bullets.length);
          }
        break;
        
      case 2:
        text("DAY 2", 30, 30);
        if(score >= 15){
          currentScreen = REST;
          enemies.splice(0, enemies.length);
          bullets.splice(0, bullets.length);
          }
        break;
      
      case 3:
        text("DAY 3", 30, 30);
        if(score >= 20){
          currentScreen = REST;
          enemies.splice(0, enemies.length);
          bullets.splice(0, bullets.length);
          }
        break;
        
      case 4:
        text("DAY 4", 30, 30);
        if(score >= 40){
          currentScreen = REST;
          enemies.splice(0, enemies.length);
          bullets.splice(0, bullets.length);
          }
        break;
        
      case 5:
        text("DAY 5", 30, 30);
        if(score >= 60){
          currentScreen = REST;
          enemies.splice(0, enemies.length);
          bullets.splice(0, bullets.length);
          }
        break;
        
      case 6:
        text("DAY 6", 30, 30);
        if(score >= 80){
          currentScreen = REST;
          enemies.splice(0, enemies.length);
          bullets.splice(0, bullets.length);
          }
        break;
        
      case 7:
        text("DAY 7", 30, 30);
        if(score >= 100){
          currentScreen = ENDING;
          enemies.splice(0, enemies.length);
          bullets.splice(0, bullets.length);
          }
        break;

    }
    pop();
    
  }
  
}
