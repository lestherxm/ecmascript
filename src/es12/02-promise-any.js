const promise1 = Promise.reject(() =>{
    throw new Error('Ther is an Error');
});
const promise2 = new Promise((resolve) => setTimeout(resolve, 5000, 'slow'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 1000, 'quick'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value))
.catch((error) => {
    console.log(error);
})

// Expected output: "quick"