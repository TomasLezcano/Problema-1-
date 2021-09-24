/*

Primer Intento

var numero_positivo = []
var numero_negativo = []

var numero = prompt ("Numero para aplicar la funcion factorial ","")
console.log (numero)

if(numero >= 0){
    numero_positivo.push(numero)
}else{
    numero_negativo.push(numero)
}
console.log (numero_negativo)
console.log (numero_positivo)

var contador_positivos = []

for(var i = 1; i< numero_positivo;){
if(contador_positivos == undefined){
 contador_positivos.push (numero_positivo)}
 else{
     var cuenta_positivos = (contador_positivos*numero_positivo--)
     contador_positivos .push (cuenta_positivos)
 }
}

var contador_negativos = []
 
for(var i = 0; i> numero_negativo;){
    if(contador_negativos == undefined){
     contador_negativos.push (numero_negativo)}
     else{
         var cuenta_negativos = (contador_negativos*numero_negativo++)
         contador_negativos .push (cuenta_negativos)
     }
    }
*/
var insercion =  prompt ("Numero para aplicar la funcion factorial ","")
var numero_inicial = parseInt (insercion)
var numero = parseInt (insercion)
var contador = 1
var resultado = []
for (var i=1; i<numero;){
if (numero == numero_inicial){
    numero--
    var cuenta_factorial = (numero_inicial*numero)
    resultado.push (cuenta_factorial)
    console.log (numero)
    console.log (resultado)
}else{
    numero--
    cuenta_factorial = (resultado*numero)
    resultado.pop ()
    resultado.push (cuenta_factorial)
    console.log (cuenta_factorial)
}}
console.log (resultado)




