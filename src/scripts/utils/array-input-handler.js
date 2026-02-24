import { receberValorNumerico } from "./prompt-manager";

/**
 * Collects a list of distinct numbers from the user via prompt.
 * * @param {number} qnt - The total amount of unique numbers to be collected. 
 * 
 * Default qnt value = 2
 * @returns {number[]} An array containing the distinct numbers provided by the user.
 */
export function getDistinctUserNumbers(qnt = 2) {
  let numberList = [];

  do {
    let index = numberList.length + 1;
    let userNumber = receberValorNumerico(
      `Digite o º${index} número: \n\nOBS: Digite um número diferente dos anteriores!!`,
    );

    if (numberList.includes(userNumber)) {
      alert("O valor digitado não corresponde com o que foi solicitado! Tente novamente...");
      continue;
    }

    numberList.push(userNumber);
  } while (numberList.length < qnt);

  return numberList;
}