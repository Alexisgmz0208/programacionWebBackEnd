var formulario = document.getElementById('formulario');
var cons = formulario.opciones.value;

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var terminos = document.getElementById("terminos").checked;
    var errorMessage = "";

    // Validar campos del formulario
    if (nombre === "" || apellido === "" || correo === "") {
        errorMessage = "Todos los campos son obligatorios.";
    } else if (!validateEmail(correo)) {
        errorMessage = "Por favor, ingresa un correo electrónico válido.";
    } else if (!terminos) {
        errorMessage = "Debes aceptar los términos y condiciones.";
    } else {
        alert("Formulario enviado exitosamente");
        // Aquí puedes agregar el código para enviar el formulario
    }

    if (errorMessage) {
        alert(errorMessage);
    }
});

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
