// Atividade 2
/*
Faça um programa que leia um valor informado pelo usuário e diga 
se o valor informado é positivo, negativo ou zero.
*/

import { receberValorNumerico } from "../utils/prompt-manager";

export function checkNumberSign() {
  let userNumber = receberValorNumerico(
    "Verificador de números Positivos, Negativos ou Zero \n\nDigite um número:",
  );

   const signTexts = {
    "1": "Positivo",
    "-1": "Negativo",
    "0": "Zero",
    "-0": "Zero"
  };

  const sign = Math.sign(userNumber);
  const result = signTexts[sign] || "Invalido";

  alert(`O número que você digitou é ${result}`);
}