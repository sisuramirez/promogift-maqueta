// El atributo "defer" se asegura de que este código se ejecute solo después 
// de que el HTML haya sido completamente analizado, por lo que podemos acceder 
// a todos los elementos sin problemas.

// 1. Seleccionamos todos los elementos que queremos animar.
const cardsToAnimate = document.querySelectorAll('.product-card');

// 2. Creamos una instancia del observador de intersecciones.
// Este objeto "observará" los elementos y ejecutará una función cuando cambie su visibilidad.
const observer = new IntersectionObserver(entries => {
    // La función se ejecuta para cada elemento que empieza o deja de ser observado.
    entries.forEach(entry => {
        // La propiedad 'isIntersecting' es 'true' si el elemento está en la pantalla.
        if (entry.isIntersecting) {
            // Si la tarjeta es visible, le añadimos la clase 'visible' para activar la animación CSS.
            entry.target.classList.add('visible');
            // Opcional: una vez que la tarjeta es visible, dejamos de observarla para mejorar el rendimiento.
            observer.unobserve(entry.target);
        }
    });
}, {
    // threshold (umbral): Define qué porcentaje del elemento debe ser visible para disparar la animación.
    // 0.2 significa que la animación se activará cuando el 20% de la tarjeta esté visible.
    threshold: 0.2
});

// 3. Le decimos al observador que empiece a "vigilar" cada una de las tarjetas que seleccionamos.
cardsToAnimate.forEach(card => {
    observer.observe(card);
});