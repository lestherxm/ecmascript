const aBigNumber = 82465824658246582465n; //this
const anotherBigNumber = BigInt(82465824658246582465); //is the same thing as this

console.log(aBigNumber);
console.log(anotherBigNumber);

// Conclusion: la diferencia no se nota, pero al hacer operaciones aritmeticas esto tiene sentido.
// Recomendacion: usar directamente la @n al final del numero en lugar de convertir un numero con el constructor BigInt