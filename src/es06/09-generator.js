//el asterisco es importante para indicar que se trata de un @generator
function* iterate(arr){
    for(let item of arr){
        yield item;
    }
} 
const fruits = iterate(['banana', 'apple', 'peach', 'pineapple', 'other']);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);

let test = true;


