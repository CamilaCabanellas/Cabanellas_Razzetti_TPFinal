/* Carrito de compras. El carrito es un array con los ids de las obras elegidas.
   Los datos de cada obra (título, precio, imagen) salen del array "productos" de js/productos.js.
   Cada obra es una pieza única, por eso no hay cantidades: una obra entra una sola vez. */

let carrito = [];   // ids de las obras elegidas


/* ---------- 1. FUNCIONES DE AYUDA ---------- */

// 480000 -> "$ 480.000"
function precioEnPesos(numero) {
  return '$ ' + numero.toLocaleString('es-AR');
}

// Recorre el array "productos" y devuelve la obra que tiene ese id (o null si no la encuentra)
function buscarObra(id) {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].id === id) {
      return productos[i];
    }
  }
  return null;
}


/* ---------- 2. AGREGAR, QUITAR Y VACIAR ---------- */

function agregarAlCarrito(id) {
  if (carrito.indexOf(id) === -1) {      // -1 significa que todavía no está en el carrito
    carrito[carrito.length] = id;        // lo agregamos al final del array
  }
}

// Arma un array nuevo con todas las obras menos la que se quiere quitar
function quitarDelCarrito(id) {
  const nuevos = [];
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i] !== id) {
      nuevos[nuevos.length] = carrito[i];
    }
  }
  carrito = nuevos;
}

function vaciarCarrito() {
  carrito = [];
}


/* ---------- 3. LO QUE SE VE EN PANTALLA (jQuery) ---------- */

// Número que aparece junto al ícono del carrito en el header
function actualizarContador() {
  $('#carrito-cantidad').text(carrito.length);
  if (carrito.length === 0) {
    $('#carrito-cantidad').addClass('d-none');      // con 0 obras se oculta
  } else {
    $('#carrito-cantidad').removeClass('d-none');
  }
}

// Las obras que están en el carrito muestran "En el carrito" y no se pueden agregar de nuevo.
// Las que no están (o se quitaron) vuelven a mostrar "Agregar al carrito".
function marcarBotones() {
  const botones = $('.btn-agregar');
  for (let i = 0; i < botones.length; i++) {
    const boton = $(botones[i]);
    const id = parseInt(boton.attr('data-id'));
    if (carrito.indexOf(id) !== -1) {
      boton.text('En el carrito');
      boton.prop('disabled', true);
    } else {
      boton.text('Agregar al carrito');
      boton.prop('disabled', false);
    }
  }
}

// Panel del carrito: arma la lista de obras, la cantidad y el total
function dibujarCarrito() {
  let html = '';
  let total = 0;

  for (let i = 0; i < carrito.length; i++) {
    const obra = buscarObra(carrito[i]);
    if (obra !== null) {
      total += obra.precio;
      html +=
        '<article class="carrito-item">' +
          '<img src="img/web/' + obra.img + '" alt="' + obra.alt + '" loading="lazy">' +
          '<div class="carrito-item-info">' +
            '<h3>' + obra.titulo + '</h3>' +
            '<p class="obra-artista">' + obra.artista + '</p>' +
            '<p class="obra-tecnica">' + obra.tecnica + '</p>' +
          '</div>' +
          '<div class="carrito-item-precio">' +
            '<p class="obra-precio">' + precioEnPesos(obra.precio) + '</p>' +
            '<button type="button" class="btn-quitar" data-id="' + obra.id + '">Quitar</button>' +
          '</div>' +
        '</article>';
    }
  }

  if (carrito.length === 0) {
    html =
      '<div class="carrito-vacio">' +
        '<h3>Tu carrito está vacío</h3>' +
        '<p>Todavía no agregaste ninguna obra.</p>' +
      '</div>';
  }

  $('#carrito-lista').html(html);
  if (carrito.length === 1) {
    $('#carrito-resumen-cantidad').text('1 obra');
  } else {
    $('#carrito-resumen-cantidad').text(carrito.length + ' obras');
  }
  $('#carrito-total').text(precioEnPesos(total));
  $('#btn-vaciar').prop('disabled', carrito.length === 0);
}

// Vuelve a mostrar todo lo que depende del carrito
function actualizarPantalla() {
  marcarBotones();
  actualizarContador();
  dibujarCarrito();
}


/* ---------- 4. EVENTOS (qué pasa al hacer clic) ---------- */
/* $(function () { ... }) espera a que la página termine de cargar. */
$(function () {

  // Botón "Agregar al carrito". Se escribe sobre document porque las tarjetas de la página
  // de obras las crea main.js después de que carga la página.
  $(document).on('click', '.btn-agregar', function () {
    agregarAlCarrito(parseInt($(this).attr('data-id')));
    actualizarPantalla();
  });

  // Botón "Quitar" de cada obra del panel
  $(document).on('click', '.btn-quitar', function () {
    quitarDelCarrito(parseInt($(this).attr('data-id')));
    actualizarPantalla();
  });

  // Botón "Vaciar carrito"
  $('#btn-vaciar').on('click', function () {
    vaciarCarrito();
    actualizarPantalla();
  });

  // Al abrir la página
  actualizarPantalla();
});
