/* ============================================================
   Validación del formulario de contacto
   Script basado en la documentación de Bootstrap 5 (Forms > Validation):
   https://getbootstrap.com/docs/5.3/forms/validation/
   ============================================================ */
(() => {
  'use strict';

  // Todos los formularios que lleven la clase .needs-validation
  const formularios = document.querySelectorAll('.needs-validation');

  Array.from(formularios).forEach(formulario => {
    formulario.addEventListener('submit', evento => {
      // Siempre se frena el envío: no hay servidor que reciba los datos
      evento.preventDefault();

      if (!formulario.checkValidity()) {
        // Hay campos inválidos: no se continúa
        evento.stopPropagation();
        formulario.classList.add('was-validated');
        return;
      }

      // Todo en orden: se muestra la confirmación y se limpia el formulario
      document.getElementById('form-ok').classList.remove('d-none');
      formulario.reset();
      formulario.classList.remove('was-validated');
    }, false);
  });
})();
