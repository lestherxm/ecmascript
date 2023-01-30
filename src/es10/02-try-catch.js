try {
    hello(); // ReferenceError: hello isn't defined
} catch (error) {
    console.log(error);
}

try {
    anotherFunction();
} catch {
    console.log('Ha ocurrido un error al ejecutar @anotherFunction');
}

// Conclusion: lo ideal es que manejemos los errores, no "personalizarlos".

