// Atividade 1
/*
Escreva um programa em que o usuário informe dois números utilizando o "prompt". 
Então escreva em tela o maior deles.
*/

import { getDistinctUserNumbers } from "../utils/array-input-handler.js";

export function showExercise01() {
  let numberList = getDistinctUserNumbers();
  const maxNumber = Math.max(...numberList);

  alert(`O maior número é ${maxNumber}.`);
}
