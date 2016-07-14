class Fighter {
        constructor(name, power, health) {
            this.name = name;
        this.power = power;
        this.health = health;
    }
    
    setDamage(damage) {
            this.health -=  damage;
        console.log(`${this.name} health: ${this.health}`);
    }
    
    hit(enemy, point) {
            enemy.setDamage(point * this.power);
    }
}

class ImprovedFighter extends Fighter {
    doubleHit(enemy, point) {
            super.hit(enemy, point * 2);
    }
    
}


let [fighter, improvedFighter] = [new Fighter("Bob", 5, 100), 
                                  new ImprovedFighter("Joe", 5, 100)];




let fight = (fighter, improvedFighter, ...rest) => {
        for (let i = 0; i < rest.length; i++) {
                fighter.hit(improvedFighter, rest[i]);
                improvedFighter.doubleHit(fighter, rest[i]);
            if (fighter.health <= 0) {
                console.log(`GAME OVER!\n ${improvedFighter.name} wins!`);
                return; 
            }
            else if (improvedFighter.health <= 0) {
                console.log(`GAME OVER!\n ${fighter.name} wins!`);
                return;
            }
        }
        console.log(`TIE GAME!\n Please start a new game!`);
        return; 
};

fight(fighter, improvedFighter, 25, 13, 45);
