// what are we gonna do when whe have a null

const numberOne = 1;
const numberNull = null;

const valueToSet = 5;

const validate1 = numberOne ?? valueToSet;
// We are asking if numberOne has a null value, if so, then, we are going to set 5 to that variable.

const validate2 = numberNull ?? valueToSet;

console.log(validate1); // that's why validate1 = 1;
console.log(validate2); // and validate2 = 5, because numberNull literally has a null value