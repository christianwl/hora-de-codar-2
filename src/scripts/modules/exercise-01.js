// Atividade 1
/*
Escreva um programa em que o usuário informe dois números utilizando o "prompt". 
Então escreva em tela o maior deles.
*/

import { receberValorNumerico } from "../utils/prompt-manager";

export function showMaxNumber(){
    alert(`O maior número é ${getMaxNumber()}.`);
}

function getMaxNumber(qnt = 2) {
  let numberList = getDistinctUserNumbers(qnt);
  let result = numberList[0];

  for (let i = 0; i < numberList.length; i++) {
    result = result > numberList[i] ? result : numberList[i];
  }

  return result;
}

function getDistinctUserNumbers(qnt) {
  let numberList = [];
  for (let i = 0; i < qnt; i++) {
    let userNumber = receberValorNumerico(
      `Digite o º${i + 1} número: \n\nOBS: Digite um número diferente dos anteriores!!`,
    );

    if (i > 0 && numberList.includes(userNumber)) {
      displayInvalidValue();
      i--;
    } else {
      numberList.push(userNumber);
    }
  }

  return numberList;
}

function VerificarMaiorNumero(arrayNumeros = []) {
  var maior = arrayNumeros[0];
  for (var i = 0; i < arrayNumeros.length; i++) {
    maior = maior > arrayNumeros[i] ? maior : arrayNumeros[i];
  }

  return maior;
}

function displayInvalidValue() {
  alert(
    "O valor digitado não corresponde com o que foi solicitado! Tente novamente...",
  );
}
