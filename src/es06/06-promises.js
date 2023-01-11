const myFunction = (myVar) => {
    return new Promise((resolve, reject)=>{
        if(myVar){
            resolve('If Hola Mundo');
        }else{
            reject('Else Hola Mundo');
        }
    })
}

myFunction(true)
    .then(response => console.log(response))
    .catch(err => console.log(err));

myFunction(false)
    .then(response => console.log(response))
    .catch(err => console.log(err));