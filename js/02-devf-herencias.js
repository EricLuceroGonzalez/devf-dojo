// Herencia -

class Animal {
  constructor(brain, legs) {
    this.brain = true;
    this.legs = 0;
  }
}

// instanciamos esta clase para generar otro objeto
const human = new Animal();
console.log(this.human);

class Humano extends Animal {
  constructor(arms, legs, brain) {
    super(brain);
    this.arms = arms;
    this.legs = legs;
  }
}

class Mascota extends Animal {
  constructor(fleas, brain) {
    super(brain);
    this.fleas = fleas;
    this.legs = 4;
  }
}

// ---------------------------------

// 1. Hacer superclase Maestro y subclases Maestro de Física y
//   Maestro de Música y a cada uno asignarle su materia y
//   calcular su promedio de grupo a partir de calificaciones
//   (puedes usar arreglos). El maestro de física tiene un
//   atributo "antiguedad" que guarda un valor numerico,
//   mientras que el maestro de música tiene un atributo "edad"
//   también guardando un valor numérico.

class Maestro {
  constructor(materia, calificaciones) {
    this.materia = materia;
    this.calificaciones = calificaciones;
  }
}

class Fisica extends Maestro {
  constructor(antiguedad, calificaciones) {
    super();
    this.materia = "Fisica";
    this.antiguedad = antiguedad;
    this.calificaciones = calificaciones;
  }
}

class Musica extends Maestro {
  constructor(edad, calificaciones) {
    super();
    this.materia = "Musica";
    this.edad = edad;
    this.calificaciones = calificaciones;
  }
}

prof_fisica = new Fisica(2, [3, 1, 2, 4]);
prof_musica = new Musica(2, [30, 10, 20, 40]);

console.log(prof_fisica);
console.log(prof_musica);

// 2.- Crea una superclase llamada Electrodoméstico con las siguientes características:
// a. Sus atributos son precio, color, consumoEnergetico y capacidad (peso máximo)
// b. El constructor solo debe pedir precio, color y capacidad.
// c. consumoEnergetico debe iniciar con valor de 100

class Electrodomestico {
  constructor(precio, color, capacidad) {
    this.precio = precio;
    this.color = color;
    this.capacidad = capacidad;
    this.consumoEnergetico = 100;
  }
}

class Lavadora extends Electrodomestico {
  constructor(carga, precio, color, capacidad, consumoEnergetico) {
    super();
    this.carga = carga;
    this.precio = precio;
    this.color = color;
    this.capacidad = capacidad;
    this.consumoEnergetico = consumoEnergetico;
  }
  precioFinal() {
    return this.consumoEnergetico * this.carga;
  }
}

lavadora_1 = new Lavadora(1, 2, 3, 4, 5, 6);
console.log(lavadora_1);

console.log("precio final: " + lavadora_1.precioFinal());

// 4.- Crear una clase Bebida que herede a dos clases Cerveza y Refresco.
//     Ambas clases deben tener la propiedad cantidad (ml).
//     La clase Refresco debe tener el atributo azucar(g) y la clase Cerveza debe el atributo
//     porcentajeAlcohol. Crear los getters y setters

class Bebida {
  constructor(cantidad) {
    this.cantidad = 100;
  }
}

class Refresco extends Bebida {
  constructor(azucar, cantidad) {
    super(cantidad);
    this.azucar = azucar;
  }
  setCantidad() {
    this.cantidad = newCantidad;
  }
  getCantidad() {
    return this.cantidad;
  }
}

class Cerveza extends Bebida {
  constructor(porcentaeAlcohol, cantidad) {
    super(cantidad);
    this.porcentaeAlcohol = porcentaeAlcohol;
  }
  setCantidad() {
    this.cantidad = newCantidad;
  }
  getCantidad() {
    return this.cantidad;
  }
}

cerbesa_1 = new Cerveza(6.5);
refresco_1 = new Refresco(900);
console.log(cerbesa_1);
console.log(refresco_1);

// 5.- Crear la clase construcción que hereda a otras dos clases "casa" y "edificio".
//    a. Sus atributos son: numPuertas, numVentanas, numPisos, direccion, altura, largo y ancho del terreno.
//    b. Cada uno tiene un metodo que regresa los metros cuadrados
//    c. Un metodo debe regresar la direccion
//    d. Un metodo debe permitir modificar la direccion
//    e. Buscar la mejor manera de aprovechar la herencia

class Construccion {
  constructor(direccion) // numPuertas,
  // numVentanas,
  // numPisos,
  // altura,
  // largo,
  // ancho
  {
    this.numPuertas = 0;
    this.numVentanas = 0;
    this.numPisos = 0;
    this.direccion = direccion;
    this.altura = 0;
    this.largo = 0;
    this.ancho = 0;
  }
}

class Casa extends Construccion{
  constructor(
    numPuertas,
    numVentanas,
    numPisos,
    direccion,
    altura,
    largo,
    ancho
  ) {
    // super();
    this.numPuertas = numPuertas;
    this.numVentanas = numVentanas;
    this.numPisos = numPisos;
    this.direccion = direccion;
    this.altura = altura;
    this.largo = largo;
    this.ancho = ancho;
  }
  direccion() {
    return console.log("Direcion:     ");
  }
  setDireccion(newDireccion) {
    return (this.direccion = newDireccion);
  }
  getSuperficie() {
    return this.ancho * this.largo;
  }
}

casa_1 = new Casa(1, 2, 3, "aaa", 5, 6, 7);
// casa_1 = new Casa(1, 2, 3, 'bbb', 5, 10, 7);

console.log(casa_1);
console.log("superficie = " + casa_1.getSuperficie());
console.log("direccion = " + casa_1.setDireccion("ccc"));
console.log(casa_1);
