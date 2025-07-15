// https://francescosanto.github.io/santodice/

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
    serviceCards.forEach(card => {
        card.style.pointerEvents = 'none';
        card.style.opacity = '0.7'; // Opzionale: effetto visivo per mostrare che sono disabilitate
        card.style.cursor = 'not-allowed';
    });
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