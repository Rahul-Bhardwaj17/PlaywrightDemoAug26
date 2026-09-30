"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = require("../tests/Car");
class Honda extends Car_1.Car {
    constructor(color, model, speed, yom) {
        super(color);
        this.model = model;
        this.speed = speed;
        this.yom = yom;
    }
    start() {
        console.log("Honda car will start");
    }
    stop() {
        console.log("Honda car will stop");
    }
    speedOfHonda() {
        console.log(`speed of honda is ${this.speed}`);
    }
}
const myHonda = new Honda("red", "city", 200, 2026);
// myHonda.carColor();
const myHonda1 = new Honda("black", "civic", 250, 2025);
console.log(`myHonda1.color`);
console.log(myHonda1.model);
console.log(myHonda1.speed);
console.log(myHonda1.yom);
console.log(`${myHonda1.color} ${myHonda1.model} ${myHonda1.speed} ${myHonda1.yom}`);
// myHonda1.carColor();
// myHonda1.speedOfHonda();
// const myCar = new Car("white", 100);
// // console.log(myCar.color);
