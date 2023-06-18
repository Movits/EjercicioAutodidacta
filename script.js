// alert es una función simple que muestra un cuadro de diálogo con un mensaje al usuario. Es útil cuando simplemente necesitas informar al usuario de algo, pero no necesitas su entrada //

alert("Hello World");

// confirm muestra un cuadro de diálogo con un mensaje, pero incluye botones "Aceptar" y "Cancelar" //

var respuesta = confirm("Continuar?");

if (respuesta) {
    alert("Has elegido continuar.");
} else {
    alert("Has elegido cancelar.");
}
