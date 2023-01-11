function* myGenerator() {
    yield  Promise.resolve(1);
    yield  Promise.resolve(2);
    yield  Promise.resolve(3);
}

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

console.log('This is a final console.log');