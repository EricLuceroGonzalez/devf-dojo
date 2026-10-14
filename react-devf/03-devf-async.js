// #Javascript asincrono y callbacks#

// setTimeout(function() {
//   console.log("\n ********   hola mundo"), 0;
// });
// console.log(1);
// console.log(2);
// setTimeout(function() {
//   console.log(40);
// }, 0);
// console.log(3);

// Arrow functions:
// const saludarConsola = (mensaje) => {
//   console.log(mensaje);
// };

// const saludarAlert = (mensaje) => {
//   alert(mensaje);
// };

// saludarConsola('El mensaje.....');

// Functional programming

const saludar = (mensaje, formato) => {
  // Recibe mensaje y una funcion.
  // La ejecuta una vez entra a la funcion
  formato(mensaje);
};

const consola = mensaje => {
  console.log("mensaje...");
};

const alert = mensaje => {
  alert("mensaje...");
};

// --
const realizarOperacion = (num1, num2, operacion) => {
  console.log("num1 = " + num1);
  console.log("num2 = " + num2);
  console.log("op = " + operacion);
  operacion(num1, num2);
  console.log("Termina funcion de orden superior");
};

realizarOperacion(3, 9, (a, b) => {
  console.log(a + b);
});

// Ejercicios de Callbacks
console.log("\n---------------   // Ejercicios de Callbacks  ------------\n\n");

// 1.- Muestra un mensaje en consola mediante un callback
const showMessageCallback = (contenido, show) => {
  show(contenido);
};

showMessageCallback("Hola, imCallback!!!", imCallback => {
  console.log(imCallback);
  console.warn(imCallback);
});

// 2.- Crear una función de orden superior que reciba como argumento un mensaje y callback. Según el callback que
//     se pase como argumento, la función de orden superior debe mostrar el mensaje en un console.warn o en un console.log

// 3.- Crear una función de orden superior que reciba como argumentos dos números y un callback. Según el callback que se
//     pase a la función, se devuelve la suma de los dos números, la resta de los dos números o la multiplicación de los dos números.
const ordenSuperior2 = (num1, num2, callBackk) => {
  callBackk(num1, num2);
};

const sumaCallback = (a, b) => {
  console.log(a+b);
  
  return a + b;
};
const restaCallback = (a, b) => {
  console.log(a-b);
  
  return a - b;
};
const prodCallback = (a, b) => {
  console.log(a*b);
  
  return a * b;
};

ordenSuperior2(2, 3, sumaCallback);
ordenSuperior2(2, 3, restaCallback);
ordenSuperior2(2, 3, prodCallback);

// 4.- Escribe una función de orden superior que reciba una cadena de caracteres y debe devolver, mediante un callback, la
//     cadena de caracteres en mayúsculas o en minúsculas.
//             ordenSuperior("PejeLagarto", minus);
//             -> pejelagarto
//             ordenSuperior("PejeLagarto", mayus);
//             -> PEJELAGARTO

const changeTypo = (message, caps) => {
  caps(message);
}

const giveCaps = (word) => {
  const allcaps = word.toUpperCase();
  console.log(allcaps);
}

const noCaps = (word) => {
  const noncaps = word.toLowerCase();
  console.log(noncaps);
}

changeTypo('HoLa MuNdO', giveCaps);
changeTypo('PejeLagarto', giveCaps);
changeTypo('PejeLagarto', noCaps);
changeTypo('HoLa MuNdO', noCaps);

// 5.- Hacer un arreglo de 4 cantidades de tiempo en minutos EJEMPLO[120, 80, 200, 100] y tomar solo las cantidades
//     mayores a dos horas (hacer la comparación en horas) mediante un callback

const tiempos = [120, 80, 200, 100, 45, 121, 120, 1232];

const takeTimes = (timeArray, timeSelector) => {
  timeSelector(timeArray);
}

const toSelectTime = (elArray) => {
  console.log('Inserted: ' + elArray);
  if (typeof elArray !== "object") {  
    console.warn('Please insert an array of time');
    return 'failed!'
  } else {
    newArray = [];
    for (let i = 0; i < elArray.length; i++) {
      if ( elArray[i]/120 > 1) {
        newArray.push(elArray[i]);
      } else {
        console.log("There's no time over 2h in here. :(");
        
      }
    }
    console.log('Time over 2h: ' + newArray);
  }
}

// Callbacks
takeTimes(tiempos, toSelectTime)
takeTimes('asds', toSelectTime)
takeTimes(5, toSelectTime)
takeTimes([0,1,2,3,300], toSelectTime)
