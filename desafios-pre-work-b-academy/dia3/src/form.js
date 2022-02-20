const input = document.querySelector('[data-js="username"]')
const dontChange =['da','das','de','do','dos']

input.addEventListener('input', (e)=>{
  const value =(e.target.value).split(' ')
  console.log(value)
 e.target.value = value.map(word=>{
   return dontChange.includes(word.toLowerCase())
   ?word.toLowerCase()
   : fixCase(word)}).join(' ')
})

function fixCase(word) {
  //if(word.length ===0) return ''
  return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
}

function $ (selector){
  return document.querySelector(selector)
}

const form = $('[data-js="form"]')
const select = document.createElement('select')
select.setAttribute('multiple', '')
form.appendChild(select)
console.log(select)
select.setAttribute('multiple', '')
form.appendChild(select)
console.log(select)
select.setAttribute('multiple', '')
form.appendChild(select)
console.log(select)
select.setAttribute('multiple', '')
form.appendChild(select)
console.log(select)
select.setAttribute('multiple', '')
form.appendChild(select)
console.log(select)
select.setAttribute('multiple', '')
form.appendChild(select)
console.log(select)
select.setAttribute('multiple', '')
form.appendChild(select)
console.log(select)
select.setAttribute('multiple', '')
form.appendChild(select)
console.log(select)
select.setAttribute('multiple', '')
form.appendChild(select)
console.log(select)
select.setAttribute('multiple', '')
form.appendChild(select)
console.log(select)
select.setAttribute('multiple', '')
form.appendChild(select)
console.log(select)
select.setAttribute('multiple', '')
form.appendChild(select)
console.log(select)
select.setAttribute('multiple', '')
form.appendChild(select)
console.log(select)

const colors = [
  {
    name: 'black',
    value: "#000000",
  },
  {
    name: 'grey',
    value: "#808080",
  },
  {
    name: 'blue',
    value: "#0000FF",
  },
  {
    name: 'green',
    value: "#008000",
  },
  {
    name: 'red',
    value: "#FF0000",
  },
  {
    name: 'yellow',
    value: "#FFFF00",
  },
];

const colorContainer = document.createElement('div')
colorContainer.style.display='flex'

colors.forEach((color) => {
  const option = createOption(color)
  select.appendChild(option);
});

function createOption(color){
  const option = document.createElement("option");
  option.value = color.value;
  option.textContent = color.name;
  return option
}

select.addEventListener('change', (e)=>{
  colorContainer.innerHTML = ''

Array.from(e.target.selectedOptions).forEach(option=>{
  const div = createDivColor(option.value)
  colorContainer.appendChild(div)
})
})

function createDivColor (value){
  const div = document.createElement('div')
  div.style.height='10vh'
  div.style.width='10vw'
  div.style.backgroundColor= value
  return div

}
select.setAttribute('multiple', '')

form.appendChild(select)
document.body.appendChild(colorContainer)
console.log(select)
