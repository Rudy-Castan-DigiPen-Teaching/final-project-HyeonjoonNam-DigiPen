/*Hyeonjoon_nam
  Final Project
  CS099
  Spring 2020 */

class GameOver
{
  constructor(){
    this.mainmenu = new Button(width - 100, height*4/5, "Go back to \nmain menu");
  }
  Update(){
    if(this.mainmenu.DidClickButton()){
      currentScreen = MAIN_MENU;
      GameScreen.life = 400;
      GameScreen.Day = 1;
      gold = 0;
      Grenade = 0;
    }
  }
  Draw(){
    this.mainmenu.DrawButton();
    
    push();
    textAlign(CENTER, CENTER);
    textSize(40);
    text("Game Over!", width/2, height/2);
    pop();
  }
}