/* 1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe 
restituire  un array di stringhe contenenti gli hobby. */

function hobbies (hobbyOne, hobbyTwo, hobbyThree){
    let objHobbies = ['hobbyOne', 'hobbyTwo', 'hobbyThree'];
    return objHobbies;
};

// 2. Esporta la funzione dal file

module.exports = hobbies;