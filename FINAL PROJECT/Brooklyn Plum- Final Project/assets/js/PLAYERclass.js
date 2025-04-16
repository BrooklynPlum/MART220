class player
{
    constructor(pX, pY, pW, pH)
    {
        this.pX = pX;
        this.pY = pY;
        this.pW = pW;
        this.pH = pH;
    }

    draw()
    {
        this.thePlayer = createSprite (this.pX, this.pY, this.pW , this.pH);
    }
}