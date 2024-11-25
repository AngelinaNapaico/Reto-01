// Esperar a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el contenedor del mensaje de bienvenida
    const welcomeText = document.querySelector('.animated-text');
    const content = document.querySelector('.content');
    const body = document.body; // Obtener el cuerpo del documento

    // Establecer un tiempo de espera para ocultar el mensaje de bienvenida
    setTimeout(function () {
        // Hacer que el texto de bienvenida se desvanezca
        welcomeText.style.opacity = '0'; 

        // Cambiar el color de fondo a transparente
        body.style.backgroundColor = 'transparent'; 

        // Mostrar el contenido después de la animación
        setTimeout(function () {
            welcomeText.style.display = 'none'; // Ocultar el mensaje de bienvenida
            content.style.display = 'block'; // Mostrar el contenido de la página
        }, 2000); // Tiempo en milisegundos para esperar antes de mostrar el contenido (2 segundos)
    }, 8000); // Tiempo en milisegundos (8000 ms = 8 segundos) para mantener el mensaje visible
});