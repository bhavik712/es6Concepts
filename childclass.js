class Player{
    constructor(name, country){
        this.name = name;
        this.country = country;
    }

    showDetails(){
        return `${this.name} plays for ${this.country}`;
    }
}

const player1 = new Player('Rohit','India');
const player2 = new Player('Smith', 'Aus');

console.log(player1.showDetails());
console.log(player2.showDetails());

class Tenisplayer extends Player{
    constructor(name,country,age){
        super(name,country);
        this.age = age;
    }
    showDetails(){
        return `${this.name} is ${this.age} years old plays tannis beautifully.`
    }
}

const tenisplayer1 = new Tenisplayer('Rafel', 'France',34);
const tenisplayer2 = new Tenisplayer('Ravi','India',38);

console.log(tenisplayer1.showDetails());
console.log(tenisplayer2.showDetails());