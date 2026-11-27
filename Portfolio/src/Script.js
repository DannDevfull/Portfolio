// Seletores dos botões de tema e idioma (cada ícone é buscado dentro do próprio botão para evitar conflito)
const seletor = document.querySelector('.btn-theme');
const themeIcon = seletor.querySelector('i');
const langButton = document.querySelector('.btn-lang');
const langLabel = langButton.querySelector('span');

// Dicionário com os textos da página em português e inglês mapeados pelos atributos data-i18n
const translations = {
    pt: {
        'nav.about': 'Sobre mim',
        'nav.tech': 'Tecnologias',
        'nav.projects': 'Projetos',
        'nav.contact': 'Contatos',
        'home.role': 'Desenvolvedor Front-end',
        'home.description':
            'Sou estudante de <span class="high">Desenvolvimento Web Front-End</span>, dedicado à criação de interfaces modernas, responsivas e intuitivas. Busco unir boas práticas de desenvolvimento, organização de código e atenção à experiência do usuário, enquanto aprimoro minhas habilidades por meio de projetos práticos e aprendizado contínuo.',
        'home.viewProjects': 'Ver Projetos',
        'home.downloadResume': 'Baixar Currículo',
        'about.title': 'Sobre mim',
        'about.p1':
            'Sou estudante de <span class="high">Desenvolvimento Web com foco em Front-End</span>, dedicado a transformar ideias em interfaces digitais funcionais, intuitivas e visualmente bem estruturadas.',
        'about.p2':
            'Atualmente, aprofundo meus estudos em <span class="high">HTML, CSS e JavaScript</span>, além de utilizar Git e GitHub para versionamento e organização dos meus códigos. Meu objetivo constante é desenvolver soluções que conciliem design moderno, acessibilidade e responsividade.',
        'about.p3':
            'Acredito que a evolução técnica acontece na prática e na resolução de problemas reais. Neste portfólio, compartilho alguns dos meus projetos e minha trajetória de evolução contínua.',
        'tech.title': 'Ferramentas e tecnologias',
        'projects.title': 'Projetos',
        'projects.p1.alt': 'Prévia da Landing Page Brasa Burger',
        'projects.p1.title': 'Landing Page Brasa Burger',
        'projects.p1.desc':
            'Projeto demonstrativo feito em HTML, CSS e JavaScript. Marca fictícia desenvolvida para fins de estudo e demonstração de habilidades em desenvolvimento front-end com design moderno e responsivo.',
        'projects.p2.alt': 'Prévia da Página PageDrinks',
        'projects.p2.desc':
            'Página interativa e dinâmica de bebidas, desenvolvida em HTML, CSS e JavaScript com layout fluido e foco na experiência visual do usuário.',
        'projects.p3.alt': 'Prévia da Landing Page Maison Aurèle',
        'projects.p3.desc':
            'Website demonstrativo feito em HTML, CSS e JavaScript de um restaurante. Essa é uma Marca fictícia desenvolvida para fins de estudo e demonstração de habilidades em desenvolvimento front-end.',
        'projects.live': 'Veja em tempo real',
        'projects.code': 'Veja o código',
        'projects.more': 'Novos Projetos em desenvolvimento',
        'contact.title': 'Contatos',
        'contact.invitation': 'Tem um projeto em mente? Me contate, estou disponível.',
        'footer.rights': '2026 Danilo Silva. Todos os direitos reservados',
        'footer.backToTop': 'Voltar ao topo'
    },
    en: {
        'nav.about': 'About Me',
        'nav.tech': 'Technologies',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'home.role': 'Front-End Developer',
        'home.description':
            'I am a <span class="high">Front-End Web Development</span> student dedicated to creating modern, responsive, and intuitive interfaces. I strive to combine development best practices, code organization, and attention to user experience while improving my skills through practical projects and continuous learning.',
        'home.viewProjects': 'View Projects',
        'home.downloadResume': 'Download Resume',
        'about.title': 'About Me',
        'about.p1':
            'I am a <span class="high">Web Development student focused on Front-End</span>, dedicated to turning ideas into functional, intuitive, and visually well-structured digital interfaces.',
        'about.p2':
            'Currently, I am deepening my studies in <span class="high">HTML, CSS, and JavaScript</span>, while also using Git and GitHub for version control and code organization. My ongoing goal is to develop solutions that combine modern design, accessibility, and responsiveness.',
        'about.p3':
            'I believe that technical growth happens through practice and real-world problem-solving. In this portfolio, I share some of my projects and my journey of continuous development.',
        'tech.title': 'Tools and Technologies',
        'projects.title': 'Projects',
        'projects.p1.alt': 'Preview of the Brasa Burger Landing Page',
        'projects.p1.title': 'Brasa Burger Landing Page',
        'projects.p1.desc':
            'A demonstration project built with HTML, CSS, and JavaScript. This fictional brand was created for study purposes to showcase front-end development skills with a modern, responsive design.',
        'projects.p2.alt': 'Preview of PageDrinks',
        'projects.p2.desc':
            "An interactive and dynamic drinks page built with HTML, CSS, and JavaScript, featuring a fluid layout and a focus on the user's visual experience.",
        'projects.p3.alt': 'Preview of Maison Aurèle',
        'projects.p3.desc':
            'A demonstration restaurant website built with HTML, CSS, and JavaScript. This is a fictional brand created for study purposes to showcase front-end development skills.',
        'projects.live': 'View Live',
        'projects.code': 'View Code',
        'projects.more': 'New projects in development',
        'contact.title': 'Contact',
        'contact.invitation': "Have a project in mind? Contact me — I'm available.",
        'footer.rights': '2026 Danilo Silva. All rights reserved',
        'footer.backToTop': 'Back to top'
    }
};

// Recupera o idioma salvo anteriormente; por padrão inicia em português
let currentLang = 'pt';

try {
    const savedLang = localStorage.getItem('portfolio-lang');
    if (savedLang === 'en' || savedLang === 'pt') {
        currentLang = savedLang;
    }
} catch {
    // Mantém o idioma padrão caso o localStorage esteja indisponível
}

// Aplica o idioma selecionado atualizando o <html lang>, textos simples, trechos com HTML interno e atributos alt
function applyLanguage(lang) {
    const dict = translations[lang];
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-br';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
        const key = el.getAttribute('data-i18n-alt');
        if (dict[key] !== undefined) {
            el.setAttribute('alt', dict[key]);
        }
    });

    // Atualiza o rótulo do botão de idioma e os atributos de acessibilidade conforme o idioma ativo
    if (lang === 'en') {
        langLabel.textContent = 'PT';
        langButton.setAttribute('aria-label', 'Mudar idioma para Português');
        langButton.setAttribute('title', 'Switch to Portuguese');
        seletor.setAttribute('aria-label', 'Toggle theme');
        seletor.setAttribute('title', 'Toggle theme');
    } else {
        langLabel.textContent = 'EN';
        langButton.setAttribute('aria-label', 'Switch language to English');
        langButton.setAttribute('title', 'Switch to English');
        seletor.setAttribute('aria-label', 'Alternar tema');
        seletor.setAttribute('title', 'Alternar tema');
    }
}

// Alterna entre tema claro e escuro, trocando o ícone de lua/sol
seletor.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        themeIcon.className = 'fa-solid fa-sun';
    } else {
        themeIcon.className = 'fa-solid fa-moon';
    }
});

// Alterna o idioma entre 'pt' e 'en' ao clicar no botão e salva a preferência no navegador
langButton.addEventListener('click', function () {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    applyLanguage(currentLang);

    try {
        localStorage.setItem('portfolio-lang', currentLang);
    } catch {
        // Ignora erros de armazenamento em ambientes restritos
    }
});

// Se havia um idioma salvo diferente do padrão, aplica a tradução ao carregar a página
if (currentLang !== 'pt') {
    applyLanguage(currentLang);
}
