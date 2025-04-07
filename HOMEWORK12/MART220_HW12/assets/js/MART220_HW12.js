let myFont;

function setup ()
{
    createCanvas (700, 700, WEBGL);

    myFont = loadFont ('assets/fonts/Underdog-Regular.ttf');
}

function draw ()
{
    background (255, 240, 0);

    ambientLight (50);
    pointLight (15, 215, 75, -100, 0, 600);

    box1();

    cone1();

    cone2();

    cone3();

    torus1();

    torus2();

    torus3();

    torus4();

    //torus5();

    textFont (myFont);
    textSize (50);
    fill (0);
    text ('LOTS OF SHAPES', -100, -250);
    textSize (30);
    text ('By Brooklyn', 150, 200);

}

    //console.log (frameCount)

function box1 ()
{
    push();

    translate (-100, 100, 100)

    rotateX (frameCount * .5);
    rotateY (0);
    rotateZ (frameCount * .1);

    fill (15, 215, 75);
    specularMaterial (255);
    shininess (20);

    box (200, 200, 200);

    pop ();
}

function cone1 ()
{
    push();

    translate (300, 0, -300);

    rotateX (0);
    rotateY (frameCount * 6);
    rotateX (200);

    noStroke();
    normalMaterial();

    cone (50, 200);

    pop ();
}

function cone2 ()
{
    push();

    translate (0, -300, -600);

    rotateX (0); 
    rotateY (frameCount * 8);
    rotateX (220);

    noStroke();
    normalMaterial();

    cone (50, 200);

    pop ();
}

function cone3 ()
{
    push();

    translate (-550, -600, -900);

    rotateX (0);
    rotateY (frameCount * 10);
    rotateX (220);

    noStroke();
    normalMaterial();

    cone (50, 200);

    pop ();
}

function torus1 ()
{
    push();

    translate (0, 0, -1000);

    //rotateX (0);
    //rotateY (frameCount * 10);
    //rotateX (220);

    noStroke();
    emissiveMaterial (245, 115, 200);

    torus (100, 10);

    pop ();
}

function torus2 ()
{
    push();

    translate (0, 0, -800);

    //rotateX (0);
    //rotateY (frameCount * 10);
    //rotateX (220);

    noStroke();
    emissiveMaterial (245, 70, 170);

    torus (200, 10);

    pop ();
}

function torus3 ()
{
    push();

    translate (0, 0, -600);

    //rotateX (0);
    //rotateY (frameCount * 10);
    //rotateX (220);

    noStroke();
    emissiveMaterial (215, 15, 135);

    torus (300, 10);

    pop ();
}

function torus4 ()
{
    push();

    translate (0, 150, 200);

    rotateX (85);
    rotateY (frameCount * 1.1);
    rotateX (frameCount * .5);

    noStroke ();
    fill (15, 215, 75);
    specularMaterial (255);
    shininess (255);

    torus (50, 10, 100, 100);

    pop ();
}

/*function torus5 ()
{
    push();

    translate (70, 120, 200);

    rotateX (85);
    rotateY (frameCount * 2);
    rotateX (frameCount * .3);

    noStroke ();
    fill (15, 215, 75);
    specularMaterial (255);
    shininess (255);

    torus (50, 10, 100, 100);

    pop ();
}*/