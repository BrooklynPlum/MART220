class frames
{
	constructor(path)
	{
		this.path = path;
		this.myImage = loadImage(this.path);
	}

	draw()
	{
		image (this.myImage,100,100,500,500);
	}
}