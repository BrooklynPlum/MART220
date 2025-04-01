class food
{
    constructor(x, y, isGood)
    {
        this.x = x;
        this.y = y;
        this.isGood = isGood;
        this.dot = new Sprite(x, y, 10);
    }

    draw()
    {
        if(this.isGood)
        {
            this.dot.color = "green";
        }
        else
        {
            this.dot.color = "red";
        }
    }
}