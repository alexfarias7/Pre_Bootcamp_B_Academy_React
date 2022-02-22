import "./style.css";
import { del, get, post } from "./http";

const url = "http://localhost:3333/cars";
const form = document.querySelector('[data-js="cars-form"]');
const table = document.querySelector('[data-js="table"]');

const getForElement = (e) => (elementName) => {
  return e.target.elements[elementName];
};

const elementTypes = {
  image: createImage,
  text: createText,
  color: createColor,
};

function createImage({ src, alt }) {
  const td = document.createElement("td");
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.style.width = "10vh";
  td.appendChild(img);
  return td;
}

function createText(value) {
  const td = document.createElement("td");
   td.textContent = value;
  return td;
}
function createColor(value) {
  const td = document.createElement("td");
  const div = document.createElement("div");
  div.style.width = "10vh";
  div.style.height = "10vh";
  div.style.backgroundColor = value;
  td.appendChild(div);
  return td;
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const getElement = getForElement(event)
  const data = {
    image: getElement('image').value,
    brandModel: getElement('brand-model').value,
    year: getElement('year').value,
    plate: getElement('plate').value,
    color: getElement('color').value
  }

  const result = await post(url, data)

  if (result.error) {
    console.log('deu erro na hora de cadastrar', result.message)
    return
  }

  const noContent = document.querySelector('[data-js="no-content"]')
  if (noContent)
    table.removeChild(noContent)

  createTableRow(data)

  event.target.reset();
  image.focus()
})

function createTableRow(data) {
  const elements = [
    { type: "image", value: { src: data.image, alt: data.brandModel } },
    { type: "text", value: data.brandModel },
    { type: "text", value: data.year },
    { type: "text", value: data.plate },
    { type: "color", value: data.color },
  ];

  const tr = document.createElement("tr");
  tr.dataset.plate = data.plate
  elements.forEach((element) => {
    const td = elementTypes[element.type](element.value);
    tr.appendChild(td);
  });
  const button = document.createElement('button')
  button.textContent ='excluir'
  button.dataset.plate = data.plate;
  button.addEventListener('click', handleDelete)

  tr.appendChild(button)
  table.appendChild(tr);


}

 async function handleDelete(event) {
  const button = event.target
  const plate = button.dataset.plate

  const result = await del( url , { plate})

  if (result.error){
    console.log('error ao deletar', result.message)
  return
  }
  const tr = document.querySelector(`tr[data-plate="${plate}"]`)
  table.removeChild(tr)
  button.removeEventListener('click', handleDelete)


  const allTrs = document.querySelector('tr')
  if(!allTrs){
    createNoCarRow()
  }
}



function createNoCarRow() {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const ths = document.querySelectorAll("th");

  td.setAttribute("colspan", ths.length);
  td.textContent = "nenhum carro encontrado";

  tr.dataset.js = 'no-content'
  tr.appendChild(td);
  table.appendChild(tr);
}

async function main() {

  const result = await get(url)

  if (result.error) {
    console.log('Erro ao buscar carros', result.message)
    return
  }

  if (result.length === 0) {
    createNoCarRow()
    return
  }
  //* passou da validação
  result.forEach(createTableRow);
}

main();
