import './style.css'

const app = document.querySelector('[data-js="app"]')
app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

//* quando for usar o inner html evitar utlisar valores dinâmicos, pois não é seguro.

console.dir(app)

const div = document.createElement('div')
div.innerHTML = `<p> conteúdo da div</p>`
div.className='div-criada'
app.appendChild(div)//* add do final
app.removeChild(div)
//app.prepend(div)//* add do começo


const img = `<img src="x" />` 
//app.insertAdjacentHTML('beforeend', img);

div.setAttribute('data-js', 'divCriada')
console.log(div.getAttribute('data-js'))
console.log(div.dataset.js)
app.insertAdjacentHTML('beforeend', div.outerHTML)
const divCriada = document.querySelector('[data-js="div"]')
//app.replaceChild(document.createElement('button'),div)


console.log('--------------------------------------------------')

const inputName = document.querySelector('[data-js="name"]')
inputName.addEventListener('input',(e)=>{
  console.log('e.target.value', e.target.value)
})

const textarea = document.querySelector('[data-js="textarea"]')
textarea.addEventListener('input',(e)=>{
  console.log('e.target.value', e.target.value)
})

const checkboxes = document.querySelectorAll('[data-js="checkbox"]')

checkboxes.forEach((checkbox)=>{
checkbox.addEventListener('click', (e)=>{
  console.log(e.target.checked)
})
})


















