//sprites
var jungleGround;
var thePlayer;
var bigEnemy;

//sprites created?
var playerCreated = false;
var enemyCreated = false;

//conditions
var start = false;
var timerValue = 0;
var mark = 0;


//TO START GAME
function startButton()
{
    if (kb.presses('space'))
    {
        start = true;
    }
}

function timer()
{
    if (start == true)
    {
        timerValue++;
    }
}


//CREATE SPRITES
function createGround()
{
    jungleGround = new Sprite (750, 650, 1500, 150, 'static');
}

function createPlayer()
{
    if (start == true && playerCreated == false)
    {
        thePlayer = new Sprite (200, -100, 30, 50);
        playerCreated = true;
    }
}

function createEnemy()
{
    if (playerCreated == true && enemyCreated == false && timerValue == 200)
    {
        bigEnemy = new Sprite (750, -300, 300, 300);
        enemyCreated = true;
    }
}


//SET UP + DRAW
function setup()
{
    createCanvas (1500, 700);

    world.gravity.y = 10;

    createGround();
}

function draw()
{
    background (120);

    startButton();

    timer();

    createPlayer();

    createEnemy();

    //bigEnemy.attack();
    if (bigEnemy.collides(jungleGround))
    {
        console.log ('ouch');
    }
}




