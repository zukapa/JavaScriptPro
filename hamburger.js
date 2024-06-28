class Humburger {
    constructor(price, calories) {
        this.price = price;
        this.calories = calories;
    }

    addCheese (quantity = 1) {
        this.price += 10 * quantity;
        this.calories += 20 * quantity;
    }

    addSalad (quantity = 1) {
        this.price += 20 * quantity;
        this.calories += 5 * quantity;
    }

    addPotato (quantity = 1) {
        this.price += 15 * quantity;
        this.calories += 10 * quantity;
    }

    addSpice (quantity = 1) {
        this.price += 15 * quantity;
    }

    addMayonnaise (quantity = 1) {
        this.price += 15 * quantity;
        this.calories += 10 * quantity;
    }

    getPrice () {
        return this.price;
    }

    getCalories () {
        return this.calories;
    }
}

class BigHumburger extends Humburger {
    constructor(price = 100, calories = 40) {
        super(price, calories);
    }
}

class SmallHumburger extends Humburger {
    constructor(price = 50, calories = 20) {
        super(price, calories);
    }
}

let humburgerFirst = new SmallHumburger();
console.log(humburgerFirst.getPrice());
console.log(humburgerFirst.getCalories());
humburgerFirst.addCheese(3);
humburgerFirst.addMayonnaise();
humburgerFirst.addPotato(2);
humburgerFirst.addSalad(4);
humburgerFirst.addSpice();
console.log(humburgerFirst.getPrice());
console.log(humburgerFirst.getCalories());
