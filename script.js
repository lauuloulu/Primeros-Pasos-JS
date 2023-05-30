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


console.log(coche.marca);
console.log(coche.puertas)


document.getElementById("objeto1").innerHTML=coche.modelo;
document.getElementById("objeto2").innerHTML=coche.puertas;
document.getElementById("objeto3").innerHTML=coche.color.cochecolor1;


//ARRAYS//

var ArrayNum = [1,2,3,4,5,6,7,8,9,0];

console.log(ArrayNum);

let text= " ";

for (let i= 0; i< 10; i++){
    text += "los números son"+ i + "<br>";
}
document.getElementById("array1").innerHTML= text;

ArrayNum.push(11);

console.log(ArrayNum)

let size= ArrayNum.length;
console.log(ArrayNum.length);

var pares= [" "];
for (pares=0; pares<12; pares=pares +1 *2){
    console.log(pares);
}

ArrayNum.slice(0,2,4,6,7,8,9);

console.log(ArrayNum)


