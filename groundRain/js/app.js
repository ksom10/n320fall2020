let cx = 10;

class Rain{
    constructor(cx, cy, radius, color){
        this.x = cx;
        this.y= cy;
        this.radius = radius;
        this.color = color;
        this.speed = 1 + Math.random() * 2;
    }

    update(){
    fill(this.color)
    this.y= this.y + this.speed;
    this.speed = this.speed + .05;
    circle(this.x, this.y, this.radius, this.color);

    if(this.y > 300){
        this.y = 0;
    }
    }
}



var myRain = [];
myRain[0] = new Rain(100, 10, 20, [166, 214, 222]);
myRain[1] = new Rain(200, 10, 20, [166, 214, 222]);
myRain[2] = new Rain(300, 10, 20, [166, 214, 222]);
myRain[3] = new Rain(50, 10, 20, [166, 214, 222]);




function setup(){
    createCanvas(400,300);
}

function draw(){
    background(34, 32, 79);
    myRain[0].update();
    myRain[1].update();
    myRain[2].update();
    myRain[3].update();
    fill(0, 255, 1*.5);
    rect(0, 200, 400, 100);
}

