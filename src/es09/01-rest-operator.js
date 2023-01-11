const user =
{
    uname: 'lestherxm',
    age: 19,
    country: 'GT'
}

// spread operator, el operador punto punto punto (...)
const { uname, ...values } = user; //values es un objeto con las propiedades que no se especifican explicitamente
console.log(uname);
console.log(values);
// Expected output: 
//lestherxm 
//{ age: 21, country: 'GT' }

console.log('user:', user);

setTimeout(() => {
    const user2 = user;
    const user3 = { ...user }; //spread opeator allows u to make a copy of an object, and if u make changes it doesn't affect the original object
    user3.age = 33;
    user2.age = 22;
    console.log('user2:', user2);
    console.log('user3:', user3);
    console.log('user:', user);
}, 1000);

/* Expecter output
    user: { uname: 'lestherxm', age: 19, country: 'GT' }
    user2: { uname: 'lestherxm', age: 22, country: 'GT' }
    user3: { uname: 'lestherxm', age: 33, country: 'GT' }
    user: { uname: 'lestherxm', age: 22, country: 'GT' }
 */