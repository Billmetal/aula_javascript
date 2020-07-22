// fetch   obs: funciona no navegador

fetch('//localhost:80/v1/data.json')
        .then(responseStream => {
            if(responseStream.status === 200){
                return responseStream.json();
            } else {
                throw new Error("Request Error");
            }
        })
        .then(data => console.log(data))
        .catch(err => console.log("Erro : ",err));


//  ES7 - Async / Await

const asyncTimer = () => new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(123456);
    },1000);
});

const simpleFunc = async () => {
    // const data = await Promise.all()  --- para requisições em paralelo

    const data = await asyncTimer();
    console.log(data);

    const dataJSON = await fetch('//localhost:80/v1/data.json').then(resStream => resStream.json());



    return dataJSON;
};

simpleFunc().then(data => console.log(data));


// EventEmitter

const EventEmitter = require("events");

class Users extends EventEmitter {
    userLogged(data){
        this.emit("User logged", data);
    }
}

const users = new Users();

users.on("User logged", data => {
    console.log(data);
});

users.userLogged({ user: "Celso Henrique"});

