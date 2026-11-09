/* main.js Tabula
   Filtro de la página de obras, hecho con jQuery + el plugin Isotope */
if (window.jQuery) $(function () {

  // 1. Grilla que Isotope va a ordenar y filtrar
  var $grilla = $('#grilla-obras');
  if (!$grilla.length) return;

  // 0. Armamos una tarjeta por cada obra del array "productos" (js/productos.js)
  if (typeof productos !== 'undefined') {
    for (let i = 0; i < productos.length; i++) {
      const obra = productos[i];
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

  $grilla.isotope({
    itemSelector: '[data-categoria]',   
    layoutMode: 'fitRows'
  });

  var $contador = $('#contador-obras');

  // 2. Al hacer clic en un botón, filtro por su categoría
  $('.filtro').on('click', function () {
    var categoria = $(this).data('filtro');           
    var selector = categoria === 'todas' ? '*' : '[data-categoria="' + categoria + '"]';

    $grilla.isotope({ filter: selector });

    // botón activo
    $('.filtro').removeClass('activo');
    $(this).addClass('activo');

    // contador de obras visibles
    var cantidad = $grilla.isotope('getFilteredItemElements').length;
    $contador.text(cantidad + (cantidad === 1 ? ' obra' : ' obras'));
  });

  // 3. Las imágenes cargan después: reacomodamos cuando terminan para que no se superpongan
  $grilla.find('img').on('load', function () { $grilla.isotope('layout'); });
});
