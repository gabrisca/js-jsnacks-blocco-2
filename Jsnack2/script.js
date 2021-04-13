// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

var numero = prompt("Inserisci un numero"); // chiedo all'utente di inserire un numero
// var numero = 11;
console.log("Hai inserito il numero " + numero)
console.log("----")

var incremento = parseInt("1");


if(numero%2 === 0){
  console.log("Hai inserito il numero " + numero) // se pari stampo il numero
} else { // se dispari stampo il numero successivo 
  console.log(parseInt(numero) + parseInt(incremento))
}