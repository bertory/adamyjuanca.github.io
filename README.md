# 🎯 PLANTILLA WEB EDITABLE PARA NEGOCIOS LOCALES

Esta es una plantilla profesional, moderna y completamente editable para pequeños negocios y empresas locales.

---

## 📋 GUÍA RÁPIDA DE EDICIÓN

### 1️⃣ CAMBIAR INFORMACIÓN BÁSICA (en `index.html`)

Busca las líneas con el comentario `<!-- EDITAR:` y cambia:

#### Título y Branding
```html
<!-- Línea 9 -->
<title>Mi Negocio - Servicios Profesionales</title>

<!-- Línea 18 -->
<h1>Mi Negocio</h1>
```

#### Descripción del Negocio
```html
<!-- Línea 50 -->
<h1>Bienvenido a Mi Negocio</h1>
<p>Servicios de calidad para tu comunidad local</p>
```

#### Estadísticas
```html
<!-- Reemplaza los números con los tuyos -->
<div class="stat-number">1000+</div>
<div class="stat-label">Clientes Satisfechos</div>
```

---

### 2️⃣ PERSONALIZAR SERVICIOS

En la sección `<!-- SECCIÓN SERVICIOS -->`, edita:

```html
<div class="servicio-card">
    <div class="servicio-icon">🔧</div> <!-- Cambia el emoji -->
    <h3>Servicio 1</h3> <!-- Nombre de tu servicio -->
    <p>Descripción breve...</p> <!-- Descripción -->
    <a href="#contacto" class="card-link">Solicitar →</a>
</div>
```

**Emojis útiles por tipo de negocio:**
- Reparación: 🔧 ⚙️ 🛠️
- Diseño: 🎨 ✏️ 📐
- Construcción: 🏗️ 👷 🏠
- Limpieza: 🧹 🧼 ✨
- Peluquería: ✂️ 💇 💄
- Restaurante: 🍽️ 🍕 👨‍🍳
- Jardinería: 🌿 🌱 🪴
- Informática: 💻 📱 ⌨️

---

### 3️⃣ CAMBIAR COLORES (en `style.css`)

Abre `style.css` y busca la sección `<!-- VARIABLES GLOBALES - EDITAR COLORES -->`:

```css
:root {
    --color-primary: #2c3e50;      /* Color principal (header, etc) */
    --color-secondary: #3498db;    /* Color secundario (botones) */
    --color-accent: #e74c3c;       /* Color de acento (hover) */
    --color-light: #ecf0f1;        /* Fondo claro */
}
```

**Combinaciones de colores recomendadas:**

| Negocio | Primary | Secondary | Accent |
|---------|---------|-----------|--------|
| Profesional | #2c3e50 | #3498db | #e74c3c |
| Moderno | #1a1a1a | #00d4ff | #ff006e |
| Clásico | #34495e | #16a085 | #f39c12 |
| Cálido | #8b4513 | #d68910 | #e74c3c |
| Fresco | #0984e3 | #00b894 | #fdcb6e |
| Lujo | #2c3e50 | #c9aa61 | #e74c3c |

---

### 4️⃣ DATOS DE CONTACTO

Busca la sección `<!-- SECCIÓN CONTACTO -->` y reemplaza:

```html
<strong>📍 Ubicación:</strong>
<p>Calle Principal 123, Tu Ciudad</p>

<strong>📞 Teléfono:</strong>
<p><a href="tel:+15559000000">+1 (555) 900-0000</a></p>

<strong>📧 Email:</strong>
<p><a href="mailto:info@tunegoció.com">info@tunegoció.com</a></p>

<strong>🕐 Horario:</strong>
<p>Lunes a Viernes: 9:00 AM - 6:00 PM<br>Sábado: 10:00 AM - 2:00 PM</p>
```

---

### 5️⃣ REDES SOCIALES

Busca los links y reemplaza con tus URLs:

```html
<a href="https://facebook.com/tupagina" class="social-link">Facebook</a>
<a href="https://instagram.com/tuperfil" class="social-link">Instagram</a>
<a href="https://wa.me/15559000000" class="social-link">WhatsApp</a>
```

---

### 6️⃣ GALERÍA/PORTAFOLIO

En la sección `<!-- SECCIÓN GALERÍA -->`, los gradientes son placeholders:

```html
<div class="galeria-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
```

**Opción A: Usar una imagen real**
```html
<div class="galeria-image" style="background-image: url('ruta/a/tu/imagen.jpg'); background-size: cover;"></div>
```

**Opción B: Usar Free Stock Photos**
- Pexels: pexels.com
- Unsplash: unsplash.com
- Pixabay: pixabay.com

---

### 7️⃣ TESTIMONIOS

En la sección `<!-- SECCIÓN TESTIMONIOS -->`:

```html
<div class="testimonial-card">
    <div class="stars">⭐⭐⭐⭐⭐</div>
    <p>"Tu testimonial aquí"</p>
    <strong>- Nombre del Cliente</strong>
</div>
```

---

## 🎨 COMBOS DE COLORES LISTOS

### Opción 1: Profesional Azul
```css
--color-primary: #2c3e50;
--color-secondary: #3498db;
--color-accent: #e74c3c;
```

### Opción 2: Moderno Oscuro
```css
--color-primary: #1a1a1a;
--color-secondary: #00d4ff;
--color-accent: #ff006e;
```

### Opción 3: Verde Naturaleza
```css
--color-primary: #27ae60;
--color-secondary: #16a085;
--color-accent: #f39c12;
```

### Opción 4: Naranja Cálido
```css
--color-primary: #8b4513;
--color-secondary: #d68910;
--color-accent: #e74c3c;
```

---

## ✨ FUNCIONALIDADES INCLUIDAS

✅ **Responsive**: Se adapta a móvil, tablet y desktop
✅ **Menú Hamburguesa**: Automático en dispositivos pequeños
✅ **Formulario Funcional**: Con validación de datos
✅ **Animaciones Suaves**: Al hacer scroll
✅ **Notificaciones**: Toast messages automáticas
✅ **SEO Básico**: Meta tags listos
✅ **Navegación Suave**: Scroll automático
✅ **Totalmente Editable**: Comentarios claros en el código

---

## 📝 PASOS PARA PUBLICAR

1. **Edita tu contenido**: Cambia textos, colores, datos de contacto
2. **Agrega tus imágenes**: En la galería
3. **Sube a hosting**: 
   - Alternativas gratis: Netlify, Vercel, GitHub Pages
   - Alternativas pagadas: Hostinger, Namecheap, GoDaddy

4. **Compra tu dominio**: Ej: tunegoció.com

---

## 🎯 TIPOS DE NEGOCIOS IDEALES

✅ Peluquería / Barbería
✅ Dentista / Clínica
✅ Abogado / Asesor
✅ Plomero / Electricista
✅ Diseñador Gráfico
✅ Agencia de Marketing
✅ Fotógrafo
✅ Psicólogo / Psiquiatra
✅ Veterinario
✅ Academia / Tutor
✅ Restaurante / Café
✅ Tienda Online
✅ Servicios Generales

---

## 📞 SOPORTE RÁPIDO

**¿Necesitas cambiar la fuente?**
En `style.css` busca:
```css
--font-title: 'Georgia', 'Garamond', serif;
--font-body: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

**¿Quieres más servicios?**
Simplemente copia-pega un `<div class="servicio-card">` y cambia el contenido.

**¿Necesitas más secciones?**
Contacta a un desarrollador para customización avanzada.

---

## ⚡ TIPS PROFESIONALES

1. **Usa de 2-3 colores máximo** para no saturar
2. **Emojis cautela**: Máximo 1 por sección
3. **Texto conciso**: Los clientes locales leen rápido
4. **Teléfono prominente**: Es la forma #1 de contacto local
5. **Testimonios genuinos**: Aumentan confianza
6. **Fotos de calidad**: Vale la pena invertir

---

## 📱 RESPONSIVE BREAKPOINTS

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Móvil**: 480px - 767px

---

**¡Tu web está lista! 🚀**

Edita con confianza, no hay limites. ¡A vender!
