
"use strict";

// function Animal(qtdDePatas){
//     this.qtdDePatas = qtdDePatas;
// }

// function Cachorro(morde){
//     Animal.call(this,4);

//     this.morde = morde;
// }

// const pug = new Cachorro(false);

// console.log(pug);


/***** Classes ***********/

class Animal {
    constructor(qtdDePatas){
        this.qtdDePatas = 4;
    }
}

class Cachorro extends Animal {
    constructor(morde){
        super(4);
        this.morde = morde;
    }
}

const pug = new Cachorro(false);

console.log(pug);


/***** Modificadores de acesso privado ***********/

// class Person {
//     #name = "";

//     constructor(name){
//         this.#name = name;
//     }

//     get name(){
//         return this.#name;
//     }

//     set name(name){
//         this.#name = name;
//     }
// }


/***** static ***********/

class Person {
    static walk(){
        return "Walking ...."
    }
}

console.log(Person.walk());