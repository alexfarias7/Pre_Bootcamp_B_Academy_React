import "./style.css";
/*
document.querySelector("#app").innerHTML = `
  <h1>OLa MUNDO</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`; */

//*type modules => cada script vai ser um módulo(cada script va ter o seu próprio escopo e o escopo dele vai ser o arquivo)
//* módulos são script por padrão

/* const app = document.querySelector("#app");
console.log(app);

const dataApp = document.querySelector('[data-js="app"]');
console.log(dataApp);
 */
const link = document.querySelector('[data-js="link"]');
const button = document.querySelector('[data-js="button"]');

link.addEventListener(
  "click",
  (event) => {
    event.preventDefault()
    alert('link')
  },
  false
);

button.addEventListener('click', (event)=>{
  console.log(button)
  event.stopPropagation()
  //*para de proparagar eventos pós o primeiro evento
  alert('button')
}, false)
//*evitar uso de this em arrow function
//* se necessário usar somente em classes

//import './main2'
