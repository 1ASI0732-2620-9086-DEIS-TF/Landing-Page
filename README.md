# VetPass — Historial Saludable, Mascotas Más Felices

VetPass es una plataforma web y móvil diseñada para digitalizar integralmente la cartilla de vacunación y el historial clínico veterinario de perros y gatos[cite: 1]. Su propósito es eliminar la dependencia de documentos físicos en papel propensos a extravío o deterioro físico, centralizando el expediente sanitario del animal entre la clínica veterinaria tratante y el dueño responsable[cite: 1].

---

## Descripción del Proyecto

En el contexto veterinario actual, la información de las mascotas suele dividirse entre fichas manuscritas archivadas en consultorios y cartillas físicas en manos de los dueños[cite: 1]. VetPass unifica estos flujos:

* **Para las clínicas:** Una solución web donde el personal veterinario registra consultas médicas, aplica esquemas de vacunación estandarizados y genera recetas médicas de manera estructurada[cite: 1].
* **Para los dueños de mascotas:** Una aplicación móvil de solo lectura que permite auditar en tiempo real el estado sanitario (vacunas al día, pendientes o vencidas), revisar recetas e historial de atenciones clínicas en cualquier momento[cite: 1].

---

## Características Técnicas

* **Generación Automática de Cartillas:** Creación inmediata del calendario de vacunación según la especie (canina o felina) a partir de una plantilla predefinida[cite: 1].
* **Control de Reglas Sanitarias:** Validación de edad mínima e intervalos obligatorios entre dosis para prevenir errores de registro durante la atención.
* **Control de Acceso Basado en Roles (RBAC):** Separación estricta de privilegios: permisos de edición y registro reservados exclusivamente para el personal clínico certificado, y permisos de consulta para el dueño de la mascota[cite: 1].
* **Emisión de Recetas Digitales:** Módulo para emitir y consultar indicaciones terapéuticas vinculadas a cada encuentro clínico[cite: 1].
* **Soporte Multilingüe (i18n):** Módulo de internacionalización con alternancia fluida entre Español (`es`) e Inglés (`en`).
* **Diseño Responsivo y Accesible:** Interfaz adaptable a pantallas de escritorio, tablets y dispositivos móviles con scroll interactivo y mapas embebidos.

---

## Tecnologías Utilizadas

* **HTML5:** Estructura semántica de la landing page y componentes de interfaz.
* **CSS3:** Estilos personalizados, CSS Grid, Flexbox, variables CSS nativas, animaciones suaves y media queries adaptativas.
* **JavaScript (Vanilla JS - ES6+):** Lógica interactiva para el menú móvil, acordeón de preguntas frecuentes (FAQ), animaciones mediante `IntersectionObserver`, scroll dinámico y motor de traducción i18n cliente.
* **Google Maps Embed API / iFrame:** Visualización de ubicación geográfica para la sede de contacto.
* **Font Awesome & Google Fonts:** Iconografía vectorial y tipografía optimizada (`Inter`).

---

## 📂 Estructura del Repositorio

```text
├── css/
│   └── styles.css          # Estilos globales y componentes responsivos
├── img/
│   ├── VetPass_logo.png    # Logotipo oficial de VetPass
│   └── ...                 # Recursos gráficos y fotografías de soporte
├── javascript/
│   ├── i18n.js             # Diccionario y controlador de idiomas (ES/EN)
│   └── script.js           # Lógica interactiva, animaciones y eventos del DOM
├── index.html              # Punto de entrada principal de la landing page
└── README.md               # Documentación del proyecto