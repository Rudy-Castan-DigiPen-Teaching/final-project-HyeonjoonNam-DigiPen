class Options
{
  constructor(){
    this.mainmenu = new Button(width - 70, height -50, "Main Menu");
    this.wow = new Button(width/2, height/2, "wow");
  }
  Draw(){
    this.mainmenu.DrawButton();
    this.wow.DrawButton();
  }
  Update(){
    if(this.mainmenu.DidClickButton()){
      console.log("Main Menu!");
      currentScreen = MAIN_MENU;
    }else if(this.wow.DidClickButton()){
      console.log("WOW!");
    }
  }
}