/*Hyeonjoon_nam
  Final Project
  CS099
  Spring 2020 */

class Enemy
{
  constructor(){
    this.baseX = -50;
    this.baseY = random(50, 300);
    this.speed = random(3, 15);
    this.life = floor(random(1, 3.999));
    this.lifeColor = 'green';
  }
  Draw(){
    image(zombie_walk, this.baseX, this.baseY);
    push();
    fill(this.lifeColor);
    rect(this.baseX, this.baseY + 45, 40, 10);
    pop();
  }
  Update(){
        
    switch(this.life){
      case 3 :
        this.lifeColor = 'green';
        break;
        
      case 2 :
        this.lifeColor = 'orange';
        break;
        
      case 1 :
        this.lifeColor = 'red';
        break;

    }
    
    if(this.baseX < 270){
      this.baseX += 1;
    }else{
      this.baseX = this.baseX;
      
      GameScreen.life--;
    }
  }
}