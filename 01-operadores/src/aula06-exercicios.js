

    

 
    import leia from 'readline-sync'
    //exercicio 07
    
    var corrida1 = leia.questionFloat("INFORME O VALOR DA CORRIDA 01 CORRIDA: ");
    var corrida2 = leia.questionFloat("iNFORME O VALOR DA CORRIDA 02 CORRIDA: ");
    var corrida3 = leia.questionFloat("INFORME O VALOR DA CORRIDA 03 CORRIDA: ");
    var corrida4 = leia.questionFloat("INFORME O VALOR DA CORRIDA 04 CORRIDA: ");
    var corrida5 = leia.questionFloat("INFORME O VALOR DA CORRIDA 05 CORRIDA: ");

var total = corrida1 + corrida2 + corrida3 + corrida4 + corrida5

var desconto = total * 0.25
var valorMotorista = total - desconto

console.log("VALOR TOTAL DAS CORRIDAS: R$ " + total.toFixed(2));
console.log("DESCONTO DO APLICATIVO: R$ " + desconto.toFixed(2));
console.log("VALOR ARRECADADO PELO MOTORISTA: R$ " + valorMotorista.toFixed(2))


//EXERCICIO 7
    
    var  valorProduto = leia.questionFloat("INFORME O VALOR DO PRODUTO: R$ ") 
    if (valorProduto < 20) {   
        var lucro = valorProduto * 0.45 
      } else {
var lucro = valorProduto *0.30
      }

      var valorVenda = valorProduto + lucro
      console.log("VALOR DO LUCRO: R$ " + lucro.toFixed(2));
      console.log("VALOR DE VENDA: R$ " + valorVenda.toFixed(2));

//EXERCICIO 8
   var numero = leia.questionInt("INFORME UM NUMERO: ")

var dobro = numero * 2
var triplo = numero * 3

console.log("DOBRO: " + dobro)
console.log("TRIPLO: " + triplo)

//EXERCICIO 9
var metros = leia.questionFloat("INFORME O VALOR EM METROS: ")

var centimetros = metros * 100
var milimetros = metros * 1000

console.log("VALOR EM CENTIMETROS: " + centimetros)
console.log("VALOR EM MILIMETROS: " + milimetros)


// EXERCÍCIO 10

var nota1 = leia.questionFloat("INFORME A 1 NOTA: ")
var nota2 = leia.questionFloat("INFORME A 2 NOTA: ")
var nota3 = leia.questionFloat("INFORME A 3 NOTA: ")

var media = (nota1 + nota2 + nota3) / 3

console.log("MEDIA FINAL: " + media.toFixed(2))