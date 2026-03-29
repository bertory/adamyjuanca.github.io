// ===== MENÚ HAMBURGUESA =====
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer click en un enlace
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });

    // Inicializar funcionalidades
    initFormulario();
    initAnimaciones();
});

// ===== FORMULARIO DE CONTACTO =====
function initFormulario() {
    const contactoForm = document.querySelector('.contacto-form');
    if (!contactoForm) return;

    contactoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nombre = contactoForm.querySelector('input[placeholder="Tu Nombre"]').value.trim();
        const email = contactoForm.querySelector('input[placeholder="Tu Email"]').value.trim();
        const telefono = contactoForm.querySelector('input[placeholder="Tu Teléfono"]').value.trim();
        const mensaje = contactoForm.querySelector('textarea[placeholder="Tu Mensaje"]').value.trim();

        // Validaciones
        if (!nombre || !email || !telefono || !mensaje) {
            mostrarNotificacion('Por favor completa todos los campos', 'error');
            return;
        }

        if (!validarEmail(email)) {
            mostrarNotificacion('Por favor ingresa un correo válido', 'error');
            return;
        }

        if (!validarTelefono(telefono)) {
            mostrarNotificacion('Por favor ingresa un teléfono válido', 'error');
            return;
        }

        if (mensaje.length < 10) {
            mostrarNotificacion('El mensaje debe tener al menos 10 caracteres', 'error');
            return;
        }

        // Si todo es válido
        mostrarNotificacion('¡Mensaje enviado! Te contactaremos pronto.', 'success');
        contactoForm.reset();
        
        // NOTA: Aquí iría el envío a un servidor
        // En la práctica, necesitarías un backend para procesar esto
        console.log({
            nombre,
            email,
            telefono,
            mensaje
        });
    });
}

// ===== VALIDACIÓN EMAIL =====
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

// ===== VALIDACIÓN TELÉFONO =====
function validarTelefono(telefono) {
    const regexTelefono = /^[\d\s\-\+\(\)]{7,}$/;
    return regexTelefono.test(telefono);
}

// ===== NOTIFICACIONES =====
function mostrarNotificacion(mensaje, tipo) {
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion notificacion-${tipo}`;
    notificacion.textContent = mensaje;
    
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 6px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    `;

    if (tipo === 'success') {
        notificacion.style.backgroundColor = '#27ae60';
        notificacion.style.color = 'white';
        notificacion.style.borderLeft = '4px solid #229954';
    } else if (tipo === 'error') {
        notificacion.style.backgroundColor = '#e74c3c';
        notificacion.style.color = 'white';
        notificacion.style.borderLeft = '4px solid #c0392b';
    }

    document.body.appendChild(notificacion);

    // Animar entrada
    setTimeout(() => {
        notificacion.style.animation = 'slideIn 0.3s ease';
    }, 0);

    // Eliminar notificación después de 4 segundos
    setTimeout(() => {
        notificacion.style.opacity = '0';
        notificacion.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            notificacion.remove();
        }, 300);
    }, 4000);
}

// ===== ANIMACIONES AL SCROLL =====
function initAnimaciones() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animar elementos
    document.querySelectorAll('.servicio-card, .galeria-item, .ventaja-item, .stat-card, .testimonial-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });

    // Aplicar animación cuando es visible
    const style = document.createElement('style');
    style.innerHTML = `
        .servicio-card.visible,
        .galeria-item.visible,
        .ventaja-item.visible,
        .stat-card.visible,
        .testimonial-card.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// ===== LOG DE INICIALIZACIÓN =====
console.log('✅ Web Plantilla Cargada Correctamente');
console.log('👉 Edita los estilos en style.css y contenido en index.html para personalizarla');
