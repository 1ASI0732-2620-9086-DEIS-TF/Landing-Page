// Función para actualizar todos los textos según el idioma
function updatePageContent(lang) {
    if (typeof i18n === 'undefined') {
        console.error('El objeto i18n no está definido. Revisa la carga de javascript/i18n.js');
        return;
    }

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

    // Tecnología y confianza
    setText('#tecnologia .section-header h2', 'tech_title');
    setText('#tecnologia .section-header p', 'tech_subtitle');
    const techCards = document.querySelectorAll('#tecnologia .basic-card');
    if (techCards.length >= 3) {
        techCards[0].querySelector('h3').textContent = i18n.t('tech_card_1_title', lang);
        techCards[0].querySelector('p').textContent = i18n.t('tech_card_1_desc', lang);
        techCards[1].querySelector('h3').textContent = i18n.t('tech_card_2_title', lang);
        techCards[1].querySelector('p').textContent = i18n.t('tech_card_2_desc', lang);
        techCards[2].querySelector('h3').textContent = i18n.t('tech_card_3_title', lang);
        techCards[2].querySelector('p').textContent = i18n.t('tech_card_3_desc', lang);
    }

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

    // Sectores Beneficiados (Selector corregido y seguro)
    const sectoresHeader = document.querySelector('#sectores .section-header h2');
    if (sectoresHeader) sectoresHeader.textContent = i18n.t('sectors_title', lang);

    const sectorCards = document.querySelectorAll('.sector-card');
    if (sectorCards.length >= 4) {
        sectorCards[0].querySelector('h4').textContent = i18n.t('sector_1_title', lang);
        sectorCards[0].querySelector('p').textContent = i18n.t('sector_1_desc', lang);
        sectorCards[1].querySelector('h4').textContent = i18n.t('sector_2_title', lang);
        sectorCards[1].querySelector('p').textContent = i18n.t('sector_2_desc', lang);
        sectorCards[2].querySelector('h4').textContent = i18n.t('sector_3_title', lang);
        sectorCards[2].querySelector('p').textContent = i18n.t('sector_3_desc', lang);
        sectorCards[3].querySelector('h4').textContent = i18n.t('sector_4_title', lang);
        sectorCards[3].querySelector('p').textContent = i18n.t('sector_4_desc', lang);
    }

    // Preguntas Frecuentes (FAQ)
    setText('.faq-container .section-header h2', 'faq_title');
    setText('.faq-container .section-header p', 'faq_subtitle');
    const faqElements = document.querySelectorAll('.faq-item');
    faqElements.forEach((item, index) => {
        const num = index + 1;
        const questionSpan = item.querySelector('.faq-question span');
        const answerP = item.querySelector('.faq-answer p');
        if (questionSpan) questionSpan.textContent = i18n.t(`faq_q_${num}`, lang);
        if (answerP) answerP.textContent = i18n.t(`faq_a_${num}`, lang);
    });

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

// Inicialización de eventos al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    // 1. Manejo del Idioma
    if (typeof i18n !== 'undefined') {
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
    }

    // 2. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) otherItem.classList.remove('active');
                });
                item.classList.toggle('active');
            });
        }
    });

    // 3. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            if (!targetId) return;
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Navbar scroll shadow
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.style.boxShadow = window.scrollY > 50 
                ? '0 4px 15px rgba(0, 0, 0, 0.12)' 
                : '0 2px 6px rgba(0, 0, 0, 0.06)';
        }
    });

    // 5. Botón Volver Arriba
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollTopBtn';
    scrollBtn.innerHTML = '&#8593;';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        scrollBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
        scrollBtn.style.alignItems = 'center';
        scrollBtn.style.justifyContent = 'center';
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});