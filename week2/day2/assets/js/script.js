// esercizio 1
var nome = 'Aldo';
let cliente = 'cliente';
const number = 3.14;

document.getElementById('concatena').innerHTML = nome + ', ' + cliente + ' ,' + number;

// esercizio 2
var unico = nome + ',' + cliente + ', ' + number;
document.getElementById('concatena2').innerHTML = unico;

//esercizio 3 parte uno
var name1 = 'Mario';
let name2 = 'Carla';
document.getElementById('var').innerHTML = name1 ;
document.getElementById('let').innerHTML = name2 ;
document.getElementById('final').innerHTML = name1 ;

// esercizio 3 parte due
document.getElementById('let2').innerHTML = name1 ;
document.getElementById('let3').innerHTML = name2 ;
document.getElementById('final2').innerHTML = name2 ;


//esercizio 4
var numero=15;
document.getElementById('iniziale').innerHTML += numero;
document.getElementById('valore1').innerHTML += (numero+numero)+","+(numero+numero+1);;
document.getElementById('valore2').innerHTML += (numero-10)+","+(numero-10-1);;
document.getElementById('valore3').innerHTML +=numero*3;
document.getElementById('valore4').innerHTML +=numero/3;
document.getElementById('valore5').innerHTML +=numero+' '+'è un numero';