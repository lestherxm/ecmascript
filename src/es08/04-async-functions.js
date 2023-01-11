const fnAsync = (variable) => {
    return new Promise((resolve, reject) => {
        // concepto ternario
        (variable)
            ? setTimeout(() => {
                resolve('Async promise true resolve was executed after 3 seconds')
            }, 3000)
            : reject(new Error('Error!'));
    })
}

const myFn = async () => {
    const something1 = await fnAsync(true);
    console.log(something1);
    console.log('after something1');
    // const something2 = await fnAsync(false);
}

console.log('before everithing');
myFn();
console.log('after everithing');