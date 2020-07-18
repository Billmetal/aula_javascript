



function clicou(){
	document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar !!! , agora clicando aqui , Vamos para o site do Carrefour !</b>";
	//console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
	window.open("https://carrefour.com.br");
	//window.location.href = "https://carrefour.com.br";
}

function trocar(elemento){
	elemento.innerHTML = "Obrigado por passar o Mouse !!!!";
	//alert("Trocar Texto");
}

function voltar(elemento){
	elemento.innerHTML = "Passe o mouse aqui ...";
}	

function load(){
	//alert("Página carregada ...");
}

function funcaoChange(elemento){
	console.log(elemento.value);
}


/*
function soma(n1,n2){
	return n1 + n2;
}

function validaIdade(idade){
	var validar;
	if(idade >= 18){
		validar = true;
	} else {
		validar = false;
	}
	return validar;
}

console.log(validaIdade(prompt("Qual a sua idade ??")));

alert(soma(5,10));    */


/*
var d = new Date();

alert(d.getMonth()+1);
alert(d.getDate());
alert(d.getHours());  */

/*
var count = 0;

for(count;count <= 5;count++){
	alert(count);
}

while(count < 5){
	console.log(count);
	count ++;
}   */


/*
var idade = prompt("Qual sua idade ?");

if(idade >= 18){
	alert("Maior de idade");
} else {
	alert("Menor de idade");
}     */

/*
var frutas = [{nome:"Maça",cor:"Vermelha"},{nome:"Uva",cor:"Roxa"},{nome:"Pêra",cor:"Amarela"}];
console.log(frutas);
console.log(frutas[1].nome); */


/*
var fruta = {nome:"Maça",cor:"Vermelha"};
console.log(fruta.nome);    */


/*
var lista = ["maça","pêra","laranja"];
lista.push("Uva");
//lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.toString());
console.log(lista.join(" | "));     */


/*
var nome = "Rafael Galeano";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo !";

//alert(nome + " tem " + idade + " anos .");

console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("Japão","Brasil"));

alert(frase.toUpperCase());    */