/*Hyeonjoon_nam
  Final Project
  CS099
  Spring 2020 */

class Rest
{
  constructor(){
    this.clear = new Button(width/2, height*4/5, "Prepare for next day");
  }
  Update(){
    if(this.clear.DidClickButton() && keyIsDown(69)){
      currentScreen = CLEAR;
    }
  }
  Draw(){
    push();
    textAlign(CENTER, CENTER);
    textSize(40);
    text("Click the button\nwhile pressing E", width/2, height*2/5)
    pop();
    this.clear.DrawButton();
  }
}