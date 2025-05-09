class particle
{
    constructor(x, y)
    {
      this.x = x;
      this.y = y;
      this.vx = random(-2, 2);
      this.vy = random(2, -2);
      this.alpha = 100;
    }
  
    finished()
    {
      return this.alpha < 0;
    }
  
    update()
    {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 5;
    }
  
    show()
    {
      noStroke();
      //stroke(0);
      //fill(255, this.alpha);
      ellipse(this.x, this.y, 5);
    }
  
  }