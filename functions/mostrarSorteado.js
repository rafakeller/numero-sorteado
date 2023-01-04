"use strict"
const sorteado = document.getElementById("resultado-numero");

export const mostrarSorteado = (numero) => {
  sorteado.innerHTML = `<p>O número sorteado foi: </p>
  <div class="numero-sorteado" id="numeroSorteado">${numero}</div>
  <div class="data-hora content">
    <p>Data e Hora do sorteio:</p>
    <div><p class="data-hora-texto">12/12/2022 ás 20:12:00</p></div>
  </div>`;
};
