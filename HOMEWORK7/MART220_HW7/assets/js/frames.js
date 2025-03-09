class frames
{
	constructor(x, y, path)
	{
		this.path = path;
		this.myImage = loadImage(this.path);
		this.x = x;
		this.y = y;
		this.imageWidth = 200;
        this.imageHeight = 200;
		this.flipx = false;
	}

	draw()
	{
		//image (this.myImage,this.x,this.y,500,500);

		push();
		if (this.flipx)
		{
			translate (this.imageWidth, 0);
			scale (-1.0, 1.0);
			image (this.myImage, -this.x, this.y, this.imageWidth, this.imageHeight);
		}
		else
		{
			image (this.myImage, this.x, this.y, this.imageWidth, this.imageHeight);
		}
		pop ();
	}

	/*hasCollided(x2, y2, w2, h2) {
        return (
          this.x < x2 + w2 &&
          this.x +  this.imageWidth > x2 &&
          this.y < y2 + h2 &&
          this.y + this.imageHeight > y2
        );
      }*/
}