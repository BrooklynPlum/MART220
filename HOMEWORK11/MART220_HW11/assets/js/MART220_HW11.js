var animationIdle;
var animationRun;
var animationAttack;
var rat;

//bricks
var blockade;
var blockadeArray = [];

//foods
var dot;
var dotArray = [];

//particles
var p;
var particles = [];
var x;
var y;

//dotHealth
var dotHealth = 100;

//numbers
var score = 0;

function preload()
{
    animationIdle = loadAnimation ('assets/images/idle/MART_220_Animation1.png', 'assets/images/idle/MART_220_Animation7.png')
    animationRun = loadAnimation ('assets/images/running/MART_220_RunningAnimation1.png', 'assets/images/running/MART_220_RunningAnimation4.png')
    animationAttack = loadAnimation ('assets/images/attack/attack01.png', 'assets/images/attack/attack04.png')
}

function setup()
{
    createCanvas (700, 700);

    //place blockades in random locations
    /*for (var i = 0; i < 5; i++)
    {
        blockade = new brick(random(100, 600), random(100, 600));
        blockadeArray.push(blockade);
    }*/

    //place dots in random locations
    for (let i = 0; i < 10; i++)
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
    rat.addAni('attack', animationAttack);
    //ADD ATTACK ANI
    rat.rotationLock = true;
}

function draw ()
{
    background (145, 235, 135);

    //blockades ();

    movement ();

    dots ();

    scoreAndHealth ();

    endScreen ();

    eatTheCheese ();
}

function dots()
{
    for (var i = 0; i < dotArray.length; i++)
    {
        dotArray[i].draw();

        //rat.overlap(dotArray[i].dot);

        if (kb.pressing('x'))
        {
            rat.changeAni('attack');
            if (dotArray[i].dot != null)
            {
                if (dist(rat.position.x, rat.position.y, dotArray[i].dot.position.x, dotArray[i].dot.position.y) < 100)
                {
                    x = dotArray[i].dot.position.x;
                    y = dotArray[i].dot.position.y;
                    createParticles(dotArray[i].dot.position.x, dotArray[i].dot.position.y);
                    dotHealth -=1;

                    //console.log (dotHealth);
                    if (dotHealth < 0)
                    {
                        dotArray[i].dot.remove();
                        dotArray[i].dot = null;

                        dotHealth = 100;

                        console.log (score);
                        score +=1;
                    }
                }
            }
        }
    }
}

function createParticles()
{
    for (let i = 0; i < 5; i++)
    {
        p = new particle(x, y);
        particles.push(p);
    }
    for (let i = particles.length - 1; i >= 0; i--)
    {
        particles[i].update();
        particles[i].show();

        if (particles[i].finished())
        {
            // remove this particle
            particles.splice(0,i);
        }
    }
}

/*function blockades ()
{
    for (var i = 0; i < blockadeArray.length; i++)
    {
        blockadeArray[i].draw();

        rat.collides(blockadeArray[i].blockade);
    }
}*/

function movement ()
{
    rat.speed = 3;

	if (kb.pressing('up'))
    {
		rat.direction = -90;
        rat.changeAni('run');
	}
    else if (kb.pressing('down'))
    {
		rat.direction = 90;
        rat.changeAni('run');
	}
    else if (kb.pressing('left'))
    {
		rat.direction = 180;
        rat.changeAni('run');
        rat.scale.x = 1;
	}
    else if (kb.pressing('right'))
    {
        rat.direction = 0;
        rat.changeAni('run');
        rat.scale.x = -1;
	}

    else
    {
	    rat.speed = 0;
        rat.changeAni('idle');
    }
}

function scoreAndHealth ()
{
    textSize (20);
    text ('Score:' + score, 570, 50);
}

function eatTheCheese ()
{
    textSize (40);
    text ('EAT THE CHEESE WHEELS!', 80, 680);
}

function endScreen ()
{
    if (score > 4)
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
    /*if (health < 1)
    {
        clear ();
        blockadeArray.splice (0, blockadeArray.length);
        dotArray.splice (0, dotArray.length);
        background (30);
        noLoop ();
        fill (255);
        textSize (80);
        text ('YOU LOSE!', 120, 100);
    }*/
}
