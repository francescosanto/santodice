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
    });
    nextBtn.addEventListener('click', function() {
        current = (current + 1) % tracce.length;
        slideAnimation('next', true);
    });

    // All'avvio, mostra la card
    document.querySelector('.custom-audio-card').classList.add('show');

    audio.addEventListener('play', function() {
        playIcon.textContent = '❚❚';
    });
    audio.addEventListener('pause', function() {
        playIcon.textContent = '▶';
    });
    audio.addEventListener('ended', function() {
        playIcon.textContent = '▶';
        progressBar.style.width = '0%';
    });
    audio.addEventListener('timeupdate', function() {
        const percent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = percent + '%';
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

  // --- Waveform "finta" per ogni traccia ---
  let waveforms = [];
  const WAVEFORM_BARS = 32;
  // Genera una waveform unica per ogni traccia all'avvio
  for (let i = 0; i < tracce.length; i++) {
    waveforms[i] = Array.from({length: WAVEFORM_BARS}, () => 8 + Math.random() * 24);
  }
  let waveformData = waveforms[0];

  function generateFakeWaveform() {
    // Genera un array di valori random per la waveform
    waveformData = Array.from({length: WAVEFORM_BARS}, () => 8 + Math.random() * 24);
  }

  function drawWaveform() {
    const canvas = document.getElementById('waveform-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);
    let activeBars = 0;
    if (audio.duration) {
      activeBars = Math.floor((audio.currentTime / audio.duration) * WAVEFORM_BARS);
    }
    for (let i = 0; i < WAVEFORM_BARS; i++) {
      const barHeight = waveformData[i];
      const x = (i + 0.5) * (width / WAVEFORM_BARS);
      ctx.beginPath();
      ctx.moveTo(x, height / 2 - barHeight / 2);
      ctx.lineTo(x, height / 2 + barHeight / 2);
      ctx.strokeStyle = i <= activeBars ? '#FFD700' : '#444';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.stroke();
    }
  }

  let waveformAnimationId = null;
  function startWaveform() {
    function animate() {
      drawWaveform();
      waveformAnimationId = requestAnimationFrame(animate);
    }
    animate();
  }
  function stopWaveform() {
    if (waveformAnimationId) {
      cancelAnimationFrame(waveformAnimationId);
      waveformAnimationId = null;
    }
    const canvas = document.getElementById('waveform-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  function getWaveformHTML() {
    return `
      <div style="width: 90%; max-width: 220px; margin: 0 auto;">
        <canvas id="waveform-canvas" width="220" height="40" style="width: 100%; height: 40px; background: #181818; border-radius: 8px;"></canvas>
      </div>
    `;
  }

  function getCardHTML(idx, type, isActive, isPlayingNow) {
    const traccia = tracce[idx];
    return `
      <div class="w-full h-full flex flex-col items-center justify-center">
        <div style="width: 120px; height: 120px; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.18); margin-bottom: 18px; background: #222;">
          <img src="${traccia.cover ? traccia.cover : defaultCover}" alt="Copertina ${traccia.titolo}" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
        </div>
        <div class="text-xl font-bold text-accent-color mb-4">${traccia.titolo}</div>
        <button class="play-pause-btn" data-idx="${idx}" style="background: none; border: none; outline: none; cursor: pointer;">${getPlayPauseIcon(isActive && isPlayingNow)}</button>
        ${isActive ? getWaveformHTML() : ''}
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

  function aggiornaCarousel(direction) {
    // Animazione 3D ispirata al video esempio
    const angle = direction === 'left' ? 30 : direction === 'right' ? -30 : 0;
    const inner = document.getElementById('carousel-3d-inner');
    inner.style.transform = `rotateY(${angle}deg)`;
    setTimeout(() => {
      inner.style.transform = 'rotateY(0deg)';
      aggiornaCards();
    }, 300);
  }

  // Modifica aggiornaCards per generare la waveform finta quando cambia traccia
  function aggiornaCards() {
    cardLeft.innerHTML = getCardHTML(getIndex(-1), 'left', false, false);
    cardCenter.innerHTML = getCardHTML(getIndex(0), 'center', true, isPlaying);
    cardRight.innerHTML = getCardHTML(getIndex(1), 'right', false, false);
    waveformData = waveforms[getIndex(0)];
    [cardLeft, cardCenter, cardRight].forEach(card => {
      const btn = card.querySelector('.play-pause-btn');
      if (btn) {
        btn.addEventListener('click', function(e) {
          e.stopPropagation();
          const idx = parseInt(btn.getAttribute('data-idx'));
          if (idx === current) {
            if (audio.paused) {
              playAudio(idx);
            } else {
              pauseAudio(idx);
            }
          } else {
            current = idx;
            aggiornaCarousel(idx > current ? 'right' : 'left');
            setTimeout(() => playAudio(current), 350);
          }
        });
      }
    });
    if (isPlaying) {
      startWaveform();
    } else {
      stopWaveform();
    }
    setTimeout(drawWaveform, 100);
  }

  function playAudio(idx) {
    if (audio.src !== tracce[idx].file && !audio.src.endsWith(tracce[idx].file)) {
      audio.src = tracce[idx].file;
      audio.currentTime = 0;
    }
    // waveformData = waveforms[idx]; // già aggiornata in aggiornaCards
    audio.play();
    isPlaying = true;
    aggiornaCards();
  }

  function pauseAudio(idx) {
    audio.pause();
    isPlaying = false;
    aggiornaCards();
  }

  audio.addEventListener('ended', function() {
    isPlaying = false;
    aggiornaCards();
    stopWaveform();
  });
  audio.addEventListener('pause', function() {
    isPlaying = false;
    aggiornaCards();
    stopWaveform();
  });
  audio.addEventListener('play', function() {
    isPlaying = true;
    aggiornaCards();
    startWaveform();
  });
  audio.addEventListener('timeupdate', function() {
    drawWaveform();
  });

  btnPrev.addEventListener('click', function() {
    current = (current - 1 + tracce.length) % tracce.length;
    aggiornaCarousel('left');
    isPlaying = false;
    audio.pause();
    aggiornaCards();
    // stopEqualizer(); // Rimuovo l'equalizzatore animato
  });
  btnNext.addEventListener('click', function() {
    current = (current + 1) % tracce.length;
    aggiornaCarousel('right');
    isPlaying = false;
    audio.pause();
    aggiornaCards();
    // stopEqualizer(); // Rimuovo l'equalizzatore animato
  });

  aggiornaCards();
}); 

// Sezione 'Il mio sound' rimossa: nessuna logica JS per il carosello audio 