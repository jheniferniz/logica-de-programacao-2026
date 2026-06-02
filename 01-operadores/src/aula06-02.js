import leia from 'readline-sync'

//ENTRADA
var celcius = leia.questionFloat("Digite a temperatura em Graus Celsius: ");

//PROCESSAMENTO 
var farehaint = (celcius * 1.8) + 32;
var kelvin = celcius + 273.15;

//SAIDA
console.log(celcius = " graus celsius é igual a " + farehaint + " graus farehaint.");
console.log(celcius = " graus celsius é igual a "+ kelvin + " graus kelvin.");








// EXERCICIOS 4
    import leia from 'readline-sync'
    
var TotalEleitores = leia.questionInt("INFORME O TOTAL DE ELEITORES DA CIDADE: ");
var totalBrancos = leia.questionInt("INFORME A QUANTIDADE DE VOTOS BRANCOS ");
var totalNulos = leia.questionInt("INFORME A QUANTIDADE DE VOTOS NULOS: ");
var totalValidos = leia.questionInt("INFORME A QUANTIDADE DE VOTOS VALIDOS: ");

var percentualBrancos = (totalBrancos / TotalEleitores) * 100;
var percentualNulos = (totalNulos / TotalEleitores) * 100;
var percentualValidos = (totalValidos /TotalEleitores) * 100;

console.log("percentual de votos brancos: " + percentualBrancos.toFixed(2))
console.log("percentual de votos nulos: " + percentualNulos.toFixed(2))
console.log("percentual de votos validos: " + percentualValidos.toFixed(2))








