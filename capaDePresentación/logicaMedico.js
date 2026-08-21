const formMedico = document.getElementById("formMedico");
const medicoSelect = document.getElementById("medicoSelect");
const btnAgregarMedico = document.getElementById("btnAgregarMedico");

// habilita/deshabilita el botón según la validez del formulario
formMedico.addEventListener("input", () => {
  btnAgregarMedico.disabled = !formMedico.checkValidity();
});

formMedico.addEventListener("submit", (e) => {
  e.preventDefault();

  // Capturar valores del formulario
  const nombres = document.getElementById("nombresMedico").value;
  const apellidos = document.getElementById("apellidosMedico").value;
  const especialidad = document.getElementById("especialidadMedico").value;
  const horarioAtencion = document.getElementById("horarioMedico").value;
  const aniosExperiencia = parseInt(document.getElementById("experienciaMedico").value);
  const bibliografia = document.getElementById("bibliografiaMedico").value;

  // Registrar médico con todos los atributos
  const medico = gestionarMedicos.registrarMedico(
    nombres,
    apellidos,
    especialidad,
    horarioAtencion,
    aniosExperiencia,
    bibliografia
  );

  // actualizar select
  const option = document.createElement("option");
  option.value = medico.id;
  option.textContent = `${medico.nombres} ${medico.apellidos} - ${medico.especialidad}`;
  medicoSelect.appendChild(option);

  // resetear formulario y botón
  formMedico.reset();
  btnAgregarMedico.disabled = true;

  mostrarNotificacion(`Médico ${medico.nombres} ${medico.apellidos} registrado con éxito`);
});
