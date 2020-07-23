// Console

console.log("Black text");

console.warn("Yellow text with alert");

console.error("Red error text");

console.trace();

console.group("My group");
console.log("Black text");
console.log("Black text");
console.groupEnd("My group");

console.time("Log time");
setTimeout(() => {
    console.timeEnd("Log time");
},2000);

console.table(["Celso Henrique","Digital Innovation One"]);

console.assert(1 === 1,"Ops ...");

console.log("%c styled log","color: blue; font-size: 40px");

