class Pet{
    constructor(petName) {
        this._petName = petName;
    }
}

class Dog extends Pet {
    constructor(petName, hunger){
        super(petName);
        this._petName = petName;
        this._hunger = hunger;
    }

    dogAction () {
        if (this._hunger >= 75) {
            console.log(`so hungery, please feed him...`);
        }
        else{
            console.log(`is replete`);
        }}
}

class Cat extends Pet {
    constructor(petName, bored) {
        super(petName);
        this._petName = petName;
        this._bored = bored;
    }
    catAction () {
        if (this._bored >= 75) {
            return `wants play with or walk outside...`;
        }
        else{
            return `is happy and giving cuddles`;
        }}
}

class Rabbit extends Pet {
    constructor(petName, thirst){
        super(petName);
        this._petName = petName;
        this._thirst = thirst;
    }
    rabbitAction () {
        if (this._thirst >= 75) {
            return `is looking for something to drink...`;
        }
        else{
            return `is playing`;
        }}
}

let dog = new Dog("Sue", 60); 
let cat = new Cat("rob", 100); 
let rabbit = new Rabbit("cici", 30);
dog.dogAction();
cat.catAction();
rabbit.rabbitAction();