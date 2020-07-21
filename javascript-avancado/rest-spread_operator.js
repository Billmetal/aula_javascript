
// rest operator , spread operator ...
// strings, arrays, literal objects e objetos iteráveis

function sum(...args){
    return args.reduce((acc,value) => acc + value,0);
}

const sum2 = (a,b,...rest) => {
    console.log(a,b,rest);
};

console.log(sum(5,5,5,2,3));

sum2(5,5,5,2,3);

const multiply = (...args) => args.reduce((acc,value) => acc * value,1);

const sum3 = (...rest) => {
    return multiply(...rest);
};

console.log(sum3(5,5,5,2,3));

/****************/

const str = "Digital Innovation One";
const arr = [1,2,3,4];

function logArgs(...args){
    console.log(args);
}

const arr2 = [...arr,5,6,7];

const arr3 = [...arr,...arr2,0,0,0];

logArgs(arr3);


const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: "Hello"
};

console.log(obj2);


