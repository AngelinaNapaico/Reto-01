document.querySelectorAll('.ods-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        console.log('Se está mostrando información de:', card.querySelector('img').alt);
    });
});