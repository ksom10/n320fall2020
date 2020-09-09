// OBJECT = SPECIFIC DOG

/* var myDog = {
    name: "Brody",
    age: 13,
    height: 10,
    color: "white",
    bark: function(){
        console.log("ROOF ROOF")
    }
}

myDog.bark(); */

//CLASS = THE IDEA OF A DOG

class Dog {
    constructor(name, height, color){
        this.name = name;
        this.height = height;
        this.color = color;
    }
    bark(){
        console.log(this.name + " barks");
    }
}

class employer extends employee

var myDog = new Dog ("Brody", 10, "White");
console.log(myDog);
myDog.bark();