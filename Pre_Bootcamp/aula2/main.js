import "./style.css";

function setState({ title, description }) {
  render({ title, description });
}

function render({ title, description }) {
  document.querySelector("#app").innerHTML = `
  <h1> Olá ${title}!</h1>
  ${description ? `<p>${description}</p>` : ""}
  `;
}

const link = document.querySelector('[data-js="link"]');

link.addEventListener("click", (e) => {
  e.preventDefault();
  setState({ title: "Vite" });
});
const obj = {
  title: "Alex",
  description: "Descrição na minha App",
};
setState(obj);

//* Higher Order Function
//* É uma função extraordinária
//* é uma função que retorna ou recebe uma função

const sum = (a) => (b) => a + b;

const plusOne = sum(1);
const plusTen = sum(10);
console.log(plusOne(20));
//*Closures => são funções que quardam informações que não vão ser alteradas;

const arr = [1, 2, 3, 4, 5];

/* const arr2 =[]
for (let i=0; i<arr.length; i++){
  arr2.push([arr[i]]);
} */

function meuFor(array, fn) {
  const tempArray = [];
  for (let i = 0; i < array.length; i++) {
    tempArray.push(fn(array[i]));
  }
  return tempArray;
}

console.log(meuFor(arr, (itemIterado) => [itemIterado]));
console.log(meuFor(arr, (itemIterado)=>{
return { id: itemIterado}
}))



function filter(array, fn) {
  const tempArray = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])){
      tempArray.push(array[i])
    }
  }
  return tempArray;
}

console.log('filter: ', filter(arr, item=> item>2))

const person ={
  type : "Person",
  value:{
    name:'alex',
    age: 25
  }
}


function mapPerson(person, fn){
  return{
    type:'Person',
    value: fn(person.value)
  }
}
console.log(
  mapPerson(person,(value)=>{
    return `nome:${value.name}, idade: ${value.age}`
  })
)

console.log('----------------------------------')


const person2 = {
  name: 'alex',
  age:25,
  gender:'m',
  array: [1,2,3]
}

const newPerson = {
...person2,
//age:50
array: [...person2.array, 4],
}
console.log(Object.entries(person2).map(([key, value])=>{
  return `${key}:${value}`
}))
console.log(person2===newPerson)
console.log(person2)
console.log(newPerson)
//* Cada onjeto criado é uma referencoa nva da memória

//* metdodos que modificam o array original,devese eviatar usar eles
//* push,pop,shift,unshift,splice,sort ,reverse

//* médotos que não modificam o array original
//* concat filter=>push
//*filter,slice,map, reduce

const novosarrays = [1,2,3];
[...novosarrays].reverse()










