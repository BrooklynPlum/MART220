var myFrames;
var myFood;
var animation = [];
var donuts = [];
var donuts1 = [];
var i = 0;
var x = 300;
var y = 350;

function preload()
{
    for (var i = 1; i < 8; i++)
    {
        myFrames = new frames(x, y, "../assets/images/MART_220_Animation" + i + ".png");  
        animation.push(myFrames);
    }
}

function setup ()
{
    createCanvas (700,700);
    setInterval(updateIndex,170);

    for (let i = 0; i < 5; i++) {
        myFood = new food(random(0, 500), random(0, 500), 25);
        donuts.push(myFood);
    }

    for (let i = 0; i < 5; i++) {
        myFood = new food(random(0, 500), random(0, 500), 25);
        donuts1.push(myFood);
    }
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

    fill (190, 70, 220);
    textSize (20);
    text ('collect the donuts!', 440, 690);
    
    animation[i].draw();

    if (keyIsPressed) 
    {
    if (key == 'w')
        {
            y-=3;
        }
    if (key == 'a')
        {
            x-=3;
        }
    if (key == 's')
        {
            y+=3;
        }
    if (key == 'd')
        {
            x+=3;
        }

    for (let i = 0; i < 7; i++)
        {
            animation[i].x = x;
            animation[i].y = y;
        }
    }

    for(let i = 0; i < donuts.length; i++)
        {
            donuts[i].chocolate();
        }

    for(let i = 0; i < donuts1.length; i++)
        {
            donuts1[i].strawberry();
        }

    for (let k = 0; k < donuts.length; k++)
        {
        if (animation[i].hasCollided(donuts[k].x, donuts[k].y, 1, 1))
            {
            donuts.splice(k, 1);
            }
        }
    for (let k = 0; k < donuts1.length; k++)
        {
        if (animation[i].hasCollided(donuts1[k].x, donuts1[k].y, 1, 1))
            {
            donuts1.splice(k, 1);
            }
        }
}
