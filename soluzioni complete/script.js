//<<<<<<<<<<<<< JSNaCK1 >>>>>>>>>>>>>>
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

////////////      CICLO FOR  ////////////
var somma = 0;

for(var i = 1; i <= 5; i++){ // ciclo FOR per chiedere all'utente 5 volte di inserire un numero
  var numeroUtente = parseInt(prompt("Inserisci un numero"));
  console.log("Il numero inserito è " + numeroUtente)
  if (numeroUtente != parseInt(numeroUtente)){ // alert se non inserisco un numero
    alert("Errore. Inserisci un numero!")
  } else {
    console.log("Hai inserito il numero correttamente")
  }

  somma += numeroUtente;
  console.log("la somma provvisoria è " + somma)
  console.log("------")
}

console.log("la somma totale è " + somma)
console.log("------")


////////////      CICLO WHILE   ////////////
// var somma = 0;

// var i = 1; // contatore default

// while(i <= 5){ // condizione
//   var numeroUtente = parseInt(prompt("Inserisci un numero"));
//   console.log("Il numero inserito è " + numeroUtente)
//   if (numeroUtente != parseInt(numeroUtente)){ // alert se non inserisco un numero
//     alert("Errore. Inserisci un numero!")
//   } else {
//     console.log("Hai inserito il numero correttamente")
//   }

//   somma += numeroUtente;
//   console.log("la somma provvisoria è " + somma)
//   console.log("------")
//   i++ // aggiornamento
// }

// console.log("la somma totale è " + somma)
// console.log("------")




//<<<<<<<<<<<<< JSNaCK2 >>>>>>>>>>>>>>
// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

var numero = parseInt(prompt("Inserisci un numero")); // chiedo all'utente di inserire un numero
// var numero = 11;
console.log("Hai inserito il numero " + numero)
console.log("----")

var incremento = parseInt("1"); // var incremento di 1 

if(numero%2 === 0){
  console.log("Hai inserito il numero " + numero) // se pari stampo il numero
} else { // se dispari stampo il numero successivo aggiungnedo la var incremento
  console.log(parseInt(numero) + incremento) 
}