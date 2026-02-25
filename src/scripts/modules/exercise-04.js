import { getDistinctUserNumbers } from "../utils/array-input-handler.js";

// Atividade 4
/*
Faça um programa que leia 3 valores informados pelo usuário 
(considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.
*/

export function showExercise04() {
  const qnt = 3;
  let numberList = getDistinctUserNumbers(qnt);

  let twoMaxNumbers = getListTwoMaxNumbers(numberList);
  let sumMaxNumbers = twoMaxNumbers.reduce((result, value) => result + value, 0);

  alert(`A soma dos dois maiores números, ${twoMaxNumbers[0]} e ${twoMaxNumbers[1]} é: ${sumMaxNumbers}`,);
}

function getListTwoMaxNumbers(array = []) {
  let descSortedList = [...array].sort((a, b) => b - a);
  return descSortedList.slice(0, 2);
}
