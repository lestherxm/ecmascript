// enhaced object literals

//* BEFORE
function newUser1(user, age, country){
    return {
        user: user,
        age: age, 
        country: country
    }
}

//* NOW
// Esto es util cuando la variable que vamos a retornar se llama exactamente igual
// a la que estamos recibiendo en los parametros de la funcion.
// Caso contrario, podemos seguir usando la notacion "normal"
function newUser2({identifier, user, age, country}){
    return {
        id: identifier,
        user,
        age, 
        country
    }
}

// Un plus es trabajar con objetos, de esta forma no importa el orden en que se envien los datos
// se van a retornar en un orden en especifico
console.log(newUser2({identifier:1,user:'lestherxm',age:21,country:'GT'}));
console.log(newUser2({country:'MX', age:22,user:'carlosxm', identifier:2}));