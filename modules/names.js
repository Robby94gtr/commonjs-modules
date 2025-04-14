/* 1. Creo una funzione che accetta due parametri: firsdtName, LastName. 
La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName */

function getFullName(firstName, lastName){
    let user = {
        nome: firstName,
        cognome: lastName,
    };
    return user;
};

module.exports = getFullName;

