/**
 * Solucion para encontrar Numeros Naturales Perfectos 
 * @author Lorena Fajardo Diaz
 * @version 0.0.1
 */

/** Retorno de elementos de la platilla HTML */
var btn = document.getElementById('btn');
var result = document.getElementById('result');

/** Llamado a la funcion perfectNumbers cuando el usuario interaccione con el boton*/
btn.addEventListener('click', perfectNumbers);

/** Funcion perfectNumbers: Funcion que define los numeros perfectos que hay en el rango 
 * solicitado por el usuario, mediante la implementacion del ciclo for y el condicional if*/
function perfectNumbers(){
    let range = parseFloat(document.getElementById('range').value);
    let numbersList = [];
    

    for(let i = 1; i<= range; i++){
        let sum=0;
        for(let j = 1; j < i; j++){
            if(i % j === 0){
                sum = sum + j;
            }
        }
        if(sum === i){
            numbersList.push(i);
        }
    }
    result.innerHTML = `Los numeros perfectos encontrados en este rango son: ${numbersList} `;
    
}