/* let cx = 10;

class Circle{
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
    this.speed = this.speed + .1;
    circle(this.x, this.y, this.radius, this.color);
    }
}

var myCircles = [];
myCircles[0] = new Circle(100, 10, 100, [166, 214, 222]);
myCircles[1] = new Circle(300, 10, 100, [166, 214, 222]);

function setup(){
    createCanvas(400,300);
}

function draw(){
    background(34, 32, 79);
    myCircles[0].update();
    myCircles[1].update();
}
*/

/* 
//Object Inheritence example

class Note {
    constructor(pitch, duration) {
        this.pitch = pitch;
        this.duration = duration;
    }
}

class FullNote extends Note {
    constructor(pitch){
        super(pitch, 1);
    }
}

class HalfNote extends Note {
    constructor(pitch){
        super(pitch, .5);
    }
}

let aHalfNote = new HalfNote(880);
let aFullNote = new FullNote(720);

console.log(aFullNote);

//Abstraction Example
class Vector {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    magnitude(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}

let velo = new Vector(10, 5);
let speed = velo.magnitude();
console.log(speed);

//Encapsulation Example 
class Engine{
    constructor(){
        this.oil = 10
    }
    setOil(newOilAmount){
        if(newOilAmount >= 0){
            this.oil = newOilAmount
        } else {
            console.error("Cannot set negative oil")
        }
    }
    getOil(){
        return this.oil
    }
}

//Polymorphism Example

class Book{
    constructor(pages){
        this.pages = pages;
    }
    read(){
        console.log("You just read " + this.pages + " pages!")
    }
}

class Novel extends Book{
    constructor(){
        super(300);
    }

}

class Comic extends Book{
    constructor(){
        super(16);
    }

}

let books = [];
books[0] = new Comic;
books[1] = new Novel;
books.forEach(
    function(book) {
    book.read();
})

//Association Example
class Dog{
    constructor(name){
        this.name = name;
    }

    play(ball){
        ball.catch(this);
    }
}

class Ball{
    catch(dog){
        console.log(dog.name + ' caught a ball!');
    }
}

let dog = new Dog("Difo");
let ball = new Ball();
dog.play(ball);*/

let circleY = Math.floor(Math.random() * 700 + 1);
let velocityX = Math.floor(Math.random() * 700 + 1);

class RainDrops {
  constructor(color, diameter) {
    (this.color = color), (this.diameter = diameter);
  }
  createCircle = function (posX, posY, diameter) {
    circle(posX, posY, diameter);
  };
}

class ground {
  constructor(r, g, b) {
    (this.r = r), (this.g = g), (this.b = b);
  }
}

function setup() {
  createCanvas(700, 500);
}

function draw() {
  background(0, 100, 100);
  let circleX = Math.floor(Math.random() * 700 + 1);
  let circleY = Math.floor(Math.random() * 700 + 1);
  let velocityX = Math.floor(Math.random() * 700 + 1);
  let velocityY = Math.floor(Math.random() * 700 + 1);

  var i;
  let rain = new RainDrops("#800080", 100);
  for (i = 0; i < 100; i++) {
    rain.createCircle(circleX, 67, 12),
      rain.createCircle(circleY, 67, 12),
      rain.createCircle(velocityX, 67, 12),
      rain.createCircle(velocityY, 67, 12);
  }

  function moveDown() {}

  //create raindrops that will make the motion realistic

  rain.createCircle(30, 50, 10);
  rect(0, 400, 700, 500);
  fill(0, 100, 0);
}