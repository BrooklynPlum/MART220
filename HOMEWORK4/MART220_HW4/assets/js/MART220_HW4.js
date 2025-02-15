var myFrames;
var animation = [];
var i = 0;
var myFont;
var myFont1;

function preload()
{
    for (var i = 1; i < 8; i++)
    {
        myFrames = new frames("../assets/images/MART_220_Animation" + i + ".png");  
        animation.push(myFrames);
    }

    myFont = loadFont('assets/fonts/Moirai_One/MoiraiOne-Regular.ttf');
    myFont1 = loadFont('assets/fonts/Chango/Chango-Regular.ttf');
}

function setup ()
{
    createCanvas (700,700);
    setInterval(updateIndex,170);
}

function updateIndex()
{
    i++;
    console.log (i)
    if(i > 6)
        {
            i = 0;
        }
}

function draw ()
{
    background (200,150,250);

    fill (185,130,250);
    noStroke ();
    ellipse (335,410,250,30);

    fill (150,70,240);
    textSize (100);
    textFont (myFont);
    text ('MOUSE',140,170);

    textSize (15);
    textFont (myFont1);
    text ('ADVENTURES',280,200);
    
    animation[i].draw();
}