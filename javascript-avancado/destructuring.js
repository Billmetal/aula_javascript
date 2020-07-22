// Destructuring Assignment

var [apple,banana,orange,[tomato]] = ["apple","banana","orange",["tomato"]];

console.log(tomato);

var obj = {
    name: "Celso",
    props: {
        age: 26,
        favoriteColors: ["Black","Blue"]
    }
};

var { name } = obj;

var {props: { age,favoriteColors: [c1,c2] } } = obj;

console.log(c1);
console.log(c2);

var arr = [{name: "Apple", type: "fruit"}];

var [{ name }] = arr;

console.log(name);

// nas functions

function sum([a,b] = [0,0]){
    return a + b;
}

console.log(sum([5,5]));