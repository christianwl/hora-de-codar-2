// Atividade 1
/*
Escreva um programa em que o usuário informe dois números utilizando o "prompt". 
Então escreva em tela o maior deles.
*/

import { receberValorNumerico } from "../utils/prompt-manager.js";

export function showMaxNumber() {
  alert(`O maior número é ${getMaxNumber()}.`);
}

function getMaxNumber(qnt = 2) {
  let numberList = getDistinctUserNumbers(qnt);
  const maxNumber = Math.max(...numberList);

  return maxNumber;
}

function getDistinctUserNumbers(qnt) {
  let numberList = [];

  do {
    let index = numberList.length + 1;
    let userNumber = receberValorNumerico(
      `Digite o º${index} número: \n\nOBS: Digite um número diferente dos anteriores!!`,
    );

    if (numberList.includes(userNumber)) {
      displayInvalidValue();
      continue;
    }

    numberList.push(userNumber);
  } while (numberList.length < qnt);

  return numberList;
}

function displayInvalidValue() {
  alert(
    "O valor digitado não corresponde com o que foi solicitado! Tente novamente...",
  );
}
