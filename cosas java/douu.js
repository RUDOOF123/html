/*function trestristestigres() {
   document.write("tres tristes tigres")
    for(i=0; i<=3; i++) {
        document.write("hola mundo");
    }
    
}*/
function suma(num1,num2){
  
return num1+num2
}

function resta(num1,num2){

return num1-num2
}

function multiplicacion (num1,num2){

return num1*num2
}

function division (num1,num2){

return num1/num2
}

/*let num = parseInt(prompt("ingrese el numero a multiplicar"));
for(i=0; i<=10; i++){
 multi=num*i;
 document.write("    ",num," ","X"," ",i,"=",multi,"<br>");
}*/
let num1= parseInt(prompt("ingrese el primer numero"));
let num2= parseInt(prompt("ingrese el segundo numero"));
const ressuma=suma(num1,num2);
const resresta=resta(num1,num2);
const resmulti=multiplicacion(num1,num2); 
const resdivision=division(num1,num2);
document.getElementById('ressuma').innerHTML="suma: "+ressuma;
document.getElementById('resresta').innerHTML="resta: "+resresta;
document.getElementById('resmulti').innerHTML="multiplicacion: "+resmulti;
document.getElementById('resdivision').innerHTML="division: "+resdivision;


