
//* An epmty class
//class User{};
// Instance of a class example
// const lestherxm = new User();

//* A class with a single method
// class User{
//     greeting(){
//         return 'Hello from @greeting method';
//     }
// }
// const gndx = new User();
// using a method
// console.log(gndx.greeting());

//* A class using constructor
// class User{
//     This code is executed when you create a new object by using this class (User, ofc)
//     constructor(){
//         console.log(`creating new user with name`);
//     }
//     greeting(){
//         return 'Hello from @greeting method';
//     }
// }
//const miUser = new User();

//* A Class with a single method who use another method of the same class
// class User {
//     properties
//     constructor(name){
//         this.name = name;
//     }
//     methods
//     speak(){
//         return `Hello`;
//     }
//     greeting(){
//         return `${this.speak()} There! ${this.name}`;
//     }
// }
// const lestherxm = new User(`Lesther`);
// console.log(lestherxm.greeting());

// A class with @setters and @getters
class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return `Hello`;
    }
    greeting(){
        return `${this.speak()} There! ${this.name}`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(age){
        this.age = age;
    }
}
const lestherxm = new User(`Lesther`, 21); // creating a user instance
console.log(lestherxm.uAge); // getting user age
lestherxm.uAge = 22; // setting a new user age
console.log(lestherxm.uAge); //getting user age again
console.log(lestherxm.greeting()); // greeting




