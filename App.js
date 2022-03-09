class Pet{
    constructor(petName, hunger, bored, thirst) {
        this._petName = petName;
        this._hunger = 100;
        this._bored = 100;
        this._thirst = 100;
    }
get petName() {
    return this._petName;
}
get hunger() {
    return this._hunger;
}
get bored() {
    return this._bored;
}
get thirst() {
    return this._thirst;
}

feed() {
    this._hunger ++;
    this._thirst -= 0.5;
    this.bored += 0.5;
}
drink() {
    this._thirst ++;
    this._hunger += 0.5;
    this._bored += 0.5;
}
play() {
    this._bored ++;
    this._hunger -= 0.5;
    this._thirst -= 0.5;
}
relax() {
    this._hunger --;
    this._thirst --;
    this.bored --;
}
}
class Dog extends Pet {
    constructor(petName, walk){
        super(petName);
        this._walk = walk;
    }
    dogAction () {
        this._walk ++;
        this._bored --;
        this._hunger ++;
        this._thirst ++;
        if (this._walk > 75) {
            console.log(`${this.petName} is tired now, need to relax...`);
        }
        else if (this._bored < 50) {
            console.log(`${this.petName} is happy now...`);
        }
        else if (this._hunger > 75) {
            console.log(`${this.petName} so hungery, please feed him...`);
        }
        else if (this._thirst >75) {
            console.log(`${this.petName} is thirsty, +please give him something to drink...`);
        }
        else {

        }
    }
}
class Cat extends Pet {
    constructor(petName) {
        super(petName);
    }
    catAction () {
        if (this._bored > 75) {
            return `${this.petName} wants play with or walk outside...`;
        }
        else{
            return `${this.petName} is happy and giving cuddles`;
        }}
}
class Rabbit extends Pet {
    constructor(petName){
        super(petName);
    }
    rabbitAction () {
        if (this._thirst >= 75) {
            return `${this.petName} is looking for something to drink...`;
        }
        else{
            return `${this.petName} is playing`;
        }}
}

function alive(cyberPet){
    cyberPet.intervalID = setInterval(()=>{
        if (cyberPet.bored == true || cyberPet.drink == true || cyberPet.feed == true) {
            clearInterval(cyberPet.intervalID);
        } else {
            cyberPet.relax();
            console.log(cyberPet);
        }
    }, 3000)
};
// let dog = new Dog("Sue", 60); 
// let cat = new Cat("rob", 100); 
// let rabbit = new Rabbit("cici", 30);
// dog.dogAction();
// cat.catAction();
// rabbit.rabbitAction();