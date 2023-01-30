const promise1 = new Promise((resolve, reject) => { reject('rejecet promise 1') })
const promise2 = new Promise((resolve, reject) => { resolve('resolve promise 2') })
const promise3 = new Promise((resolve, reject) => { resolve('resolve promise 3') })
const myPromises = [promise1, promise2, promise3];

Promise.allSettled(myPromises)
    .then(results => console.log(results));

// we can also access to the satus, reason or value only, like this:
Promise.allSettled(myPromises).
    then((results) => results.forEach((results) => console.log(results.status)));
