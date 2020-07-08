/*Hyeonjoon_nam
  Final Project
  CS099
  Spring 2020 */

class Credits
{
  constructor(){
    this.mainmenu = new Button(width - 70, height -50, "Main Menu");
  }
  Draw(){
    this.mainmenu.DrawButton();
    push();
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Presented by Hyeonjoon Nam\n\n\nSpecial Thanks :\nMy DigiPen Friends\nMy DigiPen Professors\n\nBless for my little kitty, Harin", width/2, height/2);
    pop();
  }
  Update(){
    if(this.mainmenu.DidClickButton()){
      currentScreen = MAIN_MENU;
    }
  }
}