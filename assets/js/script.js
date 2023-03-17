/*----- Passaggi -----*/
/* 
  1 - Chiedere all'utente il suo nome e salvarlo in una variabile; 
  2 - Chiedere all'utente il suo cognome e salvarlo in una variabile;
  3 - Chiedere all'utente il suo colore preferito e poi salvarlo in una variabile;
  4 - Chiedere all'utente la sua età e salvarla in una variabile;
  5 - Scrivere sulla pagina la password formata dall'insieme di tutte le variabili.
*/ 

const nome = prompt("Inserisci il tuo nome");

const cognome = prompt("Inserisci il tuo cognome");

const colorePreferito = prompt("Inserisci il tuo colore preferito");

const age = prompt("Inserisci la tua età");

document.getElementById("pwd").innerHTML += `
  ${nome}${cognome}${colorePreferito}${age}
`

