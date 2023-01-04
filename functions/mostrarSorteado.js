"use strict";

export const mostrarSorteado = (numero, data, hora) => {
  const sorteado = document.getElementById("resultado-numero");

  sorteado.innerHTML = `<p>O número sorteado foi: </p>
  <div class="numero-sorteado" id="numeroSorteado">${numero}</div>

  <div class="data-hora" id="dataHora">
    <p class="paragrafo-time">Data e Hora do sorteio:</p>
      <div ><p class="data-hora-texto" >${data} ás ${hora}</p></div></div>
  `;
};
