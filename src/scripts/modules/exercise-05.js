// Atividade 5
/*
Faça um programa que leia 6 valores informados pelo usuário, calcule, 
exiba os números informados e escreva a média aritmética desses valores lidos.
*/

import { receberValorNumerico } from "../utils/prompt-manager.js";

export function showExercise05() {
  let numberList = getUserNumbers(6);
  let mean = calcListMean(numberList);

  alert(`Os valores informados são ${numberList.join(", ")} e a média é: ${mean}`)
}

function getUserNumbers(qnt = 2) {
  let list = [];
  for (let i = 0; i < qnt; i++) {
    let userNumber = receberValorNumerico(
      `Digite o º${i + 1} número para calcular a média:`,
    );
    list.push(userNumber);
  }
  return list;
}

function calcListMean(list = []) {
  let sumList = list.reduce((result, value) => result + value, 0);
  return sumList / list.length;
}
