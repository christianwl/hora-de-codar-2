// Atividade 11
/*
Uma micro calculadora

Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem
executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação).
O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos.
// */

import { getUserNumbers } from "../utils/array-input-handler.js";
import { receberNumeroEspecifico } from "../utils/prompt-manager.js";

export function showExercise11() {
  alert(`O resultado da conta é: ${calculator()}`);
}

function calculator(qntNumbers = 2) {
  let numbersList = getUserNumbers(qntNumbers);

  let indexList = [];
  let choiceText = "Digite a opção de calculo que deseja";

  const options = [
    { name: "Adição", operation: (a, b) => a + b },
    { name: "Subtração", operation: (a, b) => a - b },
    { name: "Divisão", operation: (a, b) => a / b },
    { name: "Multiplicação", operation: (a, b) => a * b },
  ];

  options.forEach((opt, i) => {
    choiceText += `\n\n[ ${i + 1} ] ${opt.name}`;
    indexList.push(i + 1);
  });

  let userChoice = receberNumeroEspecifico(choiceText, indexList);

  let result = numbersList.reduce((result, value) =>
    options[userChoice - 1].operation(result, value),
  );
  return result;
}
