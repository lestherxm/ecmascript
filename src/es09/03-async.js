async function* myGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}
/*
const numbers = myGenerator();
numbers.next()
    .then((response) => {
        console.log(response.value);
    });

numbers.next()
    .then((response) => {
        console.log(response.value);
    });

numbers.next()
    .then((response) => {
        console.log(response.value);
    });

console.log('This is a final console.log, but it is executed at the begginig because an async function let continue you execute other code while process other code.');
*/

// Now you can also use async in @for statements, like so
async function displayNames(names){
    for await (let name of names){
        console.log(name);
    }
}
// In this way, JavaScript let u execute other code while is processing other code at the same time
// If u wanna check the behavvior remove the @async/await statements and you will see how JS resolve the code

// const names = displayNames(['Carlos', 'Mateo', 'Jorge', 'Lesther']);
// console.log('I am a final message, but I appear at the begginng because of an async function');




