class brick
{
    constructor (x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.blockade = new Sprite(x, y, 60, 60, 'static');
        this.blockade.color = 100;
        //this.blockade.setCollider("rectangle", 0, 0, 50, 50);
    }

    draw()
    {

    }
}