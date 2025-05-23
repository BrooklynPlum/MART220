//sprites
var theGround;
var thePlayer;
var theEnemy;
var bullet;

//sprite variables
var playerX = 200;
var playerY = -100;

var enemyX = 750;
var enemyY = -300;

//sprites created?
var playerCreated = false;
var enemyCreated = false;

//conditions
var start = false;

var startTimerValue = 0;
var enemyAttackTimer = 0;
var enemyHesitationTimer = 0;
var enemyAttackMode = false;
var enemyHealth = 1000;

var gameLost = false;
var gameWon = false;

//PRELOAD ANIMATIONS
function preload()
{
    //ENVIRONMENT
    backgroundImage = loadImage ('assets/images/Environment/Background.png');
    groundImage = loadImage ('assets/images/Environment/New_Ground.png');
    wallsImage = loadImage ('assets/images/Environment/Rock_Pillar.png');

    //PLAYER
    playerRunAni = loadAni ('assets/images/Chicken-Run/Player-Run1.png', 8);
    playerStillAni = loadAni ('assets/images/Chicken-Still/Player-Still1.png', 2);

    playerRunAni.frameDelay = 5;

    //ENEMY
    enemyLandingAni = loadAni ('assets/images/Landing/Fist-Landing1.png', 4);
    enemySparkleAni = loadAni ('assets/images/Sparkle/Fist-Sparkle1.png', 7);
    enemyStillAni = loadAni ('assets/images/Still/Fist-Still1.png', 2);

    enemyLandingAni.frameDelay = 15;
    enemySparkleAni.frameDelay = 10;

    //FONTS
    gameOverFont = loadFont ('assets/fonts/VT323/VT323-Regular.ttf');
    titleFont = loadFont ('assets/fonts/Ewert/Ewert-Regular.ttf');
    additionalTitleFont = loadFont ('assets/fonts/Chakra_Petch/ChakraPetch-Light.ttf');
}

//TO START GAME
function startButton()
{
    if (kb.presses('space'))
    {
        start = true;
    }
}

function startTimer()
{
    if (start == true)
    {
        startTimerValue++;
       // console.log ('TIMER'+startTimerValue);
    }
}

//CREATE SPRITES
function createGround()
{
    theGround = new Sprite (750, 650, 1500, 100, 'static');
    theGround.image = groundImage;

    theGround.image.width = 1500;
    theGround.image.height = 100;
}

function createWalls()
{
    leftWall = new Sprite (0, 300, 100, 600, 'static');
    leftWall.image = wallsImage;

    rightWall = new Sprite (1500, 300, 100, 600, 'static');
    rightWall.image = wallsImage;

    //SIZING
    leftWall.image.width = 180;
    leftWall.image.height = 600;
}

function createPlayer()
{
    if (start == true && playerCreated == false)
    {
        thePlayer = new Sprite (playerX, playerY, 50, 700);
        thePlayer.scale.x = .15;
        thePlayer.scale.y = .15;
        thePlayer.addAni('run', playerRunAni);
        thePlayer.addAni('still', playerStillAni);

        thePlayer.changeAni ('run');

        playerCreated = true;
        thePlayer.rotationLock = true;
    }
}

function createEnemy()
{
    if (playerCreated == true && enemyCreated == false && startTimerValue == 200)
    {
        theEnemy = new Sprite (enemyX, enemyY, 700, 580);
        theEnemy.scale.x = .2;
        theEnemy.scale.y = .2;
        theEnemy.addAni('still', enemyStillAni);
        theEnemy.addAni('sparkle', enemySparkleAni);
        theEnemy.addAni('land', enemyLandingAni);

        theEnemy.changeAni ('still');

        enemyCreated = true;
        theEnemy.rotationLock = true;
        theEnemy.bounciness = 0;
    }
}

//SET UP + DRAW
function setup()
{
    createCanvas (1500, 700);

    world.gravity.y = 10;

    createGround();

    createWalls();
}

function draw()
{
    image (backgroundImage, 0, 0, 1450, 600);
    
    if (enemyCreated == true)
    {
        enemyHP();
    }

    startButton();

    startTimer();

    createPlayer();

    createEnemy();

    if (startTimerValue >= 300)
    {
        playerMovement();

        playerAttack();

        enemyAttack();
    }

    enemyPlayerCollision();

    projectileEnemyCollision();

    if (gameLost == true)
    {
        //console.log ('LOSER');
        losingScreen();
    }

    if (gameWon == true)
    {
        console.log ('WINNER');
        winnningScreen();
    }

    if (start == false)
    {
        titleScreen();
    }

    instructions();


}

function titleScreen()
{
    textAlign (CENTER);
    textSize (100);
    textFont (titleFont);
    stroke (0);
    strokeWeight (3);
    fill (230, 23, 225);
    text ('CHICKEN BOY', 750, 100);

    textSize (50);
    textFont (additionalTitleFont);
    stroke (0);
    strokeWeight (2);
    fill (0);
    text ('T   H   E       G   A   M   E', 750, 150);
}

function instructions()
{
    textAlign (CENTER);
    textSize (25);
    textFont (gameOverFont);
    noStroke();
    fill (210, 210, 210, 80);
    text ('a/d keys to move', 525, 250);
    text ('left click to shoot', 525, 280);
    text ('(aim with cursor)', 525, 300);
}

function enemyHP()
{
    rectMode (CORNER);
    fill (255, 0, 0);
    noStroke();
    rect (250, 50, enemyHealth, 25);
}

//GAMEOVER
function losingScreen()
{
    rectMode (CENTER);
    fill (90, 90, 90, 90);
    rect (750, 350, 1500, 700);

    textAlign (CENTER);
    textSize (300);
    textFont (gameOverFont);
    fill (255);
    text ('YOU LOSE', 750, 300);
}

function winnningScreen()
{
    rectMode (CENTER);
    fill (90, 90, 90, 90);
    rect (750, 350, 1500, 700);

    textAlign (CENTER);
    textSize (300);
    fill (255);
    textFont (gameOverFont);
    text ('YOU WIN!', 750, 300);
}

//SPRITE FUNCTIONS
function playerMovement()
{
    if (kb.presses ('a'))   //TURN
    {
        thePlayer.scale.x = -.15;
    }
    if (kb.presses ('d'))   //TURN
    {
        thePlayer.scale.x = .15; 
    }

    if (kb.pressing ('a') && gameLost == false && gameWon == false)  //MOVE LEFT
    {
        thePlayer.changeAni ('run');
        thePlayer.x -=9;
    }
    else if (kb.pressing ('d') && gameLost == false && gameWon == false)  //MOVE RIGHT
    {
        thePlayer.changeAni ('run');
        thePlayer.x +=9;
    }
    else
    {
        thePlayer.changeAni ('still');
    }
}

function playerAttack()
{
    if (mouse.presses ('left') && gameLost == false && gameWon == false)
    {
        shootProjectile();
    }
}

function shootProjectile()
{
    bullet = new Sprite(thePlayer.x, thePlayer.y-50, 10);
    bullet.color = 'white';
    bullet.gravityScale = 0;
    bullet.moveTowards (mouse);
    bullet.speed = 5;
    bullet.life = 80; 
}

function enemyAttack()
{
    //console.log (theEnemy.y)
    //console.log ("enemyAttackMode:" + enemyAttackMode);

    //RESET ATTACK TIMER
    if (theEnemy.colliding (theGround))
    {
        theEnemy.changeAni ('still');
        enemyAttackTimer++;
        //console.log("TIMER:"+enemyAttackTimer);
    }
    if (theEnemy.collides (theGround))
    {
        theEnemy.changeAni ('land');
    }
    if (theEnemy.collided (theGround))
    {
        enemyAttackMode = false;    // = theEnemy is on the ground (not ready to attack) or rising (preparing to attack)
        enemyAttackTimer = 0;   // = wait time before theEnemy rises again
        enemyHesitationTimer = 0;    // = 
        theEnemy.speed = 0;
        theEnemy.vel.x = 0;
        theEnemy.vel.y = 0;
    }

    //ONCE ON GROUND -> RISE UP
    if (enemyAttackTimer >= 100 && theEnemy.y >=200 && enemyAttackMode == false)
    {
        theEnemy.changeAni ('sparkle');
        theEnemy.gravityScale = -13;
        theEnemy.speed = 3;
        theEnemy.moveTo (theEnemy.x, 200, 1);
    }

    if (theEnemy.y <= 200)
    {
        enemyHesitationTimer++;
        enemyAttackMode = true;    // = theEnemy is in the air and ready to attack
    }

    //ONCE UP -> FOLLOW PLAYER
    if (theEnemy.y > 50)
    {
        if (theEnemy.y <=200 && abs(theEnemy.x - thePlayer.x) > 100 && enemyAttackMode == true) //if theEnemy is at the correct height and not over thePlayer
        {
            theEnemy.changeAni ('sparkle');
            theEnemy.gravityScale = -13;
            theEnemy.vel.y = 0
            theEnemy.vel.x = 3;
            theEnemy.direction = theEnemy.angleTo (thePlayer);
        }
    }
    else if (theEnemy.y <= 50)
    {
        theEnemy.vel.y = 0;
        theEnemy.gravityScale = 10;
    }

    //ONCE OVER PLAYER -> FALL DOWN
    if (theEnemy.y <=200 && abs(theEnemy.x - thePlayer.x) < 100 && enemyAttackMode == true  && enemyHesitationTimer >= 100) // if theEnemy is at the correct height and over thePlayer
    {
        //theEnemy.vel.y = 3;
        theEnemy.gravityScale = 10;
    }

    //REPEAT
}

function enemyPlayerCollision() ///// FIX THIS! FOR SOME REASON thePlayers COLLIDER WONT WORK
{
    if (theEnemy && thePlayer && theEnemy.collide(thePlayer))
    {
        gameLost = true;
    }

    if (gameLost == true)
    {
        theEnemy.collider = 'static';
        thePlayer.collider = 'static';  //DOESNT ACTUALLY DO ANYTHING

        theEnemy.changeAni ('still');
        thePlayer.changeAni ('still');
    }
}

function projectileEnemyCollision()
{
    if (bullet && theEnemy && bullet.collides(theEnemy))
    {
        if (enemyHealth >= 0)
        {
            enemyHealth -=100;
        }
        else
        {
            enemyHealth = 0;
        }
    }

    if (enemyHealth <= 0)
    {
        gameWon = true;

        theEnemy.collider = 'static';
        thePlayer.collider = 'static';  //DOESNT ACTUALLY DO ANYTHING

        theEnemy.changeAni ('still');
        thePlayer.changeAni ('still');
    }
}


/// add dying animation
/// add on screen instructions
/// ensure that game over works
/// add cool down to enemy attack
/// fix barriers (they look dumb)




