
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

function validarGenero(genero, errorElement, mensaje) {
    let seleccionado = false;
    for (let i = 0; i < genero.length; i++) {
        if (genero[i].checked) {
            seleccionado = true;
            break;
        }
    }

    if (!seleccionado) {
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
        duration: 3000,            // Duración: 3 segundos
        gravity: "top",             // Posición: arriba
        position: "right",          // Alineación: derecha
        style: {
            background: "rgba(0, 128, 0, 0.8)",  // Verde con transparencia
            color: "#fff",                      // Texto blanco
            borderRadius: "12px",               // Esquinas redondeadas
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Sombra ligera
            padding: "12px 20px"               // Más relleno
        },
        stopOnFocus: true, // No desaparecer al pasar el mouse
    }).showToast();
}

// Función principal que valida todo el formulario
function validarFormulario() {

    const inputNombres = document.getElementById('nombresMedico');
    const inputApellidos = document.getElementById('apellidosMedico');

    const labelErrorNombres = document.getElementById('errorNombres');
    const labelErrorApellidos = document.getElementById('errorApellidos');


    const nombresValidos = validarLongitud(inputNombres, labelErrorNombres, 1, 20, 'El nombre debe tener entre 1 y 20 caracteres');
    const apellidosValidos = validarLongitud(inputApellidos, labelErrorApellidos, 1, 20, 'El apellido debe tener entre 1 y 20 caracteres');

    // Si todas las validaciones son correctas, se devuelve true y se puede enviar el formulario al servidor
    if (nombresValidos && apellidosValidos) {
        mostrarMensajeExito();
        const formulario = document.getElementById('formularioContacto');
        formulario.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
            formulario.reset();
        }, 2000);
        return false; // Evita el envío del formulario
    } else {

        alert('Por favor, complete correctamente el formulario.');
        return false; // Bloquea el envío del formulario
    }
}

function validarCamposAlCambiarFoco() {
    const inputNombres = document.getElementById('nombresMedico');
    const inputApellidos = document.getElementById('apellidosMedico');

    const labelErrorNombres = document.getElementById('errorNombres');
    const labelErrorApellidos = document.getElementById('errorApellidos');
    
    inputNombres.addEventListener('blur', () => validarLongitud(inputNombres, labelErrorNombres, 1, 20, 'El nombre debe tener entre 1 y 20 caracteres.'));
    inputNombres.addEventListener('blur', () => validarCampoObligatorio(inputNombres, labelErrorNombres, 'El nombre es obligatorio.'));

    inputApellidos.addEventListener('blur', () => validarLongitud(inputApellidos, labelErrorApellidos, 1, 20, 'El apellido debe tener entre 1 y 20 caracteres.'));
    inputApellidos.addEventListener('blur', () => validarCampoObligatorio(inputApellidos, labelErrorApellidos, 'El apellido es obligatorio.'));

}

document.addEventListener('DOMContentLoaded', validarCamposAlCambiarFoco);

