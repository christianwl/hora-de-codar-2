// Atividade 9
/*
Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela
poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).
*/

import { receberValorNumerico } from "../utils/prompt-manager.js";

export function showExercise09() {
  alert(getVotingStatus());
}

function getVotingStatus() {
  let text = "";
  let age = calcUserAge();

  if (age <= 0) {
    return "Você provavelmente ainda não existe!";
  }

  text = `Você tem ${age} ano${age > 1 ? "s" : ""} de idade e `;

  if (age == 16 || age == 17 || age > 70) {
    text += "pode votar esse ano se quiser!";
  } else if (age >= 18 && age <= 70) {
    text += "pode votar esse ano!";
  } else {
    text += "não pode votar esse ano!";
  }

  return text;
}

function calcUserAge() {
  const currentYear = new Date().getFullYear();
  let yearBirth = receberValorNumerico("Digite o ano do seu nascimento: ");
  return currentYear - yearBirth;
}
