// terça-feira 26/05/26 - exercicios 12,13,14,15
import leia, { promptLoop } from 'readline-sync'

var salario = leia.questionFloat("INFORME O SALARIO: R$");

var novosalario = salario + ( salario * (15 / 100));
var novosalario = salario + (salario * 0,15);
var novosalario = salario * 1.15;
salario *=1.15;
  

//exercicio 13
var produto = number(promot("DIGITE O VALOR DO PRODUTO:"))
var desconto = produto * 0.10 
var valorFinal = produto - desconto

console.log("DESCONTO: R$ + desconto")
console.log("valorFinal: R$ + valorFinal")

//exercicio 14

var horas = Number(promot("DIGITE A QUANTIDADE DE HORAS:"))
var minutos = horas * 60
var segundos = segundos * 3.600

console.log("minutos: " +  minutos)
console.log("segundos: " + segundos )


//exercicio 15
//entrada
var distancia = number(promot("digite a quantidade de litros gastos:"))
 
//processamento 
var consumo = distancia / litros

//saida
console.log("consumo medio: " + consumo + "km/1")