//* Arrays destructuring - before and after
let players = ['Carlos', 'Miguel', 'Angel', 'Jorge', 'Luis', 'Isac'];

// Forma convencional de obtener los valores de un array
let first1 = players[0];
let second1 = players[1];
let third1 = players[2];
console.log(first1, second1, third1);

// con Desestructuracion de arrays
let [first2, second2, third2] = players;
console.log(first2, second2, third2);

//* Object destructuring
let userData = 
{
    name: 'Lesther',
    age: 21,
    favorite: {
        color: 'Black',
        band: '$uicideBoy$',
        place: 'California'
    },
    gender: 'Male'
}

// Forma convencional de obtener las propiedades de un objeto
let userName1 = userData.name;
let userAge1 = userData.age;
console.log(userName1, userAge1);

// Con desestructuracion de objetos
let {name, age} = userData;
console.log(name, age);

// Podemos usar nuevos nombres de variables especificos para la desestructuracion
let {name: userName2, age: userAge2} = userData;
console.log(userName2, userAge2);

//* spread operator

let person = {name: 'lesther', age: 28};
let country = 'GT';

// El spread operator/ operador de propagacion
// Realiza una desestructuracion implicita, en este caso
// Hace que a data, se le asignen las propiedades del objeto person, y no el objeto como tal
let data1 = {person, country};
let data2 = {...person, country};
console.log(data1); // { person: { name: 'lesther', age: 28 }, country: 'GT' }
console.log(data2); // { name: 'lesther', age: 28, country: 'GT' }

//* rest

function sum(num, ...values){
    console.log(values.length);
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

console.log(sum(1,2,3,4,5)); 
/*
    4
    [ 2, 3, 4, 5 ]
    3
    3
*/

