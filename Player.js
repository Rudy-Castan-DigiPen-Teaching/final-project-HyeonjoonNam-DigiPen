/*Hyeonjoon_nam
  Final Project
  CS099
  Spring 2020 */

class Player
{
  constructor(){
    this.x = 350;
    this.y = 200;
    this.speed = 2;
  }
  Draw(){
    circle(this.x, this.y, 40);
    circle(this.x, this.y, 10);
  }
  Update(){
    if(keyIsDown(87)){
      this.y -= this.speed;
    }else if(keyIsDown(83)){
      this.y += this.speed;
    }
    if(keyIsDown(65)){
      this.x -= this.speed;
    }else if(keyIsDown(68)){
      this.x += this.speed;
    }
  }
}