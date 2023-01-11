const ages1 = [85, 49, 64, 23, 47];
const ages2 = [85, 49, 64, 23, 47, , , ,];
const ages3 = [85, 49, 64, 23, 47, , , , 85];

console.log(ages1); // [ 85, 49, 64, 23, 47 ]
console.log(ages1.length); // 5
console.log(ages2); // [ 85, 49, 64, 23, 47, <3 empty items> ]
console.log(ages2.length); // 8
console.log(ages3); // [ 85, 49, 64, 23, 47, <3 empty items>, 85 ]
console.log(ages3.length); // 9


const nombres = [
    "Andres",
    "Valeria",
    "Jhesly", ,//<-- Trailing comma
]

console.log(nombres);
