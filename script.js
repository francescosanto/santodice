// https://francescosanto.github.io/santodice/

// Sistema di traduzioni
const translations = {
    it: {
        nav: {
            home: "HOME",
            services: "SERVIZI",
            about: "CHI SONO",
            sound: "IL MIO SOUND",
            projects: "PROGETTI",
            contact: "CONTATTI"
        },
        hero: {
            subtitle: "Ingegneria Audio e Produzione Musicale"
        },
        services: {
            title: "I MIEI SERVIZI",
            production: {
                title: "Produzione",
                description: "Produzione musicale completa per il tuo progetto"
            },
            mix: {
                title: "Mix",
                description: "Mix professionale per portare la tua musica al livello successivo"
            },
            mastering: {
                title: "Mastering",
                description: "Mastering di qualità per un suono perfetto su ogni piattaforma"
            },
            live: {
                title: "Live Sound",
                description: "Gestione audio professionale per eventi dal vivo"
            }
        },
        studio: {
            title: "LO STUDIO",
            subtitle: "Il tuo spazio creativo nel cuore di Varese",
            description: "Un ambiente professionale e accogliente, dotato delle migliori attrezzature audio per dare vita ai tuoi progetti musicali. Lo studio offre:",
            features: {
                equipment: "Macchine e software professionali",
                rehearsal: "Sala prove attrezzata",
                environment: "Ambiente confortevole e creativo",
                support: "Assistenza tecnica specializzata"
            },
            book: "Prenota una sessione"
        },
        about: {
            title: "CHI SONO",
            cta: "Contattami",
            text: "Il mio nome è Francesco Santo e sono un artista, produttore e ingegnere del suono con una grande passione per la musica, che è sempre stata una parte fondamentale della mia vita. Ho iniziato ad avvicinarmi a questo mondo a soli 4 anni, grazie a mia nonna. Poi, a 12 anni, ho iniziato a suonare il pianoforte e a 16 mi sono innamorato della produzione. Ho studiato pianoforte, chitarra e basso a Varese prima di trasferirmi a Bologna.\n\nNel 2022 ho avuto l'opportunità di partecipare a XFactor Italia, un'esperienza che mi ha dato una valutazione positiva di 4/4. L'anno successivo, nel 2023, ho pubblicato il mio primo album, \"Santodice\", che ho interamente composto e prodotto io stesso, un progetto nato dopo la vittoria del concorso IMAIE. L'album è come un diario, dieci \"pagine\" dove ho voluto raccontare le mie esperienze e i miei pensieri tipici della mia età, dalle relazioni alle delusioni, fino alla ricerca di stimoli positivi. \"Santodice\" mescola sonorità estive con richiami al jazz e al blues, con testi che mi hanno aiutato ad affrontare la vita con più serenità. Il primo singolo ad anticipare l'album è stato \"Ubriaco\".\n\nOltre alla musica, ho una solida formazione avendo conseguito una laurea in Fisica all'Università di Bologna nel 2023, con un voto di 98 e un certificato di competenza in Ingegneria Audio, Produzione e Composizione, valido in tutta Europa, che mi ha permesso di unire la mia passione per la musica alla conoscenza tecnica. Le mie competenze spaziano dalla registrazione in studio alla produzione, passando per la gestione di mixer analogici e digitali, fino alla composizione e all'arrangiamento.\n\nOggi compongo, mixo e produco per svariati gruppi musicali, e non vedo l'ora di collaborare anche con te."
        },
        sound: {
            title: "IL MIO SOUND"
        },
        projects: {
            title: "I MIEI PROGETTI PERSONALI",
            album: "Album",
            single: "Singolo",
            comingSoon: {
                title: "Coming Soon...",
                description: "Nuovi progetti in arrivo"
            }
        },
        contact: {
            title: "CONTATTAMI",
            email: "Email:"
        },
        footer: {
            copyright: "© 2024 SANTO. Tutti i diritti riservati."
        }
    },
    en: {
        nav: {
            home: "HOME",
            services: "SERVICES",
            about: "ABOUT",
            sound: "MY SOUND",
            projects: "PROJECTS",
            contact: "CONTACT"
        },
        hero: {
            subtitle: "Audio Engineering & Production"
        },
        services: {
            title: "MY SERVICES",
            production: {
                title: "Production",
                description: "Complete musical production for your project"
            },
            mix: {
                title: "Mixing",
                description: "Professional mixing to take your music to the next level"
            },
            mastering: {
                title: "Mastering",
                description: "Quality mastering for perfect sound on every platform"
            },
            live: {
                title: "Live Sound",
                description: "Professional audio management for live events"
            }
        },
        studio: {
            title: "THE STUDIO",
            subtitle: "Your creative space in the heart of Varese",
            description: "A professional and welcoming environment, equipped with the best audio equipment to bring your musical projects to life. The studio offers:",
            features: {
                equipment: "Professional machines and software",
                rehearsal: "Equipped rehearsal room",
                environment: "Comfortable and creative environment",
                support: "Specialized technical support"
            },
            book: "Book a session"
        },
        about: {
            title: "ABOUT ME",
            cta: "Contact Me",
            text: "My name is Francesco Santo and I am an artist, producer, and audio engineer with a great passion for music, which has always been a fundamental part of my life. I started getting closer to this world at the age of 4, thanks to my grandmother. Then, at 12, I started playing the piano and at 16 I fell in love with production. I studied piano, guitar, and bass in Varese before moving to Bologna.\n\nIn 2022, I had the opportunity to participate in XFactor Italia, an experience that gave me a positive rating of 4/4. The following year, in 2023, I released my first album, \"Santodice\", which I composed and produced entirely myself, a project born after winning the IMAIE competition. The album is like a diary, ten \"pages\" where I wanted to tell my experiences and my typical thoughts of my age, from relationships to disappointments, up to the search for positive stimuli. \"Santodice\" blends summer sounds with jazz and blues echoes, with texts that helped me face life with more serenity. The first single to anticipate the album was \"Ubriaco\".\n\nIn addition to music, I have a solid formation having obtained a degree in Physics at the University of Bologna in 2023, with a grade of 98 and a certificate of competence in Audio Engineering, Production, and Composition, valid throughout Europe, which allowed me to combine my passion for music with technical knowledge. My skills range from studio recording to production, passing through the management of analog and digital mixers, up to composition and arrangement.\n\nToday I compose, mix, and produce for various musical groups, and I can't wait to collaborate with you."
        },
        sound: {
            title: "MY SOUND"
        },
        projects: {
            title: "MY PERSONAL PROJECTS",
            album: "Album",
            single: "Single",
            comingSoon: {
                title: "Coming Soon...",
                description: "New projects coming soon"
            }
        },
        contact: {
            title: "CONTACT ME",
            email: "Email:"
        },
        footer: {
            copyright: "© 2024 SANTO. All rights reserved."
        }
    },
    es: {
        nav: {
            home: "INICIO",
            services: "SERVICIOS",
            about: "SOBRE MÍ",
            sound: "MI SONIDO",
            projects: "PROYECTOS",
            contact: "CONTACTO"
        },
        hero: {
            subtitle: "Ingeniería de Audio & Producción"
        },
        services: {
            title: "MIS SERVICIOS",
            production: {
                title: "Producción",
                description: "Producción musical completa para tu proyecto"
            },
            mix: {
                title: "Mezcla",
                description: "Mezcla profesional para llevar tu música al siguiente nivel"
            },
            mastering: {
                title: "Masterización",
                description: "Masterización de calidad para un sonido perfecto en cada plataforma"
            },
            live: {
                title: "Sonido en Vivo",
                description: "Gestión profesional de audio para eventos en vivo"
            }
        },
        studio: {
            title: "EL ESTUDIO",
            subtitle: "Tu espacio creativo en el corazón de Varese",
            description: "Un ambiente profesional y acogedor, equipado con las mejores herramientas de audio para dar vida a tus proyectos musicales. El estudio ofrece:",
            features: {
                equipment: "Máquinas y software profesionales",
                rehearsal: "Sala de ensayo equipada",
                environment: "Ambiente cómodo y creativo",
                support: "Soporte técnico especializado"
            },
            book: "Reserva una sesión"
        },
        about: {
            title: "SOBRE MÍ",
            cta: "Contáctame",
            text: "Mi nombre es Francesco Santo y soy un artista, productor y ingeniero del sonido con una gran pasión por la música, que siempre ha sido una parte fundamental de mi vida. A los 4 años, gracias a mi abuela, empecé a acercarme a este mundo. A los 12, empecé a tocar el piano y a los 16 me enamoré de la producción. Estudié piano, guitarra y bajo en Varese antes de trasladarme a Bologna.\n\nEn 2022, tuve la oportunidad de participar en XFactor Italia, una experiencia que me dio una valoración positiva de 4/4. El año siguiente, en 2023, publiqué mi primer álbum, \"Santodice\", que compuse y produje por mi cuenta, un proyecto nacido después de ganar el concurso IMAIE. El álbum es como un diario, diez \"páginas\" donde quería contar mis experiencias y mis pensamientos típicos de mi edad, desde las relaciones hasta las decepciones, hasta la búsqueda de estímulos positivos. \"Santodice\" mezcla sonidos de verano con reminiscencias del jazz y el blues, con textos que me ayudaron a enfrentarme a la vida con más serenidad. El primer sencillo que anticipó el álbum fue \"Ubriaco\".\n\nAdemás de la música, tengo una formación sólida, habiendo obtenido un título en Física en la Universidad de Bologna en 2023, con una nota de 98 y un certificado de competencia en Ingeniería de Audio, Producción y Composición, válido en toda Europa, que me permitió unir mi pasión por la música con conocimientos técnicos. Mis habilidades abarcan de la grabación en estudio a la producción, pasando por la gestión de mezcladores analógicos y digitales, hasta la composición y la armonización.\n\nHoy compongo, mezclo y produzco para varios grupos musicales, y no puedo esperar a colaborar contigo."
        },
        sound: {
            title: "MI SONIDO"
        },
        projects: {
            title: "MIS PROYECTOS PERSONALES",
            album: "Álbum",
            single: "Sencillo",
            comingSoon: {
                title: "Próximamente...",
                description: "Nuevos proyectos en camino"
            }
        },
        contact: {
            title: "CONTÁCTAME",
            email: "Email:"
        },
        footer: {
            copyright: "© 2024 SANTO. Todos los derechos reservados."
        }
    }
};

// Funzione per cambiare lingua
function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const keys = key.split('.');
        let translation = translations[language];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                translation = null;
                break;
            }
        }
        
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Aggiorna la bandiera e il testo
    updateLanguageDisplay(language);
    
    // Salva la lingua selezionata nel localStorage
    localStorage.setItem('selectedLanguage', language);
    
    // Aggiorna la sezione About al cambio lingua
    renderAboutText(language);
}

// Funzione per aggiornare la bandiera e il testo
function updateLanguageDisplay(language) {
    const currentFlagImg = document.getElementById('current-flag-img');
    const currentLang = document.getElementById('current-lang');
    const flags = {
        'it': './flags/it.svg',
        'en': './flags/en.svg',
        'es': './flags/es.svg'
    };
    const languages = {
        'it': 'IT',
        'en': 'EN',
        'es': 'ES'
    };
    
    if (currentFlagImg && currentLang && flags[language]) {
        // Aggiungi animazione
        currentFlagImg.style.transform = 'scale(1.2) rotate(180deg)';
        
        // Cambia la bandiera e il testo dopo un breve delay
        setTimeout(() => {
            currentFlagImg.src = flags[language];
            currentFlagImg.alt = `Bandiera ${language === 'it' ? 'italiana' : language === 'en' ? 'britannica' : 'spagnola'}`;
            currentLang.textContent = languages[language];
            currentFlagImg.style.transform = 'scale(1) rotate(360deg)';
        }, 150);
    }
}

// Rendering sezione ABOUT con animazione per paragrafi
function renderAboutText(language) {
    const container = document.getElementById('about-text');
    const aboutSection = document.getElementById('chi-sono');
    if (!container || !aboutSection) return;

    const lang = translations[language] ? language : 'it';
    const text = translations[lang].about.text;

    // Suddivide in paragrafi sulle doppie nuove righe
    const paragraphs = text.split(/\n\n+/);
    container.innerHTML = '';

    // Crea i nodi paragrafo
    const nodes = paragraphs.map((p, idx) => {
        const el = document.createElement('p');
        el.className = 'about-paragraph';
        el.textContent = p;
        el.style.animationDelay = `${idx * 400}ms`;
        return el;
    });
    nodes.forEach(n => container.appendChild(n));

    // Trigger animazioni quando la sezione entra in viewport
    const wrapper = container.closest('.about-content') || container;
    function inView(el) {
        const r = aboutSection.getBoundingClientRect();
        return r.top < window.innerHeight * 0.85 && r.bottom > window.innerHeight * 0.15;
    }
    function startIfVisible() {
        if (inView(aboutSection)) {
            wrapper.classList.add('animate');
            window.removeEventListener('scroll', startIfVisible);
        }
    }
    window.addEventListener('scroll', startIfVisible, { passive: true });
    // reset stato e riavvio animazione
    wrapper.classList.remove('animate');
    // forza reflow per riapplicare le animazioni in caso di cambio lingua
    // eslint-disable-next-line no-unused-expressions
    void wrapper.offsetHeight;
    startIfVisible();
}

// Inizializzazione del sistema di traduzioni
document.addEventListener('DOMContentLoaded', function() {
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageCurrent = document.getElementById('language-current');
    const languageOptions = document.getElementById('language-options');
    
    // Carica la lingua salvata o usa italiano come default
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'it';
    
    // Applica la lingua iniziale
    changeLanguage(savedLanguage);
    
    // Inizializza la sezione About
    renderAboutText(savedLanguage);
    
    // Event listener per aprire/chiudere il dropdown
    languageCurrent.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('open');
    });
    
    // Event listener per le opzioni di lingua
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function() {
            const language = this.getAttribute('data-lang');
            changeLanguage(language);
            languageDropdown.classList.remove('open');
        });
    });
    
    // Chiudi il dropdown quando si clicca fuori
    document.addEventListener('click', function() {
        languageDropdown.classList.remove('open');
    });
    
    // Previeni la chiusura quando si clicca dentro il dropdown
    languageDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

// Smooth scrolling per i link di navigazione
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.8)';
    }
});

// Hero section scroll effect
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const services = document.querySelector('.services');
    const scrollPosition = window.scrollY;
    const heroHeight = hero.offsetHeight;
    
    // Calcola la percentuale di scroll nella sezione hero
    const scrollPercentage = (scrollPosition / heroHeight) * 100;
    
    // Gestione della transizione del testo e dell'immagine
    if (scrollPercentage > 20) {
        hero.classList.add('scrolled');
    } else {
        hero.classList.remove('scrolled');
    }
    
    // Mostra la sezione servizi gradualmente
    if (scrollPercentage > 30) {
        services.classList.add('visible');
    } else {
        services.classList.remove('visible');
    }
});

// Previeni lo scroll durante la transizione
window.addEventListener('wheel', function(e) {
    if (isTransitioning) {
        e.preventDefault();
    }
}, { passive: false });

// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentSlide = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentSlide * 25}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    // Riabilito i bottoni del carosello
    nextButton.removeAttribute('disabled');
    prevButton.removeAttribute('disabled');
    nextButton.style.opacity = '';
    prevButton.style.opacity = '';
    nextButton.style.cursor = '';
    prevButton.style.cursor = '';
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
});

// Gestione delle card dei servizi
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    // Disabilito la possibilità di cliccare sulle card dei servizi
    // serviceCards.forEach(card => {
    //     card.style.pointerEvents = 'none';
    //     card.style.opacity = '0.7'; // Opzionale: effetto visivo per mostrare che sono disabilitate
    //     card.style.cursor = 'not-allowed';
    // });
    // Rimuovo tutta la logica di click
    // let activeCard = null;
    // serviceCards.forEach(card => {
    //     card.addEventListener('click', () => {
    //         if (activeCard && activeCard !== card) {
    //             activeCard.classList.remove('active');
    //         }
    //         card.classList.toggle('active');
    //         activeCard = card.classList.contains('active') ? card : null;
    //         if (card.classList.contains('active')) {
    //             card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    //         }
    //     });
    // });
    // document.addEventListener('click', (e) => {
    //     if (activeCard && !activeCard.contains(e.target)) {
    //         activeCard.classList.remove('active');
    //         activeCard = null;
    //     }
    // });
});

// Gestione dei video nella sezione progetti
document.addEventListener('DOMContentLoaded', function() {
    const videoCards = document.querySelectorAll('.video-card');
    let activeVideo = null;
    
    videoCards.forEach(card => {
        const iframe = card.querySelector('iframe');
        
        // Aggiungi l'evento click alla card
        card.addEventListener('click', () => {
            // Se c'è già un video attivo e non è quello cliccato
            if (activeVideo && activeVideo !== iframe) {
                // Metti in pausa il video attivo precedente
                activeVideo.contentWindow.postMessage('pause', '*');
            }
            
            // Se il video cliccato è già attivo, mettilo in pausa
            if (activeVideo === iframe) {
                iframe.contentWindow.postMessage('pause', '*');
                activeVideo = null;
            } else {
                // Altrimenti, riproduci il nuovo video
                iframe.contentWindow.postMessage('play', '*');
                activeVideo = iframe;
            }
        });
        
        // Gestisci il messaggio di fine riproduzione
        window.addEventListener('message', (event) => {
            if (event.data === 'ended' && event.source === iframe.contentWindow) {
                activeVideo = null;
            }
        });
    });
}); 

// Audio player per la sezione "I miei lavori"
document.addEventListener('DOMContentLoaded', function() {
    const audioFiles = [
        { titolo: 'Pop', file: 'Audio/Official/Pop.wav' },
        { titolo: 'Jazz', file: 'Audio/Official/Jazz.wav' },
        { titolo: 'Elettronica', file: 'Audio/Official/Elettronica.wav' },
        { titolo: 'Strumentale', file: 'Audio/Official/Musica Strumentale.wav' },
        { titolo: 'Assoli', file: 'Audio/Official/Assoli.wav' }
    ];
    let currentAudio = 0;
    const audioPlayer = document.getElementById('audio-player');
    const audioTitle = document.getElementById('audio-title');
    const prevBtn = document.querySelector('.audio-prev');
    const nextBtn = document.querySelector('.audio-next');

    function updateAudio() {
        audioTitle.textContent = audioFiles[currentAudio].titolo;
        audioPlayer.src = audioFiles[currentAudio].file;
        audioPlayer.load();
    }

    if (prevBtn && nextBtn && audioPlayer && audioTitle) {
        prevBtn.addEventListener('click', function() {
            currentAudio = (currentAudio - 1 + audioFiles.length) % audioFiles.length;
            updateAudio();
        });
        nextBtn.addEventListener('click', function() {
            currentAudio = (currentAudio + 1) % audioFiles.length;
            updateAudio();
        });
    }
}); 

// Avvio automatico audio nella sezione "Il mio sound"
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
    );
}

function playFirstSoundIfVisible() {
    const soundSection = document.querySelector('.sound-section');
    if (!soundSection) return;
    const audios = document.querySelectorAll('.sound-audio');
    if (isElementInViewport(soundSection)) {
        // Metto in pausa tutti
        audios.forEach((audio, idx) => {
            if (idx === 0) {
                if (audio.paused) {
                    audio.play().catch(()=>{});
                }
            } else {
                audio.pause();
                audio.currentTime = 0;
            }
        });
        // Mostra il mini player quando inizia la riproduzione
        const miniPlayer = document.getElementById('mini-player');
        if (miniPlayer) {
            miniPlayer.classList.add('active');
        }
        window.removeEventListener('scroll', playFirstSoundIfVisible);
    }
}
window.addEventListener('scroll', playFirstSoundIfVisible);
document.addEventListener('DOMContentLoaded', playFirstSoundIfVisible); 

// Carosello audio custom per 'Il mio sound'
document.addEventListener('DOMContentLoaded', function() {
    const tracce = [
        { titolo: 'Pop', file: 'Audio/Official/Pop.wav' },
        { titolo: 'Jazz', file: 'Audio/Official/Jazz.wav' },
        { titolo: 'Elettronica', file: 'Audio/Official/Elettronica.wav' },
        { titolo: 'Assoli', file: 'Audio/Official/Assoli.wav' }
    ];
    let current = 0;
    const titolo = document.getElementById('custom-audio-title');
    const audio = document.getElementById('custom-audio-element');
    const playBtn = document.getElementById('custom-audio-play');
    const playIcon = document.getElementById('custom-audio-play-icon');
    const progressBar = document.getElementById('custom-audio-progress-bar');
    const prevBtn = document.querySelector('.carousel-audio-prev');
    const nextBtn = document.querySelector('.carousel-audio-next');

    function aggiornaTraccia(play) {
        titolo.textContent = tracce[current].titolo;
        audio.src = tracce[current].file;
        progressBar.style.width = '0%';
        if (play) {
            audio.play().catch(()=>{});
            playIcon.textContent = '❚❚';
        } else {
            audio.pause();
            playIcon.textContent = '▶';
        }
        updateMiniPlayer();
    }

    playBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playIcon.textContent = '❚❚';
        } else {
            audio.pause();
            playIcon.textContent = '▶';
        }
    });

    function slideAnimation(direction, play) {
        const card = document.querySelector('.custom-audio-card');
        card.classList.remove('show', 'animating-next', 'animating-prev');
        card.classList.add(direction === 'next' ? 'animating-next' : 'animating-prev');
        setTimeout(() => {
            aggiornaTraccia(play);
            card.classList.remove('animating-next', 'animating-prev');
            card.classList.add('show');
        }, 300); // metà della durata della transizione CSS
    }

    prevBtn.addEventListener('click', function() {
        current = (current - 1 + tracce.length) % tracce.length;
        slideAnimation('prev', true);
        updateMiniPlayer();
    });
    nextBtn.addEventListener('click', function() {
        current = (current + 1) % tracce.length;
        slideAnimation('next', true);
        updateMiniPlayer();
    });

    // All'avvio, mostra la card
    document.querySelector('.custom-audio-card').classList.add('show');

    audio.addEventListener('play', function() {
        playIcon.textContent = '❚❚';
        updateMiniPlayer();
    });
    audio.addEventListener('pause', function() {
        playIcon.textContent = '▶';
        updateMiniPlayer();
    });
    audio.addEventListener('ended', function() {
        playIcon.textContent = '▶';
        progressBar.style.width = '0%';
        updateMiniPlayer();
    });
    audio.addEventListener('timeupdate', function() {
        const percent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = percent + '%';
        updateMiniPlayerProgress();
    });

        // Autoplay quando la sezione è visibile
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
      );
    }
    function playIfVisible() {
      const section = document.querySelector('.sound-section');
      if (isElementInViewport(section)) {
        aggiornaTraccia(true);
        updateMiniPlayer();
        window.removeEventListener('scroll', playIfVisible);
      }
    }
    aggiornaTraccia(false);
    window.addEventListener('scroll', playIfVisible);
    playIfVisible();
}); 

// Carosello audio 3D "Il mio sound" migliorato con audio centralizzato, icone SVG, animazione rotazione

document.addEventListener('DOMContentLoaded', function() {
  // Aggiorno la lista delle tracce con tutte quelle trovate in Audio/Official
  const tracce = [
    { titolo: 'Pop', file: 'Audio/Official/Pop.wav', cover: 'Copertine/Pop.png' },
    { titolo: 'Jazz', file: 'Audio/Official/Jazz.wav', cover: 'Copertine/Jazz.png' },
    { titolo: 'Elettronica', file: 'Audio/Official/Elettronica.wav', cover: 'Copertine/Elettronica.png' },
    { titolo: 'Assoli', file: 'Audio/Official/Assoli.wav', cover: 'Copertine/Assoli.png' }
  ];
  const defaultCover = 'https://cdn-icons-png.flaticon.com/512/727/727245.png'; // icona musicale generica
  let current = 0;
  let isPlaying = false;
  let lastDirection = null; // 'left' o 'right'

  const cardLeft = document.getElementById('carousel-left');
  const cardCenter = document.getElementById('carousel-center');
  const cardRight = document.getElementById('carousel-right');
  const btnPrev = document.getElementById('carousel-prev');
  const btnNext = document.getElementById('carousel-next');

  // Audio centralizzato
  let audio = document.createElement('audio');
  audio.preload = 'auto';
  audio.style.display = 'none';
  document.body.appendChild(audio);

  // --- Mini Player Logic ---
  const miniPlayer = document.getElementById('mini-player');
  const miniPlayerCover = document.getElementById('mini-player-cover');
  const miniPlayerTitle = document.getElementById('mini-player-title');
  const miniPlayerPlayBtn = document.getElementById('mini-player-play');
  const miniPlayerPrevBtn = document.getElementById('mini-player-prev');
  const miniPlayerNextBtn = document.getElementById('mini-player-next');
  const miniPlayerProgressFill = document.getElementById('mini-player-progress-fill');
  const miniPlayerCurrentTime = document.getElementById('mini-player-current-time');
  const miniPlayerDuration = document.getElementById('mini-player-duration');
  const miniPlayerProgressBar = document.querySelector('.mini-player-progress-bar');

  function updateMiniPlayer() {
    if (!miniPlayer || !miniPlayerCover || !miniPlayerTitle || !miniPlayerPlayBtn) return;
    
    const traccia = tracce[current];
    miniPlayerCover.src = traccia.cover ? traccia.cover : defaultCover;
    miniPlayerTitle.textContent = traccia.titolo;
    
    // Aggiorna l'icona play/pause
    const playIcon = miniPlayerPlayBtn.querySelector('i');
    if (playIcon) {
      playIcon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
    }
    
    // Mostra il mini player
    miniPlayer.classList.add('active');
    
    // Aggiorna anche il progresso
    updateMiniPlayerProgress();
  }

  function updateMiniPlayerProgress() {
    if (!miniPlayerProgressFill || !miniPlayerCurrentTime || !miniPlayerDuration) return;
    
    if (!audio.duration || isNaN(audio.duration)) {
      miniPlayerProgressFill.style.width = '0%';
      miniPlayerCurrentTime.textContent = '0:00';
      miniPlayerDuration.textContent = '0:00';
      return;
    }
    
    const progress = Math.min(100, Math.max(0, (audio.currentTime / audio.duration) * 100));
    miniPlayerProgressFill.style.width = progress + '%';
    
    // Aggiorna i tempi
    miniPlayerCurrentTime.textContent = formatTime(audio.currentTime);
    miniPlayerDuration.textContent = formatTime(audio.duration);
  }

  function formatTime(seconds) {
    if (isNaN(seconds) || seconds === Infinity || seconds === -Infinity) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  // Rimuovo la funzione waveform - non più necessaria
  // function getWaveformHTML() {
  //   return `
  //     <div style="width: 90%; max-width: 220px; margin: 0 auto;">
  //       <canvas id="waveform-canvas" width="220" height="40" style="width: 100%; height: 40px; background: transparent; border-radius: 8px;"></canvas>
  //     </div>
  //   `;
  // }

  function getCardHTML(idx, type, isActive, isPlayingNow, hidden = false) {
    const traccia = tracce[idx];
    return `
      <div class="audio-card-inner w-full h-full flex flex-col items-center justify-center">
        <div class="audio-img-container">
          <img src="${traccia.cover ? traccia.cover : defaultCover}" alt="Copertina ${traccia.titolo}" style="width: 100%; height: 100%; object-fit: cover; display: block;"${hidden ? ' class="img-hidden"' : ''} />
        </div>
        <div class="text-xl font-bold text-accent-color mb-4">${traccia.titolo}</div>
        <button class="play-pause-btn" data-idx="${idx}" style="background: none; border: none; outline: none; cursor: pointer;">${getPlayPauseIcon(isActive && isPlayingNow)}</button>
      </div>
    `;
  }

  function getEqualizerHTML(isActive) {
    return `<div class="equalizer" style="margin-top: 16px;">${[1,2,3,4,5].map(()=>'<div class="equalizer-bar"></div>').join('')}</div>`;
  }

  function getPlayPauseIcon(isPlaying) {
    return isPlaying
      ? '<svg width="32" height="32" viewBox="0 0 32 32"><rect x="7" y="6" width="6" height="20" rx="2" fill="#FFD700"/><rect x="19" y="6" width="6" height="20" rx="2" fill="#FFD700"/></svg>'
      : '<svg width="32" height="32" viewBox="0 0 32 32"><polygon points="8,6 26,16 8,26" fill="#FFD700"/></svg>';
  }

  function getIndex(offset) {
    return (current + offset + tracce.length) % tracce.length;
  }

  function aggiornaCarousel(direction, onTransitionEnd) {
    // Animazione 3D ispirata al video esempio
    const angle = direction === 'left' ? 12 : direction === 'right' ? -12 : 0;
    const inner = document.getElementById('carousel-3d-inner');
    inner.style.transform = `rotateY(${angle}deg)`;
    setTimeout(() => {
      inner.style.transform = 'rotateY(0deg)';
      aggiornaCards();
      if (typeof onTransitionEnd === 'function') {
        setTimeout(onTransitionEnd, 100); // Messa a fuoco dopo 100ms
      }
    }, 300);
  }

  // Stato TV per ogni card: '', 'off', 'on'
  let tvStates = ['', '', '']; // [left, center, right]

  // SEMPLIFICATO: solo transizione opacity sull'immagine
  function setImageHiddenOnCard(card, hidden) {
    const img = card.querySelector('img');
    if (!img) return;
    if (hidden) {
      img.classList.add('img-hidden');
    } else {
      img.classList.remove('img-hidden');
    }
  }

  // Nasconde/mostra tutte le immagini delle card
  function setAllImagesHidden(hidden) {
    [cardLeft, cardCenter, cardRight].forEach(card => setImageHiddenOnCard(card, hidden));
  }

  // --- INIZIO NUOVA LOGICA CAROSELLO ---
  // Genera le card una sola volta
  function creaCard(container, idx, isActive) {
    container.innerHTML = `
      <div class="audio-card-inner w-full h-full flex flex-col items-center justify-center">
        <div class="audio-img-container">
          <img class="board-fade" />
        </div>
        <div class="text-xl font-bold text-accent-color mb-4 board-fade"></div>
        <button class="play-pause-btn board-fade" style="background: none; border: none; outline: none; cursor: pointer;"></button>
      </div>
    `;
    aggiornaContenutoCard(container, idx, isActive, false);
  }

  function aggiornaContenutoCard(container, idx, isActive, hidden) {
    const traccia = tracce[idx];
    const img = container.querySelector('img');
    const titolo = container.querySelector('.text-xl');
    const btn = container.querySelector('.play-pause-btn');
    if (img) {
      img.src = traccia.cover ? traccia.cover : defaultCover;
      img.alt = 'Copertina ' + traccia.titolo;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      img.style.display = 'block';
    }
    if (titolo) titolo.textContent = traccia.titolo;
    if (btn) {
      btn.innerHTML = getPlayPauseIcon(isActive && isPlaying);
      btn.setAttribute('data-idx', idx);
      btn.onclick = function(e) {
        e.stopPropagation();
        if (idx === current) {
          if (audio.paused) playAudio(idx);
          else pauseAudio(idx);
        } else {
          changeTrackWithFadeEffect(idx);
        }
      };
      // Applica la classe board-fade anche all'SVG
      const svg = btn.querySelector('svg');
      if (svg) {
        svg.classList.add('board-fade');
        if (hidden) svg.classList.add('board-hidden');
        else svg.classList.remove('board-hidden');
      }
    }
    // Applica/rimuovi la classe board-hidden a TUTTI gli elementi .board-fade
    container.querySelectorAll('.board-fade').forEach(el => {
      if (hidden) el.classList.add('board-hidden');
      else el.classList.remove('board-hidden');
    });
  }

  // All'avvio: crea le card
  creaCard(cardLeft, getIndex(-1), false);
  creaCard(cardCenter, getIndex(0), true);
  creaCard(cardRight, getIndex(1), false);

  // --- AGGIUNTA: click sulle board laterali per cambiare traccia ---
  cardLeft.addEventListener('click', function() {
    btnPrev.onclick();
  });
  cardRight.addEventListener('click', function() {
    btnNext.onclick();
  });

  // Aggiorna tutte le card (usato per play/pause, ecc.)
  function aggiornaCards(forceHidden = false) {
    aggiornaContenutoCard(cardLeft, getIndex(-1), false, forceHidden);
    aggiornaContenutoCard(cardCenter, getIndex(0), true, forceHidden);
    aggiornaContenutoCard(cardRight, getIndex(1), false, forceHidden);
    // Applica la visibilità a tutti gli elementi
    setAllBoardsHidden(forceHidden);
  }

  // Cambia board con fade robusto su tutti gli elementi
  function changeTrackWithFadeEffect(newIdx) {
    setAllBoardsHidden(true);
    setTimeout(() => {
      const direction = newIdx > current ? 'right' : 'left';
      current = newIdx;
      aggiornaCarousel(direction, () => {
        aggiornaCards(true); // aggiorna contenuto ma elementi ancora nascosti
        setTimeout(() => {
          [cardLeft, cardCenter, cardRight].forEach(card => {
            card.querySelectorAll('.board-fade').forEach(el => void el.offsetHeight);
          });
          setAllBoardsHidden(false); // fade-in
        }, 80);
      });
      updateMiniPlayer();
    }, 350);
  }

  function playAudio(idx) {
    if (audio.src !== tracce[idx].file && !audio.src.endsWith(tracce[idx].file)) {
      audio.src = tracce[idx].file;
      audio.currentTime = 0;
    }
    audio.play();
    isPlaying = true;
    aggiornaCards();
    updateMiniPlayer();
  }

  function pauseAudio(idx) {
    audio.pause();
    isPlaying = false;
    aggiornaCards();
    updateMiniPlayer();
  }

  audio.addEventListener('ended', function() {
    isPlaying = false;
    aggiornaCards();
    updateMiniPlayer();
  });
  audio.addEventListener('pause', function() {
    isPlaying = false;
    aggiornaCards();
    updateMiniPlayer();
  });
  audio.addEventListener('play', function() {
    isPlaying = true;
    aggiornaCards();
    updateMiniPlayer();
  });
  audio.addEventListener('timeupdate', function() {
    updateMiniPlayerProgress();
  });

  function blurAllBoards() {
    [cardLeft, cardCenter, cardRight].forEach(card => {
      const inner = card.querySelector('.audio-card-inner');
      if (inner) inner.classList.add('is-blurring');
    });
  }
  function unblurAllBoards() {
    [cardLeft, cardCenter, cardRight].forEach(card => {
      const inner = card.querySelector('.audio-card-inner');
      if (inner) inner.classList.remove('is-blurring');
    });
  }

  // Bottoni prev/next con fade robusto
  btnPrev.onclick = function() {
    setAllBoardsHidden(true);
    blurAllBoards();
    setTimeout(() => {
      current = (current - 1 + tracce.length) % tracce.length;
      aggiornaCarousel('left', () => {
        aggiornaCards(true);
        unblurAllBoards();
        setTimeout(() => {
          [cardLeft, cardCenter, cardRight].forEach(card => {
            card.querySelectorAll('.board-fade').forEach(el => void el.offsetHeight);
          });
          setAllBoardsHidden(false);
        }, 80);
      });
      isPlaying = false;
      audio.pause();
      audio.currentTime = 0;
      updateMiniPlayer();
    }, 350);
  };
  btnNext.onclick = function() {
    setAllBoardsHidden(true);
    blurAllBoards();
    setTimeout(() => {
      current = (current + 1) % tracce.length;
      aggiornaCarousel('right', () => {
        aggiornaCards(true);
        unblurAllBoards();
        setTimeout(() => {
          [cardLeft, cardCenter, cardRight].forEach(card => {
            card.querySelectorAll('.board-fade').forEach(el => void el.offsetHeight);
          });
          setAllBoardsHidden(false);
        }, 80);
      });
      isPlaying = false;
      audio.pause();
      audio.currentTime = 0;
      updateMiniPlayer();
    }, 350);
  };

  // Utility per fade su tutti gli elementi
  function setAllBoardsHidden(hidden) {
    [cardLeft, cardCenter, cardRight].forEach(card => {
      card.querySelectorAll('.board-fade').forEach(el => {
        if (hidden) el.classList.add('board-hidden');
        else el.classList.remove('board-hidden');
      });
    });
  }

  // Event listeners per il mini player
  if (miniPlayerPlayBtn) {
    miniPlayerPlayBtn.addEventListener('click', function() {
      if (isPlaying) {
        pauseAudio(current);
      } else {
        playAudio(current);
      }
    });
  }

  if (miniPlayerPrevBtn) {
    miniPlayerPrevBtn.addEventListener('click', function() {
      setAllBoardsHidden(true);
      blurAllBoards();
      setTimeout(() => {
        current = (current - 1 + tracce.length) % tracce.length;
        aggiornaCarousel('left', () => {
          aggiornaCards(true);
          unblurAllBoards();
          setTimeout(() => {
            [cardLeft, cardCenter, cardRight].forEach(card => {
              card.querySelectorAll('.board-fade').forEach(el => void el.offsetHeight);
            });
            setAllBoardsHidden(false);
          }, 80);
        });
        isPlaying = false;
        audio.pause();
        audio.currentTime = 0;
        updateMiniPlayer();
      }, 350);
    });
  }

  if (miniPlayerNextBtn) {
    miniPlayerNextBtn.addEventListener('click', function() {
      setAllBoardsHidden(true);
      blurAllBoards();
      setTimeout(() => {
        current = (current + 1) % tracce.length;
        aggiornaCarousel('right', () => {
          aggiornaCards(true);
          unblurAllBoards();
          setTimeout(() => {
            [cardLeft, cardCenter, cardRight].forEach(card => {
              card.querySelectorAll('.board-fade').forEach(el => void el.offsetHeight);
            });
            setAllBoardsHidden(false);
          }, 80);
        });
        isPlaying = false;
        audio.pause();
        audio.currentTime = 0;
        updateMiniPlayer();
      }, 350);
    });
  }

  // Click sulla barra di progresso per saltare
  if (miniPlayerProgressBar) {
    miniPlayerProgressBar.addEventListener('click', function(e) {
      if (!audio.duration || isNaN(audio.duration)) return;
      
      const rect = this.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = Math.min(1, Math.max(0, clickX / rect.width));
      audio.currentTime = percentage * audio.duration;
    });
  }

  // All'avvio: elementi visibili
  aggiornaCards(false); // visibili al primo caricamento
  setTimeout(() => setAllBoardsHidden(false), 10);
}); 

// Sezione 'Il mio sound' rimossa: nessuna logica JS per il carosello audio 