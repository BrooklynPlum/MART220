function setup(){
    createCanvas (700,700);

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
    ellipse (280,400,80,40);
    ellipse (400,340,75,35);
    ellipse (330,280,65,30);

    //olives
    fill (60,50,40);
    ellipse (480,300,40,20);
    ellipse (290,320,39,19);
    ellipse (370,380,41,21);
    ellipse (220,442,42,22);

    //olive holes
    fill (240,200,30);
    ellipse (480,299,15,7);
    ellipse (290,319,15,7);
    ellipse (370,379,15,7);
    ellipse (220,441,15,7);
    
    //text
    fill (0,0,0);
    textSize (100);
    text ("Pizza",400,500);

    triangle (400,530, 380,540, 375,510);
    triangle (660,440, 650,420, 635,430,);
}