class Tutorial
{
  constructor(){
    this.play = new Button(width/2, height*4/5, "PLAY");
  }
  Update(){
    if(this.play.DidClickButton()){
      currentScreen = GAME;
    }
  }
  Draw(){
    this.play.DrawButton();
    
    push();
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Mouse left click to shot\nPress Q to wide-area damage", width/2, height/4);
    text("You should survive for 7 days.\nEach days needs certain scroe\nto go next day.\nUse your gun and items, just survive.\nGood luck.", width/2, height*4/7);
    pop();
  }
}