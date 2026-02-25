/**
 * Calculates the arithmetic mean ("Média aritmética") of a list of numbers.
 * @param {number[]} list - An array of numbers to be averaged.
 * @returns {number} The calculated mean of the numbers in the list.
 */
export function calcListMean(list = []) {
  let sumList = list.reduce((result, value) => result + value, 0);
  return sumList / list.length;
}