const users = 
{
    lestherxm:{
        country: 'GT'
    },
    carlosxm:{
        country: 'SL'
    }
}
console.log(users.lestherxm.country); // GT
console.log(users.lestherxm.age); // undefined (can brake our program)

//console.log(users.undefinedUser.country); // cannot read properties of undefinedUser

console.log(users?.undefinedUser?.country); // undefined, it maeans  prevent an error and the app doesn't stop




