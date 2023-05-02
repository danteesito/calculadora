const num1 = document.getElementsByClassName("numeros")
const oper = document.getElementsByClassName("simbolo")
const borrador = document.getElementById("Borra");
let aux = document.getElementById("result");
let res = 0;


function addNumber(num) {
  //if (num1) Verifica si la variable num1 está definida (se asume que se define en otro lugar del código).
  if (num1) {
    //const value = aux.value;: Crea una constante llamada value que almacena el valor actual del elemento input
      const value = aux.value;
      if (value === '0' || value === '-0') {
        //aux.value = num;: Si value es igual a '0' o '-0', establece el valor del elemento input en num.
          aux.value = num;
      } else {
          // Verificar si el número ingresado es en base octal
          const isOctal = value.match(/^0[0-7]*$/);
          if (isOctal) {
              /*const decimal = parseInt(value, 8);: Convierte value de octal a decimal y lo asigna a la constante decimal.
                esto remplasa el numero de octal a decimal  
              */
              const decimal = parseInt(value, 8);
              aux.value = decimal + num;
          } else {
              aux.value += num;
          }
      }
  } 
}
/*
Aki creo la funcion de addOperator para poner los operadores logicos.
hago el if para ver si en el ultimo numero(endsWith) es uno de los otros operadores logicos
Si es verdadero no me retorna el ultimo simbolo presionado si hay otro atras
Si no entonces pongo el aux.value para ponerle el simbolo
*/
function addOperator(operador) {
    let value = aux.value;
    if (value.endsWith("+") || value.endsWith("-") || value.endsWith("*") || value.endsWith("/")) {
      return;
    }
    aux.value += operador;
  }
/*
Aki creo la funcion calculate
Esto lo que hace calcular el valor de las operaciones dadas en la barra de arriba
Lo que hace res es encapsular en una let el calculo de la barra 
Esto funciona gracias a eval el cual hace operaciones matematicas la cual agarra aux.value(osea el valor antes puesto en la barra)
Al estar guardado en res remplasa el aux.value de antes con el nuevo resultado
*/
  function calculate() {
    res = eval(aux.value);
    aux.value = res;
}

borrador.addEventListener('click', function paraBorrar() {
  aux.value = "";
  botonBorrar.innerText = "C";
}) 
