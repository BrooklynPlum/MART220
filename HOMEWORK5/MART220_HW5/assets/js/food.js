class food
{
    constructor (x, y)
    {
        this.x = x;
        this.y = y;
    }

    chocolate ()
    {
        stroke (5);
        fill (200, 150, 80);
        circle (this.x, this.y, 60);
        fill (100, 60, 0);
        circle (this.x, this.y, 53);
        fill (200, 150, 80);
        circle (this.x, this.y, 20);
        fill (200,150,250);
        circle (this.x, this.y, 10);
    }

    strawberry ()
    {
        stroke (5);
        fill (200, 150, 80);
        circle (this.x, this.y, 60);
        fill (220, 120, 200);
        circle (this.x, this.y, 53);
        fill (200, 150, 80);
        circle (this.x, this.y, 20);
        fill (200,150,250);
        circle (this.x, this.y, 10);
    }
}