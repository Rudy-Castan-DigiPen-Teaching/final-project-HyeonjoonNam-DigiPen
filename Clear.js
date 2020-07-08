/*Hyeonjoon_nam
  Final Project
  CS099
  Spring 2020 */

class Clear
{
  constructor(){
    this.next = new Button(width/2 - 100, height - 50, "Next Level");
    this.grenade = new Button(width - 100, height *3/5, "Buy Grenade(10)");
    this.repair = new Button(width - 100, height *2/5, "Repair Barricade(10)");
    this.search = new Button(width - 100, height /5, "Search Things");
    this.time = 12;
    this.enhance = new Button(width - 100, height *4/5, "Enhance Weapon(100)");
  }
  Update(){
    
    if(this.grenade.DidClickButton()){
      if(gold >= 10){
        Grenade++;
        gold -= 10;
      }
    }
    
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
    
    if(this.enhance.DidClickButton()){
      if(gold >= 50){
        gold -= 100;
        GameScreen.damage++;
      }
    }
    
    if(this.next.DidClickButton()){
      score = 0;
      this.time = 12;
      switch(GameScreen.Day){
        case 1:
          GameScreen.Day++;
          currentScreen = GAME;
          break;
          
        case 2:
          GameScreen.Day++;
          currentScreen = GAME;
          break;
          
        case 3:
          GameScreen.Day++;
          currentScreen = GAME;
          break;
          
        case 4:
          GameScreen.Day++;
          currentScreen = GAME;
          break;
          
        case 5:
          GameScreen.Day++;
          currentScreen = GAME;
          break;
          
        case 6:
          GameScreen.Day++;
          currentScreen = GAME;
          break;
        
        case 7:
          currentScreen = ENDING;
          break;
      }
    }
  }
  Draw(){
    this.next.DrawButton();
    this.grenade.DrawButton();
    this.repair.DrawButton();
    this.search.DrawButton();
    this.enhance.DrawButton();
    
    push();
    textAlign(CENTER, CENTER);
    textSize(30);
    text("Grenade :" + Grenade, width/4, 100);
    text("Gold :" + gold, width/4, 150);
    text("Time :" + this.time, width/4, 200);
    text("Barricade :\n" + GameScreen.life + "/ 400", width/4, 250);
    pop();
  }
}