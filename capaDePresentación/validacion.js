function validarCampoObligatorio(campo, errorElement, mensaje) {
    if (campo.value.trim() === '') {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarLongitud(campo, errorElement, min, max, mensaje) {
    if (campo.value.length < min || campo.value.length > max) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarCorreo(campo, errorElement, mensaje) {
    const correoRegex = /^[a-zA-Z0-9._%+-]+@unicauca\.edu\.co$/;
    if (!correoRegex.test(campo.value)) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function mostrarMensajeExito() {
    Toastify({
        text: "✅ ¡Registro exitoso!",
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
            background: "rgba(0, 128, 0, 0.8)",
            color: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            padding: "12px 20px"
        },
        stopOnFocus: true,
    }).showToast();
}

function validarFormulario() {
    const inputNombres = document.getElementById('nombresMedico');
    const inputApellidos = document.getElementById('apellidosMedico');
    const inputEspecialidad = document.getElementById('especialidadMedico');
    const inputHorario = document.getElementById('horarioMedico');
    const inputExperiencia = document.getElementById('experienciaMedico');

    const labelErrorNombres = document.getElementById('errorNombres');
    const labelErrorApellidos = document.getElementById('errorApellidos');
    const labelErrorEspecialidad = document.getElementById('errorEspecialidad');
    const labelErrorHorario = document.getElementById('errorHorarioMedico');
    const labelErrorExperiencia = document.getElementById('errorExperienciaMedico');

    const nombresValidos = validarCampoObligatorio(inputNombres, labelErrorNombres, 'El nombre es obligatorio') &&
        validarLongitud(inputNombres, labelErrorNombres, 1, 20, 'El nombre es obligatorio');

    const apellidosValidos = validarCampoObligatorio(inputApellidos, labelErrorApellidos, 'El apellido es obligatorio') &&
        validarLongitud(inputApellidos, labelErrorApellidos, 1, 20, 'El apellido es obligatorio');

    const especialidadValida = validarCampoObligatorio(inputEspecialidad, labelErrorEspecialidad, 'La especialidad es obligatoria');
    const horarioValido = validarCampoObligatorio(inputHorario, labelErrorHorario, 'El horario de atención es obligatorio');
    const experienciaValida = validarCampoObligatorio(inputExperiencia, labelErrorExperiencia, 'Los años de experiencia son obligatorios');

    if (nombresValidos && apellidosValidos && especialidadValida && horarioValido && experienciaValida) {
        mostrarMensajeExito();
        const formulario = document.getElementById('formMedico');
        formulario.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => formulario.reset(), 2000);
        return false;
    } else {
        alert('Por favor, complete correctamente el formulario.');
        return false;
    }
}

function validarCamposAlCambiarFoco() {
    const inputNombres = document.getElementById('nombresMedico');
    const inputApellidos = document.getElementById('apellidosMedico');
    const inputEspecialidad = document.getElementById('especialidadMedico');
    const inputHorario = document.getElementById('horarioMedico');
    const inputExperiencia = document.getElementById('experienciaMedico');

    const labelErrorNombres = document.getElementById('errorNombres');
    const labelErrorApellidos = document.getElementById('errorApellidos');
    const labelErrorEspecialidad = document.getElementById('errorEspecialidad');
    const labelErrorHorario = document.getElementById('errorHorarioMedico');
    const labelErrorExperiencia = document.getElementById('errorExperienciaMedico');

    inputNombres.addEventListener('blur', () => {
        if (!validarCampoObligatorio(inputNombres, labelErrorNombres, 'El nombre es obligatorio')) {
            return;
        }
        validarLongitud(inputNombres, labelErrorNombres, 1, 20, 'El nombre debe tener entre 1 y 20 caracteres');
    });

    inputApellidos.addEventListener('blur', () => {
        if (!validarCampoObligatorio(inputApellidos, labelErrorApellidos, 'El apellido es obligatorio')) {
            return;
        }
        validarLongitud(inputApellidos, labelErrorApellidos, 1, 20, 'El apellido debe tener entre 1 y 20 caracteres');
    });


    inputEspecialidad.addEventListener('blur', () => validarCampoObligatorio(inputEspecialidad, labelErrorEspecialidad, 'La especialidad es obligatoria'));
    inputHorario.addEventListener('blur', () => validarCampoObligatorio(inputHorario, labelErrorHorario, 'El horario de atención es obligatorio'));
    inputExperiencia.addEventListener('blur', () => validarCampoObligatorio(inputExperiencia, labelErrorExperiencia, 'Los años de experiencia son obligatorios'));
}
function validarFormularioPaciente() {
    const inputNombres = document.getElementById('nombresPaciente');
    const inputApellidos = document.getElementById('apellidosPaciente');

    const labelErrorNombres = document.getElementById('errorNombresPaciente');
    const labelErrorApellidos = document.getElementById('errorApellidosPaciente');

    const nombresValidos = validarCampoObligatorio(inputNombres, labelErrorNombres, 'El nombre es obligatorio') &&
        validarLongitud(inputNombres, labelErrorNombres, 1, 20, 'El nombre debe tener entre 1 y 20 caracteres');

    const apellidosValidos = validarCampoObligatorio(inputApellidos, labelErrorApellidos, 'El apellido es obligatorio') &&
        validarLongitud(inputApellidos, labelErrorApellidos, 1, 20, 'El apellido debe tener entre 1 y 20 caracteres');

    if (nombresValidos && apellidosValidos) {
        mostrarMensajeExito();
        const formulario = document.getElementById('formPaciente');
        formulario.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => formulario.reset(), 2000);
        return false;
    } else {
        alert('Por favor, complete correctamente el formulario de paciente.');
        return false;
    }
}

function validarCamposPacienteAlCambiarFoco() {
    const inputNombres = document.getElementById('nombresPaciente');
    const inputApellidos = document.getElementById('apellidosPaciente');

    const labelErrorNombres = document.getElementById('errorNombresPaciente');
    const labelErrorApellidos = document.getElementById('errorApellidosPaciente');

    inputNombres.addEventListener('blur', () => {
        if (!validarCampoObligatorio(inputNombres, labelErrorNombres, 'El nombre es obligatorio')) return;
        validarLongitud(inputNombres, labelErrorNombres, 1, 20, 'El nombre debe tener entre 1 y 20 caracteres');
    });

    inputApellidos.addEventListener('blur', () => {
        if (!validarCampoObligatorio(inputApellidos, labelErrorApellidos, 'El apellido es obligatorio')) return;
        validarLongitud(inputApellidos, labelErrorApellidos, 1, 20, 'El apellido debe tener entre 1 y 20 caracteres');
    });
}

function validarFormularioCita() {
    const fecha = document.getElementById('fecha');
    const horaInicio = document.getElementById('horaInicio');
    const horaFin = document.getElementById('horaFin');
    const medicoSelect = document.getElementById('medicoSelect');
    const pacienteSelect = document.getElementById('pacienteSelect');

    const labelErrorFecha = document.getElementById('errorFecha');
    const labelErrorHoraInicio = document.getElementById('errorHoraInicio');
    const labelErrorHoraFin = document.getElementById('errorHoraFin');
    const labelErrorMedico = document.getElementById('errorMedicoSelect');
    const labelErrorPaciente = document.getElementById('errorPacienteSelect');

    let valido = true;

    valido &= validarCampoObligatorio(fecha, labelErrorFecha, 'La fecha es obligatoria');
    valido &= validarCampoObligatorio(horaInicio, labelErrorHoraInicio, 'La hora de inicio es obligatoria');
    valido &= validarCampoObligatorio(horaFin, labelErrorHoraFin, 'La hora de fin es obligatoria');

    if (horaInicio.value && horaFin.value && horaFin.value <= horaInicio.value) {
        labelErrorHoraFin.textContent = 'La hora de fin debe ser mayor que la hora de inicio';
        valido = false;
    }

    valido &= validarCampoObligatorio(medicoSelect, labelErrorMedico, 'Debe seleccionar un médico');
    valido &= validarCampoObligatorio(pacienteSelect, labelErrorPaciente, 'Debe seleccionar un paciente');

    if (valido) {
        mostrarMensajeExito();
        const formulario = document.getElementById('formCitas');
        formulario.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => formulario.reset(), 2000);
        return false;
    } else {
        alert('Por favor, complete correctamente el formulario de citas.');
        return false;
    }
}

function validarCamposCitaAlCambiarFoco() {
    const fecha = document.getElementById('fecha');
    const horaInicio = document.getElementById('horaInicio');
    const horaFin = document.getElementById('horaFin');
    const medicoSelect = document.getElementById('medicoSelect');
    const pacienteSelect = document.getElementById('pacienteSelect');

    const labelErrorFecha = document.getElementById('errorFecha');
    const labelErrorHoraInicio = document.getElementById('errorHoraInicio');
    const labelErrorHoraFin = document.getElementById('errorHoraFin');
    const labelErrorMedico = document.getElementById('errorMedicoSelect');
    const labelErrorPaciente = document.getElementById('errorPacienteSelect');

    fecha.addEventListener('blur', () => validarCampoObligatorio(fecha, labelErrorFecha, 'La fecha es obligatoria'));
    horaInicio.addEventListener('blur', () => validarCampoObligatorio(horaInicio, labelErrorHoraInicio, 'La hora de inicio es obligatoria'));
    horaFin.addEventListener('blur', () => {
        if (!validarCampoObligatorio(horaFin, labelErrorHoraFin, 'La hora de fin es obligatoria')) return;
        if (horaInicio.value && horaFin.value && horaFin.value <= horaInicio.value) {
            labelErrorHoraFin.textContent = 'La hora de fin debe ser mayor que la hora de inicio';
        }
    });
    medicoSelect.addEventListener('change', () => validarCampoObligatorio(medicoSelect, labelErrorMedico, 'Debe seleccionar un médico'));
    pacienteSelect.addEventListener('change', () => validarCampoObligatorio(pacienteSelect, labelErrorPaciente, 'Debe seleccionar un paciente'));
}

document.addEventListener('DOMContentLoaded', validarCamposCitaAlCambiarFoco);

document.addEventListener('DOMContentLoaded', validarCamposPacienteAlCambiarFoco);

document.addEventListener('DOMContentLoaded', validarCamposAlCambiarFoco);
