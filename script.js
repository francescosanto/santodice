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

    // Event listeners for buttons
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
});

// Gestione dei video nella sezione progetti
document.addEventListener('DOMContentLoaded', function() {
    const videoCards = document.querySelectorAll('.video-card');
    let currentPlayingVideo = null;
    let currentAudioVideo = null;

    // Funzione per gestire l'intersezione con la sezione progetti
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quando la sezione è visibile, avvia tutti i video
                videoCards.forEach(card => {
                    const video = card.querySelector('video');
                    video.play();
                });
            } else {
                // Quando la sezione non è visibile, ferma tutti i video
                videoCards.forEach(card => {
                    const video = card.querySelector('video');
                    video.pause();
                });
            }
        });
    }, { threshold: 0.5 });

    // Osserva la sezione progetti
    const projectsSection = document.querySelector('.projects');
    if (projectsSection) {
        observer.observe(projectsSection);
    }

    // Gestione dell'hover e dell'audio sui video
    videoCards.forEach(card => {
        const video = card.querySelector('video');
        const audioControl = card.querySelector('.audio-control');
        const audioIcon = audioControl.querySelector('i');

        // Gestione dell'hover
        card.addEventListener('mouseenter', () => {
            if (currentPlayingVideo && currentPlayingVideo !== video) {
                currentPlayingVideo.pause();
            }
            video.play();
            currentPlayingVideo = video;
        });

        card.addEventListener('mouseleave', () => {
            video.pause();
            currentPlayingVideo = null;
        });

        // Gestione del click sull'icona audio
        audioControl.addEventListener('click', (e) => {
            e.stopPropagation(); // Previene la propagazione del click alla card

            // Se c'è già un video con l'audio attivo, disattivalo
            if (currentAudioVideo && currentAudioVideo !== video) {
                currentAudioVideo.muted = true;
                const prevAudioIcon = currentAudioVideo.parentElement.querySelector('.audio-control i');
                prevAudioIcon.classList.remove('fa-volume-up');
                prevAudioIcon.classList.add('fa-volume-mute');
            }

            // Toggle dell'audio del video corrente
            video.muted = !video.muted;
            
            // Aggiorna l'icona
            if (video.muted) {
                audioIcon.classList.remove('fa-volume-up');
                audioIcon.classList.add('fa-volume-mute');
                currentAudioVideo = null;
            } else {
                audioIcon.classList.remove('fa-volume-mute');
                audioIcon.classList.add('fa-volume-up');
                currentAudioVideo = video;
            }
        });
    });
});

// Gestione delle card dei servizi
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    let activeCard = null;

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            // Se c'è già una card attiva e non è quella cliccata
            if (activeCard && activeCard !== card) {
                activeCard.classList.remove('active');
            }

            // Toggle della card cliccata
            card.classList.toggle('active');
            activeCard = card.classList.contains('active') ? card : null;

            // Se la card è attiva, scrolla fino ad essa
            if (card.classList.contains('active')) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });

    // Chiudi la card attiva quando si clicca fuori
    document.addEventListener('click', (e) => {
        if (activeCard && !activeCard.contains(e.target)) {
            activeCard.classList.remove('active');
            activeCard = null;
        }
    });
}); 