

const ford = { 
  nombre: "Ford", 
  precio: 25000, 
};
const chevrolet = { 
  nombre: "Chevrolet", 
  precio: 22000, 
};
const toyota = { 
  nombre: "Toyota", 
  precio: 28000, 
};


let carrito = [];



function mostrarOpciones() {
  const opciones =
    "1. Ford - $25,000\n" +
    "2. Chevrolet - $22,000\n" +
    "3. Toyota - $28,000\n" +
    "4. Ver carrito\n" +
    "5. Pagar y salir";

  const opcion = prompt(opciones);

  switch (opcion) {
    case '1':
      agregarAlCarrito(ford);
      break;
    case '2':
      agregarAlCarrito(chevrolet);
      break;
    case '3':
      agregarAlCarrito(toyota);
      break;
    case '4':
      mostrarCarrito();
      break;
    case '5':
      pagarYSalir();
      return;
    default:
      alert("Opción no válida. Por favor, selecciona una opción válida.");
  }


  mostrarOpciones();
}


function agregarAlCarrito(marca) {
  carrito.push(marca);
  alert(`${marca.nombre} agregado al carrito.`);
}

function mostrarCarrito() {
  let mensaje = "Marcas en el carrito:\n";
  for (let i = 0; i < carrito.length; i = i + 1) {
    mensaje += `${i + 1}. ${carrito[i].nombre} - $${carrito[i].precio}\n`;
  }
  alert(mensaje);
}


function pagarYSalir() {
  mostrarCarrito();
  const precioTotal = calcularPrecioTotal();
  alert(`Precio total del carrito: $${precioTotal}\n¡Gracias por tu compra! Vuelve pronto.`);

  carrito = [];
}


function calcularPrecioTotal() {
  let precioTotal = 0;
  for (let i = 0; i < carrito.length; i = i + 1 ) {
    precioTotal += carrito[i].precio;
  }
  return precioTotal;
}
mostrarOpciones();












 // Definir objetos para representar marcas de autos
 /*const ford = { nombre: 'Ford', precio: 25000 };
 const chevrolet = { nombre: 'Chevrolet', precio: 22000 };
 const toyota = { nombre: 'Toyota', precio: 28000 };
 
 // Array para almacenar las marcas seleccionadas en el carrito
 let carrito = [];
 
 
 
 // Función para mostrar las opciones y manejar la interacción
 function mostrarOpciones() {
   const opciones =
     "1. Ford - $25,000\n" +
     "2. Chevrolet - $22,000\n" +
     "3. Toyota - $28,000\n" +
     "4. Ver carrito\n" +
     "5. Pagar y salir";
 
   const opcion = prompt(opciones);
 
   switch (opcion) {
     case '1':
       agregarAlCarrito(ford);
       break;
     case '2':
       agregarAlCarrito(chevrolet);
       break;
     case '3':
       agregarAlCarrito(toyota);
       break;
     case '4':
       mostrarCarrito();
       break;
     case '5':
       pagarYSalir();
       return;
     default:
       alert("Opción no válida. Por favor, selecciona una opción válida.");
   }
 
   // Volver a mostrar opciones
   mostrarOpciones();
 }
 
 // Función para agregar una marca al carrito
 function agregarAlCarrito(marca) {
   carrito.push(marca);
   alert(`${marca.nombre} agregado al carrito.`);
 }
 
 // Función para mostrar el contenido actual del carrito
 function mostrarCarrito() {
   let mensaje = "Marcas en el carrito:\n";
   for (let i = 0; i < carrito.length; i = i + 1) {
     mensaje += `${i + 1}. ${carrito[i].nombre} - $${carrito[i].precio}\n`;
   }
   alert(mensaje);
 }
 
 // Función para pagar y salir
 function pagarYSalir() {
   mostrarCarrito();
   const precioTotal = calcularPrecioTotal();
   alert(`Precio total del carrito: $${precioTotal}\n¡Gracias por tu compra! Vuelve pronto.`);
   // Puedes reiniciar el carrito aquí si lo deseas
   carrito = [];
 }
 
 // Función para calcular el precio total del carrito
 function calcularPrecioTotal() {
   let precioTotal = 0;
   for (let i = 0; i < carrito.length; i = i + 1 ) {
     precioTotal += carrito[i].precio;
   }
   return precioTotal;
 }
 mostrarOpciones();*/