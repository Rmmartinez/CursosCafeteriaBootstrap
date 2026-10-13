// Las reglas de validación están en el HTML (required, pattern, minlength, maxlength).
// Acá solo se muestran los errores con el estilo de Bootstrap y se abre el modal.
const form = document.getElementById('form-consulta');
const modal = new bootstrap.Modal(document.getElementById('modal-enviado'));

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }

  modal.show();
  form.reset();
  form.classList.remove('was-validated');
});
