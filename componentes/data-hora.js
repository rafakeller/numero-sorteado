"use strict";

import { mostrarSorteado } from "../functions/mostrarSorteado.js";


export const dataHora = (lista) => {
  const time = new Date();
  

  var dia = time.getDate();
  var mes = time.getMonth();
  var ano = time.getFullYear();
  var hora = time.getHours();
  var minuto = time.getMinutes();
  var segundos = time.getSeconds();

  var dia = dia + "/" + (mes + 1) + "/" + ano;
  var horario = hora + ':' + minuto + ':' + segundos

  mostrarSorteado(lista, dia, horario)

  
};
