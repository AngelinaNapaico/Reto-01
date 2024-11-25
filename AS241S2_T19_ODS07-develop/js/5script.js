// Funcionalidad para el botón
document.addEventListener("DOMContentLoaded", function () {
    const infoButton = document.getElementById('infoButton');
    
    infoButton.addEventListener('click', () => {
        // Desplazar hacia arriba
        window.scrollTo({
            top: 0, // Desplazar a la parte superior de la página
            behavior: 'smooth' // Desplazamiento suave
        });

        // Mostrar alerta después de desplazarse
        setTimeout(() => {
            alert('Gracias por tu interés. Nos pondremos en contacto contigo pronto.');
        }, 500); // Esperar medio segundo antes de mostrar la alerta
    });
});