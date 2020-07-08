/*Hyeonjoon_nam
  Final Project
  CS099
  Spring 2020 */

class MainMenu
{
  constructor(){
    this.game = new Button(width/2, height*2/5, "Play");
    this.options = new Button(width/2, height*3/5, "Options");
    this.credits = new Button(width/2, height*4/5, "Credits");
  }
  Update(){
    if(this.game.DidClickButton()){
      console.log("Game!");
      currentScreen = TUTORIAL;
    }else if(this.credits.DidClickButton()){
      console.log("credits!");
      currentScreen = CREDITS;
    }
  }
  Draw(){
    background(mainBG, 400, 400);
    push();
    textAlign(CENTER, CENTER);
    textSize(40);
    stroke("red");
    strokeWeight(random(3));
    text("JUST SURVIVE", width/2, height/5);
    pop();
    this.game.DrawButton();
    //this.options.DrawButton();
    this.credits.DrawButton();
    
  }

}
