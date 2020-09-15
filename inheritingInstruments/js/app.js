class Instrument{
    constructor(loudness, family, verb){
        this.loudness = loudness;
        this.family = family;
        this.verb = verb;
    }
    play(){
        console.log(this.family + " " + this.verb + " plays at " + this.loudness);
    }
}

class Woodwind extends Instrument{
    constructor(loudness, family, verb){
        super(loudness, "Clarinet", "blows")
    }
}

class Percussion extends Instrument{
    constructor(loudness, family, verb){
        super(loudness, "Drum", "bang")
    }
}

class Stringed extends Instrument{
    constructor(loudness, family, verb){
        super(loudness, "Guitar", "plucked")
    }
}
 let instruments = [];
 instruments[0] = new Stringed(400);
 instruments[1] = new Woodwind(500);
 instruments[2] = new Percussion(300);
 instruments.forEach((instruments) => {
    instruments.play();
})