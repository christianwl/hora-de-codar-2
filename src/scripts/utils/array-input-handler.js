import { receberValorNumerico } from "./prompt-manager.js";

/**
 * Collects a list of distinct numbers from the user via prompt.
 * @param {number} qnt - The total amount of unique numbers to be collected. **Default: 2**
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
      alert(
        "O valor digitado não corresponde com o que foi solicitado! Tente novamente...",
      );
      continue;
    }

    numberList.push(userNumber);
  } while (numberList.length < qnt);

  return numberList;
}

/**
 * Collects a list of numbers from the user via prompt.
 * @param {number} qnt - The total amount of numbers to be collected. **Default: 2**
 * @returns {number[]} An array containing the numbers provided by the user.
 */
export function getUserNumbers(qnt = 2,) {
  let list = [];
  for (let i = 0; i < qnt; i++) {
    let userNumber = receberValorNumerico(
      `Digite o º${i + 1} número para calcular: `,
    );
    list.push(userNumber);
  }
  return list;
}
