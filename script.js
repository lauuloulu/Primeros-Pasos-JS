//Números//

let x = 10;
let y = 20;
let z= x + y;
document.getElementById("demo").innerHTML= "El valor de z es:" + z;

let rest= y - x;
document.getElementById("rest").innerHTML= "El valor de rest es:" + rest;

let multi= x * y;
document.getElementById("multi").innerHTML= "El valor de multi es:" + multi;

let div= y / x;
document.getElementById("div").innerHTML= "El valor de div es:" + div;

//Cadena de Texto//

let quote= "Cogito ergo sum";
let trad= "Pienso luego existo";
let autor= 'Descartes';
let group= quote + "<br>" + autor + "<br>" +  trad;

document.getElementById("group").innerHTML= "Filosofía es " + group;

//Booleano//

const A= 1;
const B= "1";

let total= A == B; 

document.getElementById("booleanos").innerHTML= "Es..." + total;

let total2= A === B;

document.getElementById("booleanos2").innerHTML= "Es..." + total2;

//Funciones//

let coder={
    nombre: "Laura",
    apellido: "Prat",
    bootcamp: "FemNorte",
    aficiones: ["leer","quedar con amigos","pasear","deporte"],
    comida_favorita: ["sushi", "dulces", "verdura"],

}


document.getElementById("funciones1").innerHTML= "Este documento lo está escribiendo" + " "+  coder.nombre + "." + "<br>" + coder.nombre + " "+ "no se entera mucho de lo que hace. Aún así, hace lo mejor que puede."

let concatenacion2= document.createElement("p");//Se crea el nodo hijo que se insertará al nodo padre
concatenacion2.innerHTML= `${coder.nombre} ${coder.apellido}`;//Estamos asignado el valor/texto al nodo hijo
document.querySelector("body").appendChild(concatenacion2); //Estas tres línias, está creando un elemento P sin modificar el HTML, por lo tanto, es la manipulación del DOM. 

function saludarMañana (nombre){
    let saludo= `Buenos días ${nombre}`
    console.log(saludo);
}

saludarMañana("Laura");

function saludar(nombre) {
    return `Hola ${nombre}, Bienvenida!`; 
}


function multiply(p1, p2){
    return p1 * p2;
}

let resultado= multiply(5, 6);
document.getElementById("funciones2").innerHTML= resultado;

var numero= 114;
if(numero%2==0){
    alert("El número " +numero+ " es par.");
}else{
    alert("El número "+numero+ " es impar.");
}

document.getElementById("funciones3").innerHTML= numero;

//OBJETOS//

var coche ={
    marca: 'opel',
    modelo:'corsa',
    año:'2019',
    puertas: 5,
    color: {
        cochecolor1: 'blanco',
        cochecolor2: 'negro', 
    }
}

function visualizarMarca(vehiculo){
    let marca =vehiculo.marca
    console.log(marca);
    return marca
}

visualizarMarca (coche);

function visualizarPuertas(vehiculo){
    let puertas= vehiculo.puertas
    console.log(puertas);
    return puertas
}

visualizarPuertas(coche);


console.log(coche.marca);
console.log(coche.puertas)


document.getElementById("objeto1").innerHTML=coche.modelo;
document.getElementById("objeto2").innerHTML=coche.puertas;
document.getElementById("objeto3").innerHTML=coche.color.cochecolor1;


//ARRAYS//

var ArrayNum = [1,2,3,4,5,6,7,8,9,0];

console.log(ArrayNum);

function obtenerNumeros(array) {
    var numeros = [];
    for(var i= 0; i< array.length; i++) {
        if( typeof array[i] === 'number'){
            numeros.push(array[i]);
        }
    }
    return numeros;
}

var numerosArray= obtenerNumeros(ArrayNum);

console.log(numerosArray);
document.getElementById('array1').innerHTML= "Los números del Array son " + numerosArray




function añadirValorArray(nuevoNumero, numero){
    nuevoNumero.push(numero);
}

añadirValorArray(ArrayNum, 10);

console.log(ArrayNum);
document.getElementById('array2').innerHTML= "He añadido el último número " + ArrayNum


function quitarValorArray(eliminarNumero){
    eliminarNumero.pop();
}

quitarValorArray(ArrayNum);

console.log(ArrayNum);
document.getElementById('array3').innerHTML= "He eliminado el último elemento con pop " + ArrayNum

function quitarPrimerValor(eliminarPrimero){
    eliminarPrimero.shift();
}

quitarPrimerValor(ArrayNum);

console.log(ArrayNum);
document.getElementById('array4').innerHTML= "Y ahora elimino el primer elemento con shift " + ArrayNum


function eliminarPares (eliminarPar){
    var Numimpares= [ ];

    for (var i = 0; i < eliminarPar.length; i ++) {
        if (eliminarPar[i] % 2 !== 0) {
            Numimpares.push(eliminarPar[i]);
        }
    
    }
    return Numimpares;
}

var imparesArray= eliminarPares (ArrayNum);

console.log(imparesArray);
document.getElementById('array5').innerHTML= "Se ha eliminado los numeros pares " + imparesArray


