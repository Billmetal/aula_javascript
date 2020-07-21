var sumOld = function(a,b){
    return a + b;
}

console.log(sumOld(5,5));

function Car(){
    this.foo = "bar";
}

//  Arrow Functions

var obj = {
    showContext: function showContext(){
       this.log("Teste");

       setTimeout(() => {
           this.log("After 1000 ms .");
       },1000);
    },

    log: function log(value){
        console.log(value);
    }
};

obj.showContext();


console.log(new Car());

var sum = (a,b) => a + b;

console.log(sum(5,15));

var createObj = () => ({ test: 123});
console.log(createObj());

