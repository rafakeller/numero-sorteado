"use strict";

import { gerarNumeroAleatorio } from "./functions/geraNumAleatorio.js";

const quantidade = document.getElementById("input-quantidade");
const menorNumero = document.getElementById("menor-numero");
const maiorNumero = document.getElementById("maior-numero");
const form = document.getElementById("form");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  gerarNumeroAleatorio(quantidade, menorNumero, maiorNumero);
});
