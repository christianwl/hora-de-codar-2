// Atividade 10
/*
Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma
pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:
*/

import {
  receberNumeroEspecifico,
  receberValorPositivo,
} from "../utils/prompt-manager.js";

export function showExercise10() {
  alert(`Seu peso ideal é: ${calcIMC().toFixed(2)}`);
}

function calcIMC() {
  let userData = collectUserData();

  switch (userData.idSex) {
    case 1:
      return 72.7 * userData.height - 58;
    case 2:
      return 62.1 * userData.height - 44.7;
    default:
      return 0;
  }
}

function collectUserData() {
  let idSex = receberNumeroEspecifico(
    "Digite o número que corresponda ao seu sexo: \n\n[ 1 ] Feminino\n[ 2 ] Masculino",
    [1, 2],
  );

  let userHeight = receberValorPositivo("Digite a sua altura: ", {
    textoErroOpcional: "Valor de altura imcompativel, tente novamente...",
  });

  return { idSex, height: userHeight };
}