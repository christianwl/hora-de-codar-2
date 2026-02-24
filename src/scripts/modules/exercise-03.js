// Atividade 3
/*
Faça um programa para ler 3 valores 
(considere que não serão informados valores iguais) e escrever o maior deles.
*/

import { getDistinctUserNumbers } from "../utils/array-input-handler.js";

export function showExercise03() {
  let numberList = getDistinctUserNumbers(3);
  const maxNumber = Math.max(...numberList);

  alert(`O maior número dos 3 informados foi ${maxNumber}.`);
}
