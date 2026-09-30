export class Car {
  //   color: string; //white
  //   speed: number; //250

  //   constructor() {
  //     this.color = "red";
  //     this.speed = 50;
  //   }
  //   constructor(color: string, speed: number) {
  //     this.color = color;
  //     this.speed = speed;
  //   }
  constructor(
    public color: string,
    // protected speed: number, //with in same class + in the child class also but in class scope only.
  ) {} // constructor shorthand

  static start() {
    console.log("Car will start");
  }

  stop() {
    console.log("Car will stop");
  }

  carColor() {
    console.log(`color of car is ${this.color}`);
  }

  //   carSpeed() {
  //     console.log(`speed of car is ${this.speed}`);
  //   }
}

// const myCar = new Car("white", 150);
// const myCar1 = new Car("voilet", 200);
// myCar1.color;
// const myCar2 = new Car("green", 350);
// const myCar3 = new Car("orange", 450);
// // myCar.color = "Blue";
// // myCar.speed = 10
// Car.start();

// console.log(myCar);
// console.log(myCar1);
// console.log(myCar2);
// console.log(myCar3);
