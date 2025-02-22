class frames
{
	constructor(x, y, path)
	{
		this.path = path;
		this.myImage = loadImage(this.path);
		this.x = x;
		this.y = y;
		this.imageWidth = 50;
        this.imageHeight = 50;
	}

	draw()
	{
		image (this.myImage,this.x,this.y,500,500);
	}

	hasCollided(x2, y2, w2, h2) {
        return (
          this.x < x2 + w2 &&
          this.x +  this.imageWidth > x2 &&
          this.y < y2 + h2 &&
          this.y + this.imageHeight > y2
        );
      }
}