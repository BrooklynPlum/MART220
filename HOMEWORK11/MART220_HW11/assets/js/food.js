class food
{
    constructor(x, y, isGood)
    {
        this.x = x;
        this.y = y;
        this.isGood = isGood;
        this.dot = new Sprite(x, y, 50, 'static');
        this.dot.color = 'yellow';
        this.dot.stroke = 'orange';
    }

    draw()
    {

    }
}