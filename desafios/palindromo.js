// solução 1
function verificaPalindromo(palavra) {
    if (!palavra) return "string inexistente";
    return palavra.split("").reverse().join("") === palavra;
}

// solução 2
function verificaPalindromo2(palavra) {
    if (!palavra) return "string inexistente";
    for (let i = 0; i < palavra.length / 2; i++) {
        if (palavra[i] !== palavra[palavra.length - 1 - i]) { 
            return false;
        }
    }
    return true;
}


console.log(verificaPalindromo("abba"));
console.log(verificaPalindromo2("abba"));
 
