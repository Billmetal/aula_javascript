/****Funções de Object ***/

const user = {
	name: "Guilherme",
	lastName: "Cabrini da Silva"
};

// Recupera as chaves do objeto
console.log("Propriedades do objeto user: ",Object.keys(user));

// Recupera os valores de cada chave
console.log("\n Valores das propriedades do objeto user: ",Object.values(user));

// Retorna um Array de chaves e valores
console.log("\n Lista de propriedades e valores: ",Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user,{fullName: "Guilherme Cabrini da Silva"});

console.log("\n",user);

console.log("\nRetorna um novo objeto mergeando dois ou mais objetos",Object.assign({},user,{age: 26}));


// Previne todas alterações em um objeto

const newObj = {
	foo: "bar"
};

Object.freeze(newObj);

newObj.foo = "Change";
delete newObj.foo;
newObj.bar = "foo";


console.log("\nVariável newObj após as alterações : ",newObj);


// Permite apenas a alteração de propriedades existentes no objeto impedindo delete ou criação de novas propriedades

const person = {
	name: "Guilherme"
};

Object.seal(person);

person.name = "Gustavo";
delete person.name;
person.age = 28;

console.log("\nVariável person após as alterações : ",person);


/********* Symbol************/


const symbol1 = Symbol("Valor");
const symbol2 = Symbol("Valor");

// Symbols são únicos
console.log("\nsymbol1 é igual a symbol2 ? : ",symbol1 === symbol2);


// Previnis conflito entre nomes de propriedades

const nameSymbol1 = Symbol("name");
const nameSymbol2 = Symbol("name");

const user2 = {
	[nameSymbol1]: "Guilherme",
	[nameSymbol2]: "Outro Nome",
	lastName: "Cabrini da Silva"
};

console.log(user2);


// Symbols criam propriedades que não são enumberables

for(const key in user2){
	if(user.hasOwnProperty(key)){
		console.log("\nValor da chave ${key}: ${user2[key]}");
	}
}

console.log("Propriedades do objeto user : ",Object.keys(user2));
console.log("Valores das propriedades de user: ",Object.values(user2));


// Exibir Symbols de um objeto

console.log("Symbols registrados no objeto user2: ",Object.getOwnPropertySymbols(user2));

// Acessando todas as propriedades do objeto

console.log("Todas propriedades do objeto user2 : ",Reflect.ownKeys(user2));


// Criar um enum

const directions ={
	UP: Symbol("UP"),
	DOWN: Symbol("DOWN"),
	LEFT: Symbol("LEFT"),
	RIGHT: Symbol("RIGTH")
};






