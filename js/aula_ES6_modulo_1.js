/**** Variáveis ******/

const name = "Guilherme";

// Não podemos alterar o valor
//name = "QQ nome";

const user = {
	name: "Guilherme"
};

// Quando Objeto podemos trocar as propriedades
user.name = "Outro Nome";

// Não podemos tentar transformar em outro Objeto
//user = {
	//name: "Novo Objeto"
//};

const person = ["Guilherme","Pedro","Jennifer"];

// Podemos adicionar
person.push("João");

// Podemos remover itens
person.shift();

// Podemos alterar diretamente
person[1] = "James";

console.log("\n Array após mudanças : ",person);

/*
var test = "example";

(() => {
	console.log("Valor dentro da função "${test}"");
	
	if(true){
		var test = "example";
		console.log("Valor dentro do if "${test}"");
	}
	
	console.log("Valor após execução do if "${test}"");
})();

(() => {
	let test = "valor if";
	console.log("Valor dentro da função "${test}"");
	
	if(true){
		let test = "valor if";
		console.log("Valor dentro do if "${test}"");
	}
	
	console.log("Valor após execução do if "${test}"");
})();    */



/***** Imutabilidade ******

const students = [
	{
		name: "Grace",
		grade: 7
	},
	{
		name: "Jennifer",
		grade: 4
	},
	{
		name: "Paul",
		grade: 10
	}
];


function getApprovedStudents(studentList){
	return studentList.filter(student => student.grade >= 7);
}

console.log("Alunos Aprovados");
console.log(getApprovedStudents(students));

console.log("\n Lista de Alunos");
console.log(students);    



const user = {
	name: "Guilherme",
	lastName: "Cabrini da Silva"
};

function getUserFullName(user){
	return {
		...user,
		fullName: '${user.name} ${user.lastName}'
	}
}

const userWithFullName = getUserFullName(user);

console.log(userWithFullName,user);      ****/


/**** Hosting-função ***

function fn(){
	log("Hosting função");
	
	function log(value){
		console.log(value);
	}
}

fn();   ****/


/**** Hosting-variáveis ***

function fn(){
	console.log(text);
	var text = "Exemplo";
	console.log(text);
}

fn();    **/


/*** Exemplo de currying 

function soma(a){
	return function(b){
		return a + b; 
	}
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));   */