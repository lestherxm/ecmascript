//Un caracter de 4 digitos, seguido de un guion, un caracter de 2 digitos, un guion y otro caracter de 2 digitos
const regex = /(\d{4}-(\d{2})-(\d{2}))/;  // yyyy-MM-dd
const matchers = regex.exec('2023-01-01'); 
console.table(matchers);
