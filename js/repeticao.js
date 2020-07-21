/**** for *********/

const array = ["one","two","three"];

for(let index = 0; index < array.length; index++){
    const element = array[index];
    console.log("Elemento # ",index,": ",element);
}


/******** while *********/

var n = 0;
var x = 0;

while(n < 3){
    n++;
    x += n;
}

console.log(x);


/******** break *********/

var index = 0;

while(true){
    index++;

    if(index > 2){
        break;
    }

    console.log(index);
}


/******** continue *********/

const array = [1,2,3,4,5,6];

for(let index = 0; index < array.length; index++){
    const element = array[index];

    if(element % 2 === 0){
        continue;
    }

    console.log(element);
}
