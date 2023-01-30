class FancyLog {
    // public variable
    decorator = '🎊';
    // private variable
    #message;
    // public method
    showMsg(message){
        this.#setMessage =  message; // setting
        console.log(this.#getMessage); // getting
    }
    // private methods (setters and getters)
    set #setMessage(message){
        this.#message = message;
    }
    get #getMessage(){
        return `${this.decorator} ${this.#message} ${this.decorator}`; 
    }
}

const fancyLog = new FancyLog();
// This is not possible because @message is a private variable
// console.log(fancyLog.#message); 

fancyLog.showMsg('Hola');

// if a try use set and get methods, that is also impossible because both are privates, too.
//fancyLog.#setMessage =  message; //setting
//console.log(fancyLog.#getMessage); //getting

console.log(fancyLog.decorator); //However, this is possible since it is a public variable.
