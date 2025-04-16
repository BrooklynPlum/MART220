class ground
{
    constructor (gX, gY, gW, gH)
    {
        this.gX = gX;
        this.gY = gY;
        this.gW = gW;
        this.gH = gH;

    }

    draw ()
    {
        this.jungleGround = createSprite (this.gX, this.gY, this.gW, this.gH, 'static');
    }
}