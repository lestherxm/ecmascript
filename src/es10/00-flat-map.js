//? flat
// RETURN A new array with the sub-array elements concatenated into it.
const arr = [1,2,3, [1,2,3, [1,2,3]]];
console.log('--- flat ---');
console.log(arr.flat(2)); // la @profundidad hasta la cual se va a concatenar.

// Expected output: [1, 2, 3, 1, 2, 3, 1, 2, 3]


//? flatMap
const arr2 = [2,3,4,5];

console.log('--- flatMap ---');
console.log(arr2.flatMap(v => [v,v*2])); //aplicar cierta logica a cada uno de los elementos

// Expected output: [2, 4, 3, 6, 4, 8, 5, 10]
