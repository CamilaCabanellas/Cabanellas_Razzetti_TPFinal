/* main.js · Tabula
   Página de obras (productos.html), con jQuery y el plugin Isotope:
     1. Arma una tarjeta por cada obra del array "productos" (js/productos.js).
     2. Activa Isotope, que acomoda las tarjetas en una grilla y las filtra.
     3. Filtra por categoría al hacer clic en los botones y actualiza el contador.
   Si la página no tiene la grilla (por ejemplo index.html), el archivo no hace nada. */

// Solo corre si jQuery se cargó. $(function () { ... }) espera a que la página termine de cargar.
if (window.jQuery) $(function () {

  // Contenedor donde van las tarjetas. Si no existe en esta página, salimos.
  var $grilla = $('#grilla-obras');
  if (!$grilla.length) return;

  /* ---------- 1. TARJETAS: una por cada obra del array ---------- */
  // typeof evita un error si productos.js no se cargó
  if (typeof productos !== 'undefined') {
    // Bucle for: repite el bloque una vez por cada obra, desde la posición 0 hasta la última
    for (let i = 0; i < productos.length; i++) {
      const obra = productos[i];   // el objeto de la obra actual
      // Armamos el HTML de la tarjeta juntando texto con "+" y lo sumamos a la grilla.
      // data-categoria lo usa el filtro; data-id lo usa el botón del carrito.
      $grilla.append(
        '<div class="col-6 col-lg-3" data-categoria="' + obra.categoria + '">' +
          '<article class="obra-card">' +
            '<figure><img src="img/web/' + obra.img + '" alt="' + obra.alt + '" loading="lazy"></figure>' +
            '<div class="obra-card-cuerpo">' +
              '<h3>' + obra.titulo + '</h3>' +
              '<p class="obra-artista">' + obra.artista + '</p>' +
              '<p class="obra-tecnica">' + obra.tecnica + '</p>' +
              '<p class="obra-desc">' + obra.descripcion + '</p>' +
              '<p class="obra-precio">$ ' + obra.precio.toLocaleString('es-AR') + '</p>' +
              '<button type="button" class="btn btn-outline-dark btn-agregar" data-id="' + obra.id + '">Agregar al carrito</button>' +
            '</div>' +
          '</article>' +
        '</div>'
      );
    }
  }

  /* ---------- 2. ISOTOPE: grilla ordenable y filtrable ---------- */
  $grilla.isotope({
    itemSelector: '[data-categoria]',   // qué elementos son tarjetas
    layoutMode: 'fitRows'               // las acomoda por filas
  });

  var $contador = $('#contador-obras');   // texto "9 obras" que se actualiza al filtrar

  /* ---------- 3. FILTRO POR CATEGORÍA ---------- */
  // Al hacer clic en un botón de filtro
  $('.filtro').on('click', function () {
    var categoria = $(this).data('filtro');   // lee data-filtro del botón: "todas", "pintura", etc.
    // '*' muestra todas; si no, solo las tarjetas con esa data-categoria
    var selector = categoria === 'todas' ? '*' : '[data-categoria="' + categoria + '"]';

    $grilla.isotope({ filter: selector });

    // El botón tocado queda marcado como activo y los demás no
    $('.filtro').removeClass('activo');
    $(this).addClass('activo');

    // Contador: cuenta las tarjetas que quedaron visibles ('obra' en singular si es una sola)
    var cantidad = $grilla.isotope('getFilteredItemElements').length;
    $contador.text(cantidad + (cantidad === 1 ? ' obra' : ' obras'));
  });

  /* ---------- 4. REACOMODAR CUANDO CARGAN LAS IMÁGENES ---------- */
  // Las imágenes tardan en cargar y cambian el alto de las tarjetas: al terminar, Isotope
  // recalcula las posiciones para que no se superpongan.
  $grilla.find('img').on('load', function () { $grilla.isotope('layout'); });
});
