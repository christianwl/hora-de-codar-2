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