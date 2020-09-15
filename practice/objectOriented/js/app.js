//inheritance example

class Note {
    constructor(pitch, duration){
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
    constructor(pitch) {
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

let velo = new Vector(10,5);
let speed = velo.magnitude();
console.log(speed);

//Encapsulation Example

class Pool {
    constructor(){
        this.water = 10;
    }

    setWater(newWaterAmount){
        if (newWaterAmount >= 0){
            this.water = newWaterAmount
        } else {
            console.error("cannot have negative water");
        }
    }
    getWater(){
        return this.water();
    }
}

//Polymorphism example

class Book{
    constructor(pages){
        this.pages = pages;
    }
    read(){
        console.log("You read " + this.pages + " pages!")
    }
}

class Novel extends Book{
    constructor(){
        super(300)
    }
}

class Comic extends Book{
    constructor(){
        super(16)
    }
}

let books = [];
books[0] = new Comic();
books[1] = new Novel();
books.forEach((book) => {
    book.read();
})