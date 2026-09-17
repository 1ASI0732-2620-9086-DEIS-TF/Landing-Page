document.addEventListener('DOMContentLoaded', function() {
    // Lógica para el Acordeón de Preguntas Frecuentes (FAQ)
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Cierra todos los demás
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Abre o cierra el actual
            item.classList.toggle('active');
        });
    });

    // Lógica simple para scroll suave en los enlaces del navbar
    const navLinks = document.querySelectorAll('.nav-menu a, .btn-outline, .btn-primary, .btn-white');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetAttr = this.getAttribute('href');
            // Solo actuar en enlaces internos que comienzan con "#"
            if(targetAttr && targetAttr.startsWith('#')) {
                e.preventDefault();
                const targetId = targetAttr.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Compensa la altura del navbar fijo
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Función para actualizar textos visibles en base al idioma seleccionado
function updatePageContent(lang) {
    const setText = (selector, key) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = i18n.t(key, lang);
    };

    // Navbar
    setText('.nav-menu a[href="#plataforma"]', 'nav_platform');
    setText('.nav-menu a[href="#caracteristicas"]', 'nav_features');
    setText('.nav-menu a[href="#como-funciona"]', 'nav_how');
    setText('.nav-menu a[href="#planes"]', 'nav_pricing');
    setText('.nav-menu a[href="#nosotros"]', 'nav_team');
    setText('.nav-menu a[href="#sectores"]', 'nav_sectors');
    setText('.nav-menu a[href="#contacto"]', 'nav_contact');

    // Hero
    const heroH1 = document.querySelector('.hero-content h1');
    if (heroH1) {
        heroH1.innerHTML = `${i18n.t('hero_title_before', lang)}<span class="highlight-orange">${i18n.t('hero_title_accent', lang)}</span>${i18n.t('hero_title_after', lang)}`;
    }
    setText('.hero-content p', 'hero_subtitle');
    setText('.hero-content .btn', 'hero_demo');

    // Plataforma / Propuesta
    setText('#plataforma .section-header h2', 'platform_title');
    setText('#plataforma .section-header p', 'platform_subtitle');
    const basicCards = document.querySelectorAll('#plataforma .basic-card');
    if (basicCards.length >= 3) {
        basicCards[0].querySelector('.card-label').textContent = i18n.t('value_problem_label', lang);
        basicCards[0].querySelector('p').textContent = i18n.t('value_problem_text', lang);
        basicCards[1].querySelector('.card-label').textContent = i18n.t('value_audience_label', lang);
        basicCards[1].querySelector('p').textContent = i18n.t('value_audience_text', lang);
        basicCards[2].querySelector('.card-label').textContent = i18n.t('value_benefit_label', lang);
        basicCards[2].querySelector('p').textContent = i18n.t('value_benefit_text', lang);
    }

    // Métricas
    setText('.section.bg-light .section-header h2', 'results_title');
    setText('.section.bg-light .section-header p', 'results_subtitle');
    const metricCards = document.querySelectorAll('.metric-card');
    if (metricCards.length >= 3) {
        metricCards[0].querySelector('h3').textContent = i18n.t('result_1_title', lang);
        metricCards[0].querySelector('p').textContent = i18n.t('result_1_desc', lang);
        metricCards[1].querySelector('h3').textContent = i18n.t('result_2_title', lang);
        metricCards[1].querySelector('p').textContent = i18n.t('result_2_desc', lang);
        metricCards[2].querySelector('h3').textContent = i18n.t('result_3_title', lang);
        metricCards[2].querySelector('p').textContent = i18n.t('result_3_desc', lang);
    }

    // Características
    setText('.split-bg-section .subtitle-blue', 'features_eyebrow');
    setText('.split-bg-section .section-header h2', 'features_title');
    setText('.split-bg-section .section-header p', 'features_subtitle');
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, idx) => {
        const num = idx + 1;
        const title = card.querySelector('h3');
        const desc = card.querySelector('p');
        if (title) title.textContent = i18n.t(`feature_${num}_title`, lang);
        if (desc) desc.textContent = i18n.t(`feature_${num}_desc`, lang);
    });

    // Cómo funciona
    setText('#como-funciona .section-header h2', 'how_title');
    const steps = document.querySelectorAll('.step-item');
    steps.forEach((step, idx) => {
        const num = idx + 1;
        const title = step.querySelector('h3');
        const desc = step.querySelector('p');
        if (title) title.textContent = i18n.t(`step_${num}_title`, lang);
        if (desc) desc.textContent = i18n.t(`step_${num}_desc`, lang);
    });

    // Planes
    setText('#planes .section-header h2', 'pricing_title');
    setText('#planes .section-header p', 'pricing_subtitle');
    const pCards = document.querySelectorAll('.pricing-card');
    if (pCards.length >= 3) {
        pCards[0].querySelector('h3').textContent = i18n.t('plan_1_title', lang);
        pCards[0].querySelector('.price-subtitle').textContent = i18n.t('plan_1_sub', lang);
        pCards[0].querySelector('.btn').textContent = i18n.t('plan_1_cta', lang);

        pCards[1].querySelector('h3').textContent = i18n.t('plan_2_title', lang);
        pCards[1].querySelector('.price-subtitle').textContent = i18n.t('plan_2_sub', lang);
        pCards[1].querySelector('.popular-badge').textContent = i18n.t('plan_2_badge', lang);
        pCards[1].querySelector('.btn').textContent = i18n.t('plan_2_cta', lang);

        pCards[2].querySelector('h3').textContent = i18n.t('plan_3_title', lang);
        pCards[2].querySelector('.price-subtitle').textContent = i18n.t('plan_3_sub', lang);
        pCards[2].querySelector('.price-custom').textContent = i18n.t('plan_3_price', lang);
        pCards[2].querySelector('.btn').textContent = i18n.t('plan_3_cta', lang);
    }

    // Ventajas
    setText('.advantages-content .subtitle-orange', 'advantages_eyebrow');
    setText('.advantages-content h2', 'advantages_title');
    setText('.advantages-content > p', 'advantages_subtitle');
    const advItems = document.querySelectorAll('.advantage-item');
    advItems.forEach((item, idx) => {
        const num = idx + 1;
        const title = item.querySelector('h4');
        const desc = item.querySelector('p');
        if (title) title.textContent = i18n.t(`adv_${num}_title`, lang);
        if (desc) desc.textContent = i18n.t(`adv_${num}_desc`, lang);
    });

    // Equipo
    setText('#nosotros .section-header h2', 'team_title');
    setText('#nosotros .section-header p', 'team_desc');

    // Contacto
    setText('#contacto .section-header h2', 'contact_hero_title');
    setText('#contacto .section-header p', 'contact_hero_sub');
    setText('.contact-form-side .contact-label', 'contact_form_label');
    setText('.contact-form-side .contact-desc', 'contact_form_desc');
    setText('.contact-info-side .contact-label', 'contact_info_title');
    setText('.btn-submit', 'contact_btn_submit');

    // Footer
    setText('.footer-col-brand p', 'footer_brand_desc');
    const footerTitles = document.querySelectorAll('.footer-col-links .footer-title');
    if (footerTitles.length >= 2) {
        footerTitles[0].textContent = i18n.t('footer_col_product', lang);
        footerTitles[1].textContent = i18n.t('footer_col_company', lang);
    }
    setText('.footer-bottom p', 'footer_copyright');
}

// Inicializar y cambiar estados visuales de los botones ES / EN
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = i18n.getLanguage();
    
    const updateLangButtons = (lang) => {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('lang-active');
                btn.classList.remove('lang-inactive');
            } else {
                btn.classList.add('lang-inactive');
                btn.classList.remove('lang-active');
            }
        });
    };

    updateLangButtons(currentLang);
    updatePageContent(currentLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const chosenLang = btn.dataset.lang;
            if (!chosenLang || chosenLang === i18n.getLanguage()) return;
            i18n.setLanguage(chosenLang);
            updateLangButtons(chosenLang);
            updatePageContent(chosenLang);
        });
    });
});