// TEst
// 1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia
//    https://en.wikipedia.org/wiki/List_of_fictional_penguins
//    Crea un objeto llamado myPenguin con propiedades que representen
//    la información listada en cada columna en esa página de wikipedia
//    (por ejemplo: character, origin...)
let aPenguin = {
  character: "Penguins 	",
  origin: "Penguin Island ",
  author: "Anatole France ",
  notes: "Satirical version of French history"
};

// 2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje de bienvenida. La salida debe ser algo como:
//    "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"

console.log("Hola, soy un pingüino y mi nombre es " + aPenguin.character);

let pElem = document.createElement('p');
pElem.textContent = aPenguin.character;
document.body.appendChild(pElem);

// 3.- Escribe otra línea de código que añada una nueva propiedad a tu pingüino llamada puedeVolar y asignalo a falso.

aPenguin.puedeVolar = false;


// 4.- Añade un método a tu pingüino llamado 'graznar' que muestre en consola: "kaww kaww!!"
aPenguin.graznar = function() {
  console.log("\n kaww kaww!!");
};

// let pElem2 = document.createElement('p');
// pElem2.textContent = aPenguin.character + 'aaa';
// document.body.appendChild(pElem2);

aPenguin.graznar();
// 5.- Añade otro método a tu pingüino llamado 'saludar' que imprima en consola el mismo mensaje que escribimos para la bienvenida.
aPenguin.saludar = function() {
  console.log("Hola, soy un pingüino y mi nombre es " + aPenguin.character);
};
// 6.- Sin modificar el código previo, cambia el nombre del pingüino a "Señor Pingu" y llama al método "saludar" para verificar que se ha aplicado el cambio correctamente.
console.log(aPenguin.character);
aPenguin.character = "Señor Pingu";
aPenguin.saludar();

// 7.- Escribe otro método llamado 'volar'. Con este método imprime en consola el mensaje "¡Puedo volar!" si el pingüino tiene 'true' en su atributo 'puedeVolar'.
// De lo contrario, muestra el mensaje "No puedo volar :("

aPenguin.volar = function() {
  if (aPenguin.puedeVolar) {
    console.log("¡Puedo volar!");
  } else {
    console.log("No vuelo :(\n\n");
  }
};

aPenguin.volar();

// 8.- Cambia la propiedad "puedeVolar" de tu pingüino a "true". Manda a llamar el método 'volar' para verificar que el cambio se efectuó
aPenguin.puedeVolar = true;
aPenguin.volar();

//------------------------ RECETA

// Crea un objeto que contenga información de una receta para preparar Mole.
// Debe contener las propiedades de   título (string), porciones (numero) e ingredientes (un   arreglo de strings).
// Muestra la información de la receta   para que luzca así:
//    Mole
//    Porciones: 2
//    Ingredientes:
//    canela
//    comino
//    coco

let recipe = {
  titulo: "Mole",
  porciones: 2,
  ingredientes: ["canela", "coco", "comino"]
};

// 10.- Crea un arreglo de objetos, donde cada objeto describa un libro y tenga las propiedades para titulo(string), autor(string) y leido(booleano para indicar si se ha leido o no).

let books = [
  {
    titulo: "Detectives Salvajes",
    author: "Roberto Bolano",
    status: true
  },
  {
    titulo: "2666",
    author: "Roberto Bolano",
    status: true
  },
  {
    titulo: "Nocturno",
    author: "Roberto Bolano",
    status: false
  }
];

//      Itera sobre el arreglo de libros, y por cada libro imprime el titulo y autor, junto con su status de lectura (si ya ha sido leído, o no).
for (let i = 0; i < books.length; i++) {
  aBook = books[i];
  console.log("Titulo: " + aBook.titulo + ", Autor: " + aBook.author);
  if (aBook.status) {
    console.log("------ ya has leido este libro  ------\n");
  } else {
    console.log("*******  este libro no lo has leido   ******** \n");
  }
}

// 11.- Haz una clase llamada Persona que siga las siguientes condiciones:
//      Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
//      calcularIMC()
//      esMayorDeEdad()
//      El constructor pide nombre, edad,sexo,peso y altura
//      Generar el RFC a partir de el nombre, edad y sexo

class Persona {
  constructor(nombre, edad, RFC, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.RFC = RFC;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    console.log("inside IMC()");
    return this.peso / (this.altura * this.altura);
  }

  esMayordeEdad() {
    if (this.edad >= 18) {
      console.log("Es mayor!");
      return true;
    } else {
      console.log("Es menor!");
      return false;
    }
  }
}

// Persona.prototype.calcularIMC = function() {
//   console.log("inside IMC()");
//   imc = this.peso / (this.altura * this.altura);
//   console.log(imc);
//   return imc;
// };

persona1 = new Persona("a", 2, 2, "m", 123, 1.2);
console.log(persona1.altura);

persona1.calcularIMC();
persona1.esMayordeEdad();

// 12.- Crear una clase Cuenta que tenga los siguientes atributos y metodos:
//      -Titular y cantidad
//      -ingresar(cantidad)
//      -retirar(cantidad)
//      Hacer las validaciones previas
//      Como regla de negocio no debe de tener más de $900 y menos de $10

class Cuenta {
  constructor(titular, cantidad) {
    this.titular = titular;
    this.cantidad = cantidad;
  }
}

Cuenta.prototype.ingresar = function() {};
Cuenta.prototype.retirar = function() {};
