class enemy
{
    constructor(eX, eY, eW, eH)
    {
        this.eX = eX;
        this.eY = eY;
        this.eW = eW;
        this.eH = eH;
    }

    draw()
    {
        this.bigEnemy = createSprite (this.eX, this.eY, this.eW , this.eH);
    }

    attack()
    {
        //this.eX += random(300, 1200);
        //this.eY += random(300, 500);
    }
}