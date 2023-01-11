//ES5, valores por defecto en parametros de una funcion
function newUser1(name, age, country){
    var name = name || 'Lesther';
    var age = age || 21;
    var country = country || 'Guatemala';
    console.log(name, age, country);
}
newUser1();
newUser1('Carlos', 22, 'Mexico');

//Lo mismo, pero con ES6
const newUser2 = (name = 'Lesther', age = 21, country = 'Guatemala') => console.log(name, age, country);

newUser2();
newUser2('Carlos', 22, 'Mexico');