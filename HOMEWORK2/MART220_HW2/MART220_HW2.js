var pepX
var pepY
var pepX1
var pepY1
var pepX2
var pepY2

var oliX
var oliY
var oliX1
var oliY1
var oliX2
var oliY2
var oliX3
var oliY3

var nametextX = 450;
var nametextY = 650;

var titletextX = 50;
var titletextY = 100;

var number1 = 1;
var number2 = 1;

function setup(){
    createCanvas (700,700);

    //Pepperoni Randomizer
    pepX=floor(random(460,261));
    pepY=floor(random(420,261));

    pepX1=floor(random(460,261));
    pepY1=floor(random(420,261));

    pepX2=floor(random(460,261));
    pepY2=floor(random(420,261));

    //Olive Randomizer
    oliX=floor(random(460,261));
    oliY=floor(random(420,261));

    oliX1=floor(random(460,261));
    oliY1=floor(random(420,261));

    oliX2=floor(random(460,261));
    oliY2=floor(random(420,261));

    oliX3=floor(random(460,261));
    oliY3=floor(random(420,261));
}

function draw(){
    background (130,190,220);

    //bottom shadow
    fill (110,170,210);
    strokeWeight (0);

    triangle (320,260, 620,320, 180,560);
    quad (180,560, 180,540, 620,300, 620,320);
    circle (360,260,90);
    arc (575,300,90,90,HALF_PI,0);
    quad (360,215, 575,255, 575,310, 360,250);
    quad (180,540, 180,520, 615,290, 615,310);

    //crust on bottom
    fill (190,140,60);
    strokeWeight (0);
    triangle (300,240,600,300,160,540);

    quad (160,540,160,520,600,280,600,300);

    //edge crust
    circle (340,240,90);
    arc (555,280,90,90,HALF_PI,0);
    quad (340,195,555,235,555,290,340,230);

    //cheese
    fill (240,200,30);
    triangle (300,220,600,280,160,520);

    //cheese drips
    bezier (250,469, 250,521, 280,505, 280,453);
    bezier (320,430, 320,521, 350,505, 350,415);

    //pepperoni
    fill (230,40,30);
    ellipse (pepX,pepY,80,40);
    ellipse (pepX1,pepY1,75,35);
    ellipse (pepX2,pepY2,65,30);

    //olives
    fill (60,50,40);
    ellipse (oliX,oliY,40,20);
    ellipse (oliX1,oliY1,39,19);
    ellipse (oliX2,oliY2,41,21);
    ellipse (oliX3,oliY3,42,22);

    //olive holes
    fill (100,100,115);
    ellipse (oliX,oliY,15,7);
    ellipse (oliX1,oliY1,15,7);
    ellipse (oliX2,oliY2,15,7);
    ellipse (oliX3,oliY3,15,7);
    
    //text
    fill (230,40,30);
    textFont ('fantasy');
    textSize (40);
    text ("by Brooklyn",nametextX,nametextY);

    textSize (60);
    text ("Messed Up Slice",titletextX,titletextY);

    titletextX+=number1;

    if (titletextX>53 || titletextX<47)
    {
        number1*=-1;
    }

    nametextX+=number2;

    if (nametextX>453 || nametextX<447)
    {
        number2*=-1;
    }
}

function mouseMoved ()
{
    nametextX=mouseX;
    nametextY=mouseY;
}

function mousePressed ()
{
    titletextX=mouseX;
    titletextY=mouseY;
}

