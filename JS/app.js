// creando una variable que guarde el valor ingresado por el usuario
var msg = prompt('Por favor ingresa una palabra para encriptar.');
//creando primera función para cifrar el valor ingresado por el usuario
function cipher(){
  //revisaremos que el valor que de el usuario NO se encuentre vacio.
  if(msg.length === 0){
    alert('Por favor ingresa una palabra para encriptar');
    return;
  }// cierre de If
  /*
  vamos a convertir el valor ingresado por el usuario a mayúsculas
  para no tener problema con la fórmula de cifrado cesar. Ya que en el codigo ASCII
  el abecedario en mayúsculas se encuentra del número 65 al 90
  y la fórmula enseñada en el LMS trabaja con el 65
  */
  msg = msg.toUpperCase();

  //creando una variable que almacene el valor otorgado por el usuario cuando haya pasado las validaciones.
  var finalMsg = '';

  //Iterar el string otorgado por el usuario por medio de un ciclo for.
  for(var i = 0; i < msg.length; i++) {
    var iLetter = msg[i];
  // verificar si el valor tiene numeros.
      if(iLetter === '0' ||
        iLetter === '1' ||
        iLetter === '2' ||
        iLetter === '3' ||
        iLetter === '4' ||
        iLetter === '5' ||
        iLetter === '6' ||
        iLetter === '7' ||
        iLetter === '8' ||
        iLetter === '9'){

          alert('La palabra ingresada contiene números, favor de ingresar una palabra para encriptar');
            return;
     }//cierre de if numeros
  //creando una variable que almacene el codigo ASCII de la variable msg.
  var asciiCharCode = msg.charCodeAt(i);
  //creando variable que almacene los espacios a recorrer.
  var totalOfSpaces = 33;
  //creando variable con la fórmula del codigo César.
  var newCharCode = ((asciiCharCode - 65 + totalOfSpaces) % 26) + 65;
    finalMsg = finalMsg + String.fromCharCode(newCharCode);
  }//Cierre de for
    return finalMsg;
}// Cierre de función cipher.

// Creando función decipher.
function decipher(){

  if(msg.length === 0){
    alert('Por favor ingresa una palabra para encriptar');
    return;
  }// cierre de If

  msg = msg.toUpperCase();

  //creando una variable que almacene el valor otorgado por el usuario cuando haya pasado las validaciones.
  var finalMsg = '';

  //Iterar el string otorgado por el usuario por medio de un ciclo for.
  for(var i = 0; i < msg.length; i++){
    var iLetter = msg[i];
  // verificar si el valor tiene numeros.
      if(iLetter === '0' ||
        iLetter === '1' ||
        iLetter === '2' ||
        iLetter === '3' ||
        iLetter === '4' ||
        iLetter === '5' ||
        iLetter === '6' ||
        iLetter === '7' ||
        iLetter === '8' ||
        iLetter === '9'){

          alert('La palabra ingresada contiene números, favor de ingresar una palabra para encriptar');
          return;
  }//cierre de if numeros
  //creando una variable que almacene el codigo ASCII de la variable msg.
  var asciiCharCode = msg.charCodeAt(i);
  //creando variable que almacene los espacios a recorrer.
  var totalOfSpaces = 33;
  //creando variable con la fórmula del codigo César.
  var newCharCode = ((asciiCharCode - 65 - totalOfSpaces) % 26) + 65;
      finalMsg = finalMsg + String.fromCharCode(newCharCode);

  }
      return finalMsg;
}



alert('La palabra que ingresaste convertida a Cifrado de César es: ' + cipher());
console.log(cipher());
