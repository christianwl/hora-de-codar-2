// Atividade 6
/*
Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o
último e o maior de todos eles (considere que todos os números informados serão diferentes)
*/

import { getDistinctUserNumbers } from "../utils/array-input-handler.js";

export function showExercise06() {
  const qnt = 4;
  let numberList = getDistinctUserNumbers(qnt);
  const maxNumber = Math.max(...numberList);

  alert(
    `O primeiro número é ${numberList[0]}, o ultimo número é ${numberList[qnt - 1]}, e o maior número é ${maxNumber}.`,
  );
}
