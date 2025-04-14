// 1. Importa la funzione da names.js

const fullName = require('./names');

// 2. Importa la funzione da hobbies.js

const hobbies = require ('./hobbies');

/* 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: 
fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto. */

function people (){
    let objPeople = {
        nome: fullName('roberto', 'gramazio'),
        hobbies: hobbies('suonare', 'ascoltare musica', 'leggere'),
    };
    return objPeople;
};

console.log(people());