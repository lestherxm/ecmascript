class PrivateUser {
    #PirvateClassVariable = 'A @Public Class Variable';
    #PrivateFn (){
        return 'A @Public Class Function';
    }
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    #speak(){
        return `Hello`;
    }
    #greeting(){
        return `${this.speak()} There! ${this.name}`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(age){
        this.age = age;
    }
}
const lestherxm = new PublicUser(`Lesther`, 21); // creating a user instance
//this is possible
console.log(lestherxm.uAge); // getting user age
lestherxm.uAge = 22; // setting a new user age
console.log(lestherxm.uAge); //getting user age again

console.log(lestherxm.classVariable);
console.log(lestherxm.myPublicFn());



