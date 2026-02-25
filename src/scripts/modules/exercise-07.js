// Atividade 7
/*
Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a
72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.
*/

import { getUserNumbers } from "../utils/array-input-handler.js";

export function showExercise07(){
    const limit = 72;
    let numberList = getUserNumbers(6);
    let numberSum = sumValuesUnderLimit(numberList, limit); 

    alert(`O resultado da soma dos números menores que 72 é ${numberSum} e os números digitados foram ${numberList.join(", ")}.`);
}

function sumValuesUnderLimit(valuesList = [], limit){
    let valuesAllowed = valuesList.filter(value => value < limit);
    return valuesAllowed.reduce((result, value) => result + value, 0);
}
