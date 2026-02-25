// Atividade 8
/*
Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses
números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma
mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"
*/

import { calcListMean } from "../utils/math-utils.js";

export function showExercise08() {
  let numberList = collectNumbersWithinLimit(4);
  let mean = calcListMean(numberList);
  alert(getPassStatus(mean));
}

function collectNumbersWithinLimit(
  qnt = 2,
  { minLimit = 1, maxLimit = 9 } = {},
) {
  let value = 0;
  let numberList = [];
  const textError = `Valor incorreto, ele deve ser de ${minLimit} a ${maxLimit}! Tente novamente...`;
  do {
    value = receberValorPositivo(
      `Digite o º${numberList.length + 1} número para calcular a média: \n\nOBS: O número deve ser de ${minLimit} a ${maxLimit}`,
      {
        textoErroOpcional: textError,
      },
    );

    if (value > maxLimit) {
      alert(textError);
      continue;
    }
    numberList.push(value);
  } while (numberList.length < qnt);
  return numberList;
}

function getPassStatus(mean, minValue = 5) {
  return mean > minValue ? "Você passou no teste" : "Tente novamente";
}

CalcularMediaDez(4);

function CalcularMediaDez(quantidade) {
  var media = 0;
  var indice = 0;
  var numeros = [];

  do {
    var numeroLocal = prompt(
      `Digite o º${indice + 1} número para calcular a média: \n\nOBS: O número deve ser maior que 0 e menor que 10!`,
    );

    if (isNaN(numeroLocal)) {
      ApresentarValorIncorreto();
    } else if (numeroLocal >= 0 && numeroLocal <= 10) {
      numeros.push(numeroLocal);
      indice++;
    } else {
      var zeroOuDez = numeroLocal < 0 ? "menor que 0" : "maior que 10";
      alert(
        `O número ${numeroLocal} é ${zeroOuDez}! Por favor, digite outro número.`,
      );
    }
  } while (indice < quantidade);

  media = CalcularMedia(numeros);

  if (media > 5) {
    ApresentarNaTela("Você passou no teste!");
  } else {
    ApresentarNaTela("Tente novamente...");
  }
}
