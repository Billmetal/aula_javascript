// const array = [0,1,2,3,4,5];

// array.forEach(item => {
//     if(item % 2 === 0){
//         console.log("O número ",item," é par .");
//     } else {
//         console.log("O número ",item," é ímpar .");
//     }
// });


const array = [2,3,4,5,6,8,10,15];

// array.forEach(item => {
//     if(item % 2 === 0){
//         console.log("O número ",item," é divisível por 2 .");
//     } else if(item % 3 === 0) {
//         console.log("O número ",item," é divisível por 3 .");
//     } else if(item % 5 === 0){
//         console.log("O número ",item," é divisível por 5 .");
//     }
// });


// array.forEach(item => {
//     if(item % 2 === 0){
//         console.log("O número ",item," é divisível por 2 .");
//     } 
//     if(item % 3 === 0) {
//         console.log("O número ",item," é divisível por 3 .");
//     }
//     if(item % 5 === 0){
//         console.log("O número ",item," é divisível por 5 .");
//     }
// });


// switch

var fruit = "papaya";

switch(fruit){
    case "banana":
        console.log("R$ 3,00 / kg");
        break;
    case "mamão":
    case "pera":
    case "melancia":
        console.log("R$ 2,00 / kg");
        break;
    default:
        console.log("Produto em falta no momento .");
        break;            
}