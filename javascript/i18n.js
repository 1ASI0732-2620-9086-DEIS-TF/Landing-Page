const i18n = {
    defaultLanguage: 'es',
    currentLanguage: 'es',
    
    translations: {
        es: {
            // Navbar
            nav_platform: 'Plataforma',
            nav_features: 'Características',
            nav_how: '¿Cómo funciona?',
            nav_pricing: 'Planes',
            nav_team: 'Nosotros',
            nav_sectors: 'Sectores',
            nav_contact: 'Contacto',

            // Hero
            hero_title_before: 'Gestión ',
            hero_title_accent: 'Digital',
            hero_title_after: ' de tu Clínica Veterinaria',
            hero_subtitle: 'VetPass es una plataforma web y móvil que digitaliza la cartilla de vacunación y el historial veterinario de perros y gatos. Elimina la dependencia de documentos físicos expuestos a pérdida o deterioro.',
            hero_demo: 'Ver Demo',

            // Plataforma / Propuesta de Valor
            platform_title: 'Plataforma y propuesta de valor',
            platform_subtitle: 'VetPass centraliza la información clínica para que dejes de tomar decisiones médicas basadas en antecedentes incompletos.',
            value_problem_label: 'PROBLEMA',
            value_problem_text: 'Las clínicas gestionan historiales en papel y cartillas que se deterioran. El expediente queda dividido entre la clínica y el dueño de la mascota.',
            value_audience_label: 'PARA QUIÉN',
            value_audience_text: 'Clínicas veterinarias pequeñas y medianas en Perú, personal de recepción, y dueños de perros y gatos.',
            value_benefit_label: 'BENEFICIO',
            value_benefit_text: 'El personal de la clínica registra información desde una app web y el dueño la consulta desde una app móvil en cualquier momento.',

            // Métricas
            results_title: 'Resultados que Puedes Medir',
            results_subtitle: 'Impacto real en la calidad de atención y reducción de tiempos en consulta.',
            result_1_title: 'Pérdida de Información',
            result_1_desc: 'Sustituye la cartilla de vacunación física por un respaldo digital inalterable y siempre accesible.',
            result_2_title: 'Esquemas Automáticos',
            result_2_desc: 'Genera automáticamente la cartilla a partir del esquema de la especie (canina o felina).',
            result_3_title: 'Visibilidad Permanente',
            result_3_desc: 'El dueño puede consultar perfil, cartillas y recetas asociadas a la atención desde su móvil.',

            // Características
            features_eyebrow: 'FUNCIONALIDADES',
            features_title: 'Características Principales',
            features_subtitle: 'Nuestra plataforma centraliza, automatiza y protege la información de tus pacientes en un solo lugar.',
            feature_1_title: 'Historial Clínico',
            feature_1_desc: 'Permite registrar atenciones del historial veterinario mediante un formato preestablecido.',
            feature_2_title: 'Alertas Inteligentes',
            feature_2_desc: 'Determina el estado de la cartilla (al día, pendiente o vencida).',
            feature_3_title: 'Recetas Digitales',
            feature_3_desc: 'Emisión de recetas médicas asociadas a una atención.',
            feature_4_title: 'Control de Vacunas',
            feature_4_desc: 'Validación de edad mínima e intervalos entre dosis para evitar errores.',
            feature_5_title: 'Aplicación Móvil',
            feature_5_desc: 'Acceso de solo lectura para el dueño, permitiéndole consultar historial en todo momento.',
            feature_6_title: 'Seguridad y Permisos',
            feature_6_desc: 'Registro y edición de información clínica atribución exclusiva del personal.',

            // Cómo funciona
            how_title: '¿Cómo Funciona?',
            step_1_title: 'Registra la Mascota',
            step_1_desc: 'Ingresa datos y genera automáticamente la cartilla de vacunación según especie.',
            step_2_title: 'Atención Clínica',
            step_2_desc: 'El veterinario registra vacunas y detalles en el historial web.',
            step_3_title: 'Sincronización',
            step_3_desc: 'Los datos se guardan en la nube de forma segura y estructurada.',
            step_4_title: 'Consulta Móvil',
            step_4_desc: 'El dueño revisa recetas y el estado de la cartilla desde la app.',

            // Planes
            pricing_title: 'Modelos de Negocio',
            pricing_subtitle: 'Planes adaptados a clínicas veterinarias independientes.',
            plan_1_title: 'Consultorio',
            plan_1_sub: 'Para veterinarios independientes',
            plan_1_cta: 'Empezar',
            plan_2_title: 'Clínica',
            plan_2_sub: 'Para clínicas en crecimiento',
            plan_2_badge: 'Más Popular',
            plan_2_cta: 'Comenzar Ahora',
            plan_3_title: 'Red Veterinaria',
            plan_3_sub: 'Para múltiples sedes',
            plan_3_price: 'Personalizado',
            plan_3_cta: 'Solicitar Cotización',

            // Ventajas
            advantages_eyebrow: 'HISTORIAL SALUDABLE',
            advantages_title: 'Ventajas de VetPass',
            advantages_subtitle: 'Digitalización enfocada en resolver problemas reales de las clínicas peruanas.',
            adv_1_title: 'Cero Pérdidas',
            adv_1_desc: 'Evita extravíos y deterioro por fragilidad del soporte físico en papel.',
            adv_2_title: 'Información Centralizada',
            adv_2_desc: 'Termina con la información dispersa entre la clínica y el dueño.',
            adv_3_title: 'Validación Automática',
            adv_3_desc: 'Reglas exactas para especies predominantes: perros y gatos.',
            adv_4_title: 'Mejor Servicio al Cliente',
            adv_4_desc: 'Diferénciate ofreciendo al dueño de la mascota tecnología para su móvil.',

            // Equipo
            team_title: 'Nuestro Equipo',
            team_desc: 'Construimos productos de software con altos estándares de calidad, verificación continua y diseño centrado en el usuario.',

            // Contacto
            contact_hero_title: '¿Listo para Digitalizar tu Clínica Veterinaria?',
            contact_hero_sub: 'Únete a las clínicas que confían en VetPass para proteger la información de sus pacientes y brindar un mejor servicio.',
            contact_form_label: 'DÉJANOS TUS DATOS',
            contact_form_desc: 'Usa este formulario para consultas, cotizaciones o para solicitar una demo: lo revisamos y te contactamos por correo.',
            contact_lbl_name: 'Nombre',
            contact_lbl_lastname: 'Apellidos',
            contact_lbl_email: 'Correo electrónico',
            contact_lbl_country: 'País',
            contact_lbl_region: 'Departamento o región',
            contact_lbl_msg: 'Mensaje',
            contact_btn_submit: 'Enviar al equipo',
            contact_info_title: 'CONTÁCTANOS',

            // Footer
            footer_brand_desc: 'Gestión Inteligente de Información Veterinaria',
            footer_col_product: 'Producto',
            footer_col_company: 'Empresa',
            footer_copyright: '© 2026 VetPass. Todos los derechos reservados.'
        },

        en: {
            // Navbar
            nav_platform: 'Platform',
            nav_features: 'Features',
            nav_how: 'How it works',
            nav_pricing: 'Pricing',
            nav_team: 'About us',
            nav_sectors: 'Sectors',
            nav_contact: 'Contact',

            // Hero
            hero_title_before: 'Digital ',
            hero_title_accent: 'Management',
            hero_title_after: ' for Your Veterinary Clinic',
            hero_subtitle: 'VetPass is a web and mobile platform that digitizes vaccination cards and clinical history for dogs and cats. Eliminate dependence on physical records prone to loss or damage.',
            hero_demo: 'View Demo',

            // Plataforma / Propuesta de Valor
            platform_title: 'Platform and Value Proposition',
            platform_subtitle: 'VetPass centralizes medical records so you stop making clinical decisions based on incomplete backgrounds.',
            value_problem_label: 'PROBLEM',
            value_problem_text: 'Clinics manage histories on paper cards that deteriorate. The patient file is split between clinic and owner.',
            value_audience_label: 'TARGET AUDIENCE',
            value_audience_text: 'Small and medium veterinary clinics in Peru, front desk staff, and dog/cat owners.',
            value_benefit_label: 'BENEFIT',
            value_benefit_text: 'Clinic teams log data from a web app, while owners check it anytime on mobile.',

            // Métricas
            results_title: 'Measurable Results',
            results_subtitle: 'Real impact on care quality and consultation turnaround times.',
            result_1_title: 'Zero Data Loss',
            result_1_desc: 'Replace physical paper booklets with permanent, secure digital records.',
            result_2_title: 'Automated Schedules',
            result_2_desc: 'Generates species-specific vaccination schedules (canine/feline) automatically.',
            result_3_title: '24/7 Access',
            result_3_desc: 'Owners inspect profiles, cards, and clinical prescriptions directly from mobile devices.',

            // Características
            features_eyebrow: 'CORE CAPABILITIES',
            features_title: 'Key Features',
            features_subtitle: 'Our platform centralizes, automates, and secures patient medical files in one place.',
            feature_1_title: 'Clinical Records',
            feature_1_desc: 'Standardized format for veterinary consultations and historical diagnoses.',
            feature_2_title: 'Smart Alerts',
            feature_2_desc: 'Instant indicators on status: up to date, pending, or overdue vaccinations.',
            feature_3_title: 'Digital Prescriptions',
            feature_3_desc: 'Issue clinical prescriptions linked directly to each care encounter.',
            feature_4_title: 'Vaccine Validation',
            feature_4_desc: 'Enforces minimum age and required dose intervals automatically.',
            feature_5_title: 'Mobile App',
            feature_5_desc: 'Read-only access for pet owners to review records and upcoming requirements.',
            feature_6_title: 'Access Control',
            feature_6_desc: 'Clinical edits are strictly reserved for verified clinic professionals.',

            // Cómo funciona
            how_title: 'How It Works',
            step_1_title: 'Register the Pet',
            step_1_desc: 'Input patient details and generate the official vaccination card instantly.',
            step_2_title: 'Clinical Consultation',
            step_2_desc: 'Veterinarians record administered vaccines and notes on the web app.',
            step_3_title: 'Sync to Cloud',
            step_3_desc: 'Patient records update instantly across secured cloud storage.',
            step_4_title: 'Mobile Viewing',
            step_4_desc: 'Owners view prescriptions and valid statuses straight on their phones.',

            // Planes
            pricing_title: 'Business Models',
            pricing_subtitle: 'Flexible tiers tailored for independent animal practices.',
            plan_1_title: 'Solo Practice',
            plan_1_sub: 'For independent practitioners',
            plan_1_cta: 'Get Started',
            plan_2_title: 'Clinic',
            plan_2_sub: 'For growing practices',
            plan_2_badge: 'Most Popular',
            plan_2_cta: 'Start Now',
            plan_3_title: 'Enterprise Network',
            plan_3_sub: 'For multi-location practices',
            plan_3_price: 'Custom',
            plan_3_cta: 'Request Quote',

            // Ventajas
            advantages_eyebrow: 'HEALTHY HISTORY',
            advantages_title: 'VetPass Advantages',
            advantages_subtitle: 'Digitization built to solve day-to-day workflow bottlenecks in clinics.',
            adv_1_title: 'Zero Losses',
            adv_1_desc: 'Prevent damage and loss common with paper records and handwritten booklets.',
            adv_2_title: 'Centralized Records',
            adv_2_desc: 'Bring together the fragments kept across separate visits into one timeline.',
            adv_3_title: 'Rule Automation',
            adv_3_desc: 'Exact immunization guidelines for predominant companion species (dogs & cats).',
            adv_4_title: 'Elevated Client Care',
            adv_4_desc: 'Stand out from competitors by offering owners digital mobility.',

            // Equipo
            team_title: 'Our Team',
            team_desc: 'We build high-standard veterinary software using verified engineering practices and user-centered design.',

            // Contacto
            contact_hero_title: 'Ready to Digitize Your Veterinary Clinic?',
            contact_hero_sub: 'Join clinics trusting VetPass to protect patient records and deliver modern service.',
            contact_form_label: 'SEND US A MESSAGE',
            contact_form_desc: 'Use this form for questions, pricing, or to request an onboarding demo.',
            contact_lbl_name: 'First Name',
            contact_lbl_lastname: 'Last Name',
            contact_lbl_email: 'Email address',
            contact_lbl_country: 'Country',
            contact_lbl_region: 'Department / Region',
            contact_lbl_msg: 'Message',
            contact_btn_submit: 'Send to Team',
            contact_info_title: 'CONTACT US',

            // Footer
            footer_brand_desc: 'Intelligent Veterinary Record Management',
            footer_col_product: 'Product',
            footer_col_company: 'Company',
            footer_copyright: '© 2026 VetPass. All rights reserved.'
        }
    },
    
    t(key, lang = null) {
        const language = lang || this.currentLanguage;
        return this.translations[language]?.[key] || this.translations[this.defaultLanguage]?.[key] || key;
    },
    
    setLanguage(language) {
        if (this.translations[language]) {
            this.currentLanguage = language;
            localStorage.setItem('vetpass_lang', language);
        }
    },
    
    getLanguage() {
        return this.currentLanguage;
    }
};

if (typeof window !== 'undefined') {
    i18n.setLanguage(localStorage.getItem('vetpass_lang') || 'es');
}