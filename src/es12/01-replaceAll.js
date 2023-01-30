const str = 'I am *gonna* achieve my goals';

const replaceStr = str.replace('*gonna*', '*going to*');

console.log(replaceStr);  // I am *going to* achieve my goals

const mensaje = "JAvaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

mensaje.replace("JavaScript", "Python")
// 'Python es maravilloso, con JavaScript puedo crear el futuro de la web.'

mensaje.replaceAll("JavaScript", "Python")
// 'Python es maravilloso, con Python puedo crear el futuro de la web.'

const str2 = mensaje.replaceAll(/a/g, "*") // la g significa casesensitive.

console.log(str2);