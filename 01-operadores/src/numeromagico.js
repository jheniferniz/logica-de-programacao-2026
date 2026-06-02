import leia from 'readline-sync';
 
var numeroMagico = Math.floor(Math.random()) * 100 +_1;

var tentativa;
var qtdTentativas = 0;

console.log("======= JOGO NUMERO MAGICO ======")
 

do {
    tentativa = leia.questionInt("digite sua tentativa");
    qtdTentativas


 }while(tentativa !== numeroMagico);