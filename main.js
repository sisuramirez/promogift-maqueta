document.addEventListener('DOMContentLoaded', function() {
    
  // =============================================
  // SECCIÓN 1: LÓGICA PARA CARGAR COMPONENTES
  // =============================================

  /**
   * Carga un componente HTML (como header o footer) en un elemento del DOM.
   * @param {string} selector - El selector del elemento donde se cargará el componente (ej. '#header-placeholder').
   * @param {string} url - La ruta al archivo HTML del componente (ej. 'header.html').
   */
  const loadComponent = (selector, url) => {
      const element = document.querySelector(selector);
      if (!element) return; // Si no encuentra el placeholder, no hace nada

      fetch(url)
          .then(response => {
              if (!response.ok) throw new Error(`Error al cargar ${url}`);
              return response.text();
          })
          .then(data => {
              element.innerHTML = data;

              // Si acabamos de cargar el header, activamos su funcionalidad
              if (selector === '#header-placeholder') {
                  initializeHeader();
              }
          })
          .catch(error => {
              console.error(error);
              element.innerHTML = `<p style="text-align:center; color:red;">Error cargando el componente.</p>`;
          });
  };

  // =============================================
  // SECCIÓN 2: LÓGICA DEL MENÚ DE HAMBURGUESA
  // =============================================
  const initializeHeader = () => {
      const navToggle = document.querySelector('.header__toggle');
      const navMenu = document.querySelector('.header__nav');

      if (navToggle && navMenu) {
          navToggle.addEventListener('click', () => {
              navMenu.classList.toggle('header__nav--visible');
              navToggle.classList.toggle('header__toggle--active');
              document.body.classList.toggle('body--no-scroll');
          });
      }
  };

  // =============================================
  // SECCIÓN 3: LÓGICA DEL BOTÓN FLOTANTE DE WHATSAPP
  // =============================================
  const fabWhatsapp = document.getElementById('whatsapp-fab');
  if (fabWhatsapp) {
      fabWhatsapp.addEventListener('click', function (event) {
          event.preventDefault();
          const phoneNumber = '502123456790';
          const message = "Hola, estoy interesado en rentar un vehículo y me gustaría más información.";
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
          window.open(whatsappUrl, '_blank');
      });
  }

  // =============================================
  // SECCIÓN 4: EJECUCIÓN INICIAL AL CARGAR LA PÁGINA
  // =============================================
  loadComponent('#header-placeholder', 'header.html');
  loadComponent('#footer-placeholder', 'footer.html');

});