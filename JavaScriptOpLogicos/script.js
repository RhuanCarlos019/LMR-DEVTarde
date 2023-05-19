let numero = document.getElementById("nDigitado").value; 

function nParImpar(){
let verificar = parseInt(numero)%2;
if(verificar==0){
    alert ("O número" +numero+"é par")
}else{
    alert ("O número" +numero+"é impar")
}
}
