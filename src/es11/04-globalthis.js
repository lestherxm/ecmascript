// console.log(window);  
// with nodejs, you're gonna get a ReferenceError: window isn't defined.

// Nevertheless, with a browser, windows is actually defined.

// That is exactly global.this is gonna to resolve

// in conclusion, we have global.this for different environments
// console.log(window); //browsers
console.log(global); //nodejs
// console.log(self);   //webworker
console.log(globalThis); 
//with base to the context it's gonna return the respective global object (window, global, self)
//Esto facilita la portabilidad del codigo

