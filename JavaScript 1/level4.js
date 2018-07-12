// Level 4
console.log("Level 4");

var cars = ["Mazda", 12, "Toyota"];
cars.push(true);
cars[5] = cars[0] + cars[3];
cars[12] = cars[0] + cars[6];
cars[14] = "";

console.log(cars);
cars.pop();
console.log(cars);