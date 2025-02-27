var myFrames;
var myFood;
var myImage;
var imageWidth;
var animationIdle = [];
var animationRun = [];
var donuts = [];
var donuts1 = [];
var i = 0;
var x = 490;
var y = 495;
var idleStrings = [];
var runStrings = [];
var flipx = false;
var timerValue = 15;

function preload()
{
    idleStrings = loadStrings ('../assets/idle.txt');
    runStrings = loadStrings ('../assets/run.txt');
}

function setup ()
{
    createCanvas (700,700);
    setInterval (updateIndex, 170);
    setInterval (timerIndex, 1000);

    for (var i = 0; i < idleStrings.length; i++)
    {
        myFrames = new frames(x, y, idleStrings[i]);  
        animationIdle.push(myFrames);
    }

    for (var i = 0; i < runStrings.length; i++)
    {
        myFrames = new frames(x, y, runStrings[i]);  
        animationRun.push(myFrames);
    }
    

    for (let i = 0; i < 5; i++)
    {
        myFood = new food(random(100, 600), random(100, 600), 25);
        donuts.push(myFood);
    }

    for (let i = 0; i < 5; i++)
    {
        myFood = new food(random(100, 600), random(100, 600), 25);
        donuts1.push(myFood);
    }
}

function updateIndex()
{
    i++;
    //console.log (i)
    if(i > 3)
    {
        i = 0;
    }
}

function timerIndex()
{
    console.log (timerValue);    

    if (timerValue > 0)
    {
      timerValue--;
    }
}

function draw ()
{
    background (200,150,250);

    fill (190, 70, 220);
    textSize (20);
    text ('collect the donuts!', 505, 640);
    text ('TIME LEFT:'+ timerValue, 525, 665);

    if (keyIsPressed) 
    {
    animationRun[i].draw();
    if (key == 'w')
        {
            y-=3;
        }
    if (key == 'a')
        {
            x-=3;

            flipx = false;
        }
    if (key == 's')
        {
            y+=3;
        }
    if (key == 'd')
        {
            x+=3;

            flipx = true;
        }

    for (let i = 0; i < idleStrings.length; i++)
        {
            animationIdle[i].x = x;
            animationIdle[i].y = y;
            animationIdle[i].flipx = flipx;
        }

    for (let i = 0; i < runStrings.length; i++)
        {
            animationRun[i].x = x;
            animationRun[i].y = y;
            animationRun[i].flipx = flipx;
        }
    }
    else
    {
        animationIdle[i].draw();
    }

    for(let i = 0; i < donuts.length; i++)
        {

            noStroke ();
            fill (200,150,250)
            rect (50, 27, 290, 25);        
            
            donuts[i].chocolate();

            fill (190, 70, 220);
            textSize (20);
            text ('CHOCOLATE DONUTS LEFT:'+ (i+1), 50, 50);
        }

    for(let i = 0; i < donuts1.length; i++)
        {
            noStroke ();
            fill (200, 150, 250)
            rect (50, 52, 305, 25); 

            donuts1[i].strawberry();

            fill (190, 70, 220);
            textSize (20);
            text ('STRAWBERRY DONUTS LEFT:'+ (i+1), 50, 75);            
        }

    for (let k = 0; k < donuts.length; k++)
        {
        if (animationIdle[i].hasCollided(donuts[k].x, donuts[k].y, 1, 1))
            {
            donuts.splice(k, 1);
            }
        }

    for (let k = 0; k < donuts1.length; k++)
        {
        if (animationIdle[i].hasCollided(donuts1[k].x, donuts1[k].y, 1, 1))
            {
            donuts1.splice(k, 1);
            }
        }

    if (timerValue < 1)
    {
        fill (200, 150, 250);
        rect (0, 0, 700, 700);
    
        stroke (100);
        fill (190, 70, 220);
        textSize (100);
        text ('TIMES UP!', 90, 360);
    }
}
