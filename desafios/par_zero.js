/**
 * Troque todos elementos pares e diferentes de zero de um array pelo número 0.
 * Se o array for vazio retorne -1
 * 
 * **/

function zeraPar(arr) { 
    if (!arr || arr.length == 0) return -1;
    arr.forEach((el,i) => {
        if (el % 2 == 0) arr[i] = 0;
    });
    return arr;
}

console.log(zeraPar([]));
console.log(zeraPar(null));
console.log(zeraPar([1,3,4,6,80,33,23,90]));
console.log(zeraPar([2,10,12,15,21,9,18]));