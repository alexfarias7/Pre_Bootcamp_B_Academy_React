import "./style.css";

const app = document.querySelector('[data-js="app"]');

app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`;
const link = document.querySelector('[data-js="link"]');
link.addEventListener("click", (e) => {
  e.preventDefault();
  app.classList.toggle("hide");
  e.target.textContent = app.classList.contains("hide") ? "Exibir" : "Esconder";
});

//* não usar propriedades do html para estilizar
