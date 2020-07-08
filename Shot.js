/*Hyeonjoon_nam
  Final Project
  CS099
  Spring 2020 */

class Shot
{
  constructor(){
    this.x = player.x;
    this.y = player.y;
    this.speed = 15;
    this.angle = atan2(mouseY - this.y, mouseX - this.x);
    this.bullet = 8;
  }
  Draw(){
    circle(this.x, this.y, 10);
  }
  Update(){
    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;
  }
}