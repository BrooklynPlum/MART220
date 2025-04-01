var animationIdle;
var animationRun;
var rat;

//bricks
var blockade;
var blockadeArray = [];

//foods
var dot;
var dotArray = [];

//numbers
var score = 0;
var health = 3;

function preload()
{
    animationIdle = loadAnimation ('assets/images/idle/MART_220_Animation1.png', 'assets/images/idle/MART_220_Animation7.png')
    animationRun = loadAnimation ('assets/images/running/MART_220_RunningAnimation1.png', 'assets/images/running/MART_220_RunningAnimation4.png')
}

function setup()
{
    createCanvas (700, 700);

    //place blockades in random locations
    for (var i = 0; i < 5; i++)
    {
        blockade = new brick(random(100, 600), random(100, 600));
        blockadeArray.push(blockade);
    }

    //place dots in random locations
    for (let i = 0; i < 30; i++)
    {
        if (floor(random(0, 2)) == 0)
        {
            dot = new food(random(100, 600), random(100, 600), false);
        }
        else
        {
            dot = new food(random(100, 600), random(100, 600), true);
        }

        dotArray.push(dot);
    }

    //create rat
    frameRate (40);
    rat = new Sprite(100, 100, 120, 70);
	rat.addAni('idle', animationIdle);
	rat.addAni('run', animationRun);
    rat.rotationLock = true;
}

function draw ()
{
    background (130);

    blockades ();

    movement ();

    dots ();

    scoreAndHealth ();

    endScreen ();
}

function dots()
{
    for (var i = 0; i < dotArray.length; i++)
    {
        dotArray[i].draw();

        rat.overlap(dotArray[i].dot);

        if (rat.overlap(dotArray[i].dot))
        {
            if(dotArray[i].isGood)
            {
                score++;
                console.log (score);
            }
            else
            {
                health--;
                console.log (health);
            }

            dotArray[i].dot.remove();
        }
    }
}

function blockades ()
{
    for (var i = 0; i < blockadeArray.length; i++)
    {
        blockadeArray[i].draw();

        rat.collides(blockadeArray[i].blockade);
    }
}

function movement ()
{
    rat.speed = 3;

	if (kb.pressing('up')) {
		rat.direction = -90;
        rat.changeAni('run');
	} else if (kb.pressing('down')) {
		rat.direction = 90;
        rat.changeAni('run');
	} else if (kb.pressing('left')) {
		rat.direction = 180;
        rat.changeAni('run');
        rat.scale.x = 1;
	} else if (kb.pressing('right')) {
        rat.direction = 0;
        rat.changeAni('run');
        rat.scale.x = -1;
	} else {
	    rat.speed = 0;
        rat.changeAni('idle');
	}
}

function scoreAndHealth ()
{
    textSize (15);
    text ('Score:' + score, 600, 50);
    text ('Health:' + health, 600, 65);
}

function endScreen ()
{
    if (score > 9)
    {
        clear ();
        blockadeArray.splice (0, blockadeArray.length);
        dotArray.splice (0, dotArray.length);
        background (30);
        noLoop ();
        fill (255);
        textSize (80);
        text ('YOU WON!', 130, 100);
    }
    if (health < 1)
    {
        clear ();
        blockadeArray.splice (0, blockadeArray.length);
        dotArray.splice (0, dotArray.length);
        background (30);
        noLoop ();
        fill (255);
        textSize (80);
        text ('YOU LOSE!', 120, 100);
    }
}
