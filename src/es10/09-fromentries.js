// fromentries = (multi o mono dimensional) array -> object

const entries = [['name', 'lesther'], ['age', 21]];
console.log(entries); // [ [ 'name', 'lesther' ], [ 'age', 21 ] ]
console.log(Object.fromEntries(entries)); // { name: 'lesther', age: 21 }

