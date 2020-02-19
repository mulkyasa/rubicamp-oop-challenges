class CarFactory {
    constructor() {
        this.numProduction = [Math.floor(Math.random() * 5) + 2];
    }
    buildCar() {
        let result = [];
        let honda = new Honda(6, 4);

        for (let i = 0; i < this.numProduction; i++) {
            result.push(honda.buildHonda());
        }
        console.log(result);
    }
}

class Car {
    constructor(door, seat) {
        this.door = door;
        this.seat = seat;
        this.tyre = new Tyre();
    }
    warranty() {
        let timeWarranty = [Math.floor(Math.random() * 10) + 2];
        return timeWarranty;
    }
}

class Tyre {
    constructor() {
        const brand = ['Toyo', 'Michellin', 'Pirelli', 'Continental'];
        this.tyreBrand = brand[Math.floor(Math.random() * 4) + 1]
    }
}

class Honda extends Car {
    buildHonda() {
        let newHonda = {
            merk: 'Civic Turbo',
            door: `${this.door}`,
            seat: `${this.seat}`,
            warranty: `${this.warranty()} Tahun`,
            tyre: `${this.tyre.tyreBrand}`
        }
        return newHonda;
    }
}

var cars = new CarFactory();
cars.buildCar();