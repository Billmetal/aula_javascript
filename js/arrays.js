const users = ["Guilherme","Pedro","Jennifer"];

const gender = {
    MAN: Symbol("M"),
    WOMAN: Symbol("W")
}

const persons = [
    {
        name: "Guilherme",
        age: 26,
        gender: gender.MAN
    },
    {
        name: "Pedro",
        age: 43,
        gender: gender.MAN
    },
    {
        name: "Jennifer",
        age: 18,
        gender: gender.WOMAN
    }
]

const stringsAndNumbers = Array.of("John","Cris","Jenny",2,3,4);

const arrWith3Positions = Array(3);  // [empty x 3]

const personList = Array("John","Cris","Jenny");

// Uso do Array from 

const divs = document.querySelectorAll("div");

console.log(divs);

const divList = Array.from(divis);

divList.shift();

divList.pop();

console.log(divList);


// Retornar a quantidade de itens de um array
console.log("Itens : ",persons.length);

// Verificar se é array
console.log("A variavel person é um array ? : ",Array.isArray(persons));


// Iterar os itens do array
persons.forEach((person,index,arr) => {
    console.log('Nome : ',person.name);
});


// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nLista só com homens : ',mens);


// Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = "Introdução ao Javascript";
    return person;
});

console.log("\nPessoas com a adição do course : ",personsWithCourse);


// Transformar um array em outro tipo
const totalAge = persons.reduce((age,person) => {
    age += person.age;
    return age;
},0);

console.log("\nSoma da idade das pessoas : ",totalAge);


// Juntando operações 
const totalEvenAges = persons.filter(person => person.age % 2 === 0)
                        .reduce((age,person) => {
                            age += person.age;
                            return age;
                        },0);

                        
console.log("\nSoma da idade das pessoas com idade par : ",totalEvenAges);   


// Operadores binários
//in
something in somethingItens

// Arrays
var arvores = new Array("pau-brasil","loureiro","cedro","carvalho","sicômoro");

0 in arvores;                //retorna true
3 in arvores;                //retorna true
6 in arvores;                //retorna false
"cedro" in arvores;          //retorna false (deve ser especificado o valor do índice)

"length" in arvores;         //retorna true (length é uma propriedade de Array)


// Objetos pré definidos
"PI" in Math;                // retorna true
var minhaString = new String("coral");
"length" in minhaString;     //retorna true


// Objetos personalizados
var meuCarro = {marca: "Honda", modelo: "Accord", ano:"1998"};
"marca" in meuCarro;                //retorna true
"modelo" in meuCarro;               //retorna true

// instanceof
objeto instanceof tipoObjeto

var dia = new Date(2018,12,17);

if(dia instanceof Date){
    // code here
}


// Propriedades de adição e remoção

const frutas = ["Melancia","Banana"];

frutas.push("Pêra");  // adiciona no final e retorna o tamanho do array

frutas.pop();  // remove o ultimo elemento e retorna esse elemento

frutas.unshift("Maça");  // adiciona no inicio e retorna o tamanho do array

frutas.shift();   // remove o primeiro elemento e retorna esse elemento

// Concat

const salgados = ["Coxinha","Kibe","Empada"];

const alimentos = frutas.concat(salgados);

console.log(alimentos);
console.log(frutas);
console.log(salgados);

// Splice

frutas.splice(1,0,"Acerola");

console.log(frutas);

frutas.splice(2,1,"Laranja","Caqui");

console.log(frutas);

