Zombies come out regularly by using frameCount. For example,

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
}
And, day after day, the spawnRate get lowed. For example, in first
day, the spawnRate is 40 but in last day, the spawnRate is just 7.

When player kill the zombie, player randomly get some money.
By the money, player can buy grenade or enhance the damage of the
weapon. For example,

if(this.grenade.DidClickButton()){
      if(gold >= 10){
        Grenade++;
        gold -= 10;
      }
    }
    
    if(this.enhance.DidClickButton()){
      if(gold >= 50){
        gold -= 100;
        GameScreen.damage++;
      }
    }
And, after the wave, player get 12 hours. By the time, player
can fix the barricade or search for something like grenade or money.
It also depends on luck. For example,

if(this.repair.DidClickButton()){
      if(this.time >= 1){
        GameScreen.life += 10;
        if(GameScreen.life >= 400){
          GameScreen.life = 400;
        }
        this.time--;
      }
    }
    
    if(this.search.DidClickButton()){
      let luck = random(100);
      if(this.time >= 1){
        if(luck <= 5){
          Grenade++;
        }else if(luck <= 55){
          gold += floor(random(3));
        }
      }else{
        return;
      }
      this.time--;
    }

And I set the crash judgement like this.

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

If the barricade life is lower than zero, game over. After game over,
player can restart the game.

And when barricade life get lower, the color of barricade 
also get differ. For example,

    push();
    rectMode(CENTER);
    fill(map(this.life, 0, 400, 255, 0), map(this.life, 0, 400, 0, 255), 0);
    rect(300, 200, map(this.life, 400, 0, 30, 0), 400);
    pop();