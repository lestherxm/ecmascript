
const button = document.querySelector('#btn');

button.addEventListener('click', async ()=>{
    const loadedModule = await import('./module.js');
    console.log(loadedModule);
    console.log(loadedModule.hello());
})