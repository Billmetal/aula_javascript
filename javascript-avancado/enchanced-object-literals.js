var prop1 = "Digital Innovation One";
var propName = "test";
function method1(){
    console.log("Method1 called ...");
}

var obj = {
    prop1,
    method1,
    sum(a,b){
        return a + b;
    },
    [propName + "concat"]: "prop value"
};

console.log(obj);
obj.method1();
console.log(obj.sum(1,5));