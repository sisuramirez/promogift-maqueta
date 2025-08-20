document.addEventListener('DOMContentLoaded', function() {
    
    const loadComponent = (selector, url) => {
        const element = document.querySelector(selector);
        if (!element) return;
  
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`Error al cargar ${url}`);
                return response.text();
            })
            .then(data => {
                element.innerHTML = data;
  
                if (selector === '#header-placeholder') {
                    initializeHeader();
                }
            })
            .catch(error => {
                console.error(error);
                element.innerHTML = `<p style="text-align:center; color:red;">Error cargando el componente.</p>`;
            });
    };
  
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
  
    loadComponent('#header-placeholder', 'header.html');
    loadComponent('#footer-placeholder', 'footer.html');
  
  }); 