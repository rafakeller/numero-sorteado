"use strict";

import { dataHora } from "../componentes/data-hora.js";


export const gerarNumeroAleatorio = (quantidade, minimo, maximo) => {
  const num = quantidade.value;
  const min = Math.ceil(minimo.value);
  const max = Math.floor(maximo.value);
  const lista = Array();

  for (let i = 0; i < num; i++) {
    const numeroAleatorio = parseInt(
      Math.floor(Math.random() * (max - min + 1)) + min
    );

    lista.push(numeroAleatorio);
  }
  
  
  console.log(lista)
  dataHora(lista);
 

  lista.length = 0;
};


