// is basicaly a question, return a boolean
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers.includes(04)); //true
console.log(numbers.includes(11)); //false

let names = ["james", "alan", "gustavo"];
console.log(names.includes("alan")); //true
// Case Sensitive por default
console.log(names.includes("Alan")); //false
console.log(names.includes("ALAN")); //false


