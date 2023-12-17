// Array de productos
const productos = [
  { nombre: "Ford", precio: 25000 },
  { nombre: "Chevrolet", precio: 22000 },
  { nombre: "Toyota", precio: 28000 }
];

// Carrito de compras
let carrito = [];
let total = 0;

// Función para agregar producto al carrito
function agregarAlCarrito(nombre, precio) {
  const producto = { nombre, precio };
  carrito.push(producto);
  total += precio;
  actualizarCarrito();
}

// Función para vaciar el carrito
function vaciarCarrito() {
  carrito = [];
  total = 0;
  actualizarCarrito();
}

// Función para actualizar la interfaz del carrito
function actualizarCarrito() {
  const listaCarrito = document.getElementById('listaCarrito');
  const totalElement = document.getElementById('total');

  // Limpiar la lista
  listaCarrito.innerHTML = '';

  // Actualizar la lista
  carrito.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = ${index + 1}. ${item.nombre} - $${item.precio};
      listaCarrito.appendChild(li);
  });

  // Actualizar el total
  totalElement.textContent = total;
}