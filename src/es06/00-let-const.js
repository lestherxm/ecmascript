//Tanto var y let pueden reasignar valores
var lasName = 'Lesther';
lasName = 'Carlos';
console.log(lasName);

let fruit = 'Apple';
fruit = 'Pineapple';
console.log(fruit);

// Const no permite reasignacion de valores
const user = 'lestherxm';
user = 'carlosrxm2';
console.log(user);

// Alcance de las variables
const fnFruits = () => {
    if(true){
        var fruit1 = 'Apple'; // function/global scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fnFruits();



