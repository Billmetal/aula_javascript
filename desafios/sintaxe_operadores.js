/***
 * - Crie uma função que receba dois parâmetros
 * - Confira se os números são iguais
 * - Confira se a soma dos números é maior que 10 ou menor que 20.
 * - Retorne uma String dizendo:
 * "Os números num1 e num2 não/são iguais. Sua soma é (soma) , que é maior/menor que 10 e maior/menor que 20 ."
 * 
 * **/

function comparaNumeros(num1, num2) { 
    let resposta = "Os números " + num1 + " e " + num2;
    let soma = num1 + num2;
    num1 === num2 ? resposta += " são iguais. " : resposta += " não são iguais. ";
    resposta += "Sua soma é " + soma + " , que é ";
    soma > 10 ? resposta += "maior que 10 e " : resposta += "menor que 10 e ";
    soma > 20 ? resposta += "maior que 20 ." : resposta += "menor que 20 .";
    return resposta;
}

console.log(comparaNumeros(1, 2));

console.log(comparaNumeros(5, 10));

console.log(comparaNumeros(4, 30));

console.log(comparaNumeros(8,8));