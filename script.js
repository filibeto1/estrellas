// Frases de amor
const frasesLluvia = [
    "Te amo más que a las estrellas",
    "Eres mi universo entero",
    "Mi corazón late por ti",
    "Eres mi sueño hecho realidad",
    "Te amo con todo el alma",
    "Eres mi razón de ser",
    "Contigo todo es mejor",
    "Eres mi luz en la oscuridad",
    "Te amo infinitamente",
    "Eres mi vida entera",
    "Mi amor por ti es eterno",
    "Eres mi ángel guardián",
    "Te amo cada día más",
    "Eres mi felicidad",
    "Mi corazón es tuyo",
    "Eres la mujer de mi vida",
    "Te amo sin medida",
    "Eres mi todo",
    "Gracias por existir",
    "Eres mi sueño cumplido",
    "Te amo hasta el infinito",
    "Eres mi princesa",
    "Mi alma te pertenece",
    "Eres mi sol de cada día",
    "Te amo con locura",
    "Eres mi razón de sonreír",
    "Mi vida eres tú",
    "Eres mi felicidad eterna",
    "Te amo más que ayer",
    "Eres mi destino",
    "Mi corazón te adora",
    "Eres mi inspiración",
    "Te amo con pasión",
    "Eres mi todo y más",
    "Mi vida sin ti no es vida",
    "Eres el amor de mi vida",
    "Te amo con toda mi alma",
    "Eres mi cielo",
    "Mi amor es solo tuyo",
    "Eres mi eternidad",
    "Te amo cada segundo",
    "Eres mi felicidad total",
    "Mi corazón es tuyo siempre",
    "Eres mi universo",
    "Te amo más que ayer y menos que mañana",
    "Eres mi estrella favorita",
    "Mi vida es hermosa contigo",
    "Eres mi razón de vivir",
    "Te amo con cada fibra de mi ser",
    "Eres mi sueño eterno",
    "Eres perfecta tal como eres",
    "Tu sonrisa ilumina mi mundo",
    "Eres mi mayor aventura",
    "Contigo quiero envejecer",
    "Eres mi mejor decisión",
    "Mi corazón siempre te elige",
    "Eres mi lugar favorito",
    "Te amo con locura",
    "Eres mi paz y mi alegría",
    "Gracias por amarme",
    "Eres mi persona especial",
    "Siempre serás mi amor"
];

// Frases de fondo
const frasesFondo = [
    "💫 Te amo infinito",
    "🌟 Eres mi universo",
    "❤️ Mi corazón es tuyo",
    "✨ Eres especial",
    "💕 Te amo siempre",
    "🌙 Eres mi luna",
    "⭐ Mi estrella favorita",
    "💖 Eres mi vida",
    "🌺 Eres hermosa",
    "💗 Te amo con locura",
    "🌈 Eres mi arcoíris",
    "💝 Eres mi amor",
    "🌹 Te amo siempre",
    "💞 Eres mi alma",
    "🌟 Eres mi sol",
    "✨ Mi amor eterno",
    "❤️ Mi razón de ser",
    "💫 Eres mi todo"
];

// Nombres de imágenes
const imagenes = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg"
];

// Variables
let intervalo;
let ultimaFoto = -1;
let ultimaFrase = -1;
let zoomActivo = false;
let elementosActivos = [];
let mouseX = 0;
let mouseY = 0;

// Crear escena 3D
function crearEscena3D() {
    const escena = document.getElementById('espacio-amor');
    
    // Crear estrellas 3D
    const estrellasFragment = document.createDocumentFragment();
    for (let i = 0; i < 150; i++) {
        const estrella = document.createElement('div');
        estrella.className = 'estrella-3d';
        const size = Math.random() * 3 + 1;
        estrella.style.width = size + 'px';
        estrella.style.height = size + 'px';
        estrella.style.left = Math.random() * 100 + '%';
        estrella.style.top = Math.random() * 100 + '%';
        estrella.style.animationDelay = (Math.random() * 3) + 's';
        estrella.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
        // Profundidad 3D
        const z = (Math.random() - 0.5) * 400;
        estrella.style.transform = `translateZ(${z}px)`;
        estrella.style.boxShadow = `0 0 ${Math.random() * 20 + 10}px rgba(255,255,255,${Math.random() * 0.3 + 0.1})`;
        estrellasFragment.appendChild(estrella);
    }
    escena.appendChild(estrellasFragment);
    
    // Crear corazones 3D
    const corazonesFragment = document.createDocumentFragment();
    const emojis = ['❤️', '💕', '💖', '💗', '💝', '✨', '🌟', '💫'];
    for (let i = 0; i < 30; i++) {
        const corazon = document.createElement('div');
        corazon.className = 'corazon-3d';
        corazon.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        corazon.style.left = Math.random() * 100 + '%';
        corazon.style.top = Math.random() * 100 + '%';
        corazon.style.fontSize = (Math.random() * 30 + 20) + 'px';
        corazon.style.animationDelay = (Math.random() * 10) + 's';
        corazon.style.animationDuration = (Math.random() * 15 + 15) + 's';
        // Posición en 3D
        const z = (Math.random() - 0.5) * 300;
        corazon.style.transform = `translateZ(${z}px)`;
        corazonesFragment.appendChild(corazon);
    }
    escena.appendChild(corazonesFragment);
    
    // Crear frases de fondo 3D
    const frasesFragment = document.createDocumentFragment();
    const posiciones = [
        { top: 5, left: 5 },
        { top: 15, left: 80 },
        { top: 30, left: 10 },
        { top: 45, left: 85 },
        { top: 60, left: 8 },
        { top: 75, left: 82 },
        { top: 90, left: 15 },
        { top: 8, left: 50 },
        { top: 25, left: 45 },
        { top: 50, left: 50 },
        { top: 70, left: 45 },
        { top: 88, left: 55 },
        { top: 12, left: 30 },
        { top: 40, left: 25 },
        { top: 65, left: 30 },
        { top: 20, left: 60 },
        { top: 55, left: 20 },
        { top: 80, left: 70 }
    ];
    
    frasesFondo.forEach((frase, index) => {
        const div = document.createElement('div');
        div.className = 'frase-fondo-3d';
        div.textContent = frase;
        
        const pos = posiciones[index % posiciones.length];
        div.style.top = pos.top + '%';
        div.style.left = pos.left + '%';
        
        const size = Math.random() * 1.5 + 1;
        div.style.fontSize = (size * 1.2) + 'em';
        div.style.opacity = Math.random() * 0.04 + 0.02;
        div.style.animationDelay = (Math.random() * 5) + 's';
        div.style.animationDuration = (Math.random() * 10 + 20) + 's';
        
        // Profundidad 3D
        const z = (Math.random() - 0.5) * 200;
        div.style.transform = `translateZ(${z}px)`;
        
        frasesFragment.appendChild(div);
    });
    escena.appendChild(frasesFragment);
}

// Crear partícula 3D
function crearParticula3D() {
    const escena = document.getElementById('espacio-amor');
    const esFoto = Math.random() < 0.3;
    
    const particula = document.createElement('div');
    particula.className = 'particula-lluvia-3d';
    
    // Posición en 3D
    const posX = Math.random() * 90 + 5;
    const posY = Math.random() * 90 + 5;
    const posZ = (Math.random() - 0.5) * 200;
    
    particula.style.left = posX + '%';
    particula.style.top = posY + '%';
    particula.style.transform = `translateZ(${posZ}px)`;
    
    // Rotación 3D
    const rotX = (Math.random() - 0.5) * 30;
    const rotY = (Math.random() - 0.5) * 30;
    
    // Velocidad
    const duracion = Math.random() * 4 + 8;
    particula.style.animationDuration = duracion + 's';
    
    const elemento = document.createElement('div');
    elemento.className = 'elemento-3d';
    elemento.style.setProperty('--rotacion-x', rotX + 'deg');
    elemento.style.setProperty('--rotacion-y', rotY + 'deg');
    
    if (esFoto) {
        let indiceFoto;
        do {
            indiceFoto = Math.floor(Math.random() * imagenes.length);
        } while (indiceFoto === ultimaFoto && imagenes.length > 1);
        ultimaFoto = indiceFoto;
        
        const img = document.createElement('img');
        img.className = 'foto-3d';
        img.src = `imagenes/${imagenes[indiceFoto]}`;
        img.alt = 'Amor';
        img.loading = 'lazy';
        img.onerror = function() {
            this.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect width="200" height="200" fill="%231a1a2e"/%3E%3Ctext x="50" y="110" font-size="40" fill="%23ffd700" text-anchor="middle"%3E💕%3C/text%3E%3C/svg%3E`;
        };
        elemento.appendChild(img);
    } else {
        let indiceFrase;
        do {
            indiceFrase = Math.floor(Math.random() * frasesLluvia.length);
        } while (indiceFrase === ultimaFrase && frasesLluvia.length > 1);
        ultimaFrase = indiceFrase;
        
        const frase = document.createElement('div');
        frase.className = 'frase-3d';
        frase.textContent = frasesLluvia[indiceFrase];
        elemento.appendChild(frase);
    }
    
    particula.appendChild(elemento);
    escena.appendChild(particula);
    elementosActivos.push(particula);
    
    // Eliminar después de la animación
    setTimeout(() => {
        if (particula.parentNode) {
            particula.remove();
        }
        const index = elementosActivos.indexOf(particula);
        if (index > -1) {
            elementosActivos.splice(index, 1);
        }
    }, (duracion + 1) * 1000);
}

// Ráfaga 3D
function crearRafaga3D() {
    const cantidad = Math.floor(Math.random() * 3) + 2;
    for (let i = 0; i < cantidad; i++) {
        setTimeout(() => {
            crearParticula3D();
        }, i * 400);
    }
}

// Iniciar lluvia 3D
function iniciarLluvia3D() {
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            crearParticula3D();
        }, i * 500);
    }
    
    intervalo = setInterval(() => {
        crearRafaga3D();
    }, Math.random() * 1500 + 2000);
}

// Movimiento del mouse para efecto 3D
function moverEscenaConMouse() {
    document.addEventListener('mousemove', function(e) {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        
        const escena = document.getElementById('espacio-amor');
        const rotX = y * 5;
        const rotY = x * 5;
        
        escena.style.animation = 'none';
        escena.style.transform = `translate(-50%, -50%) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        
        // También mover elementos con efecto parallax 3D
        document.querySelectorAll('.elemento-3d').forEach((el, index) => {
            const speed = 1 + (index % 3) * 0.5;
            const moveX = x * 20 * speed;
            const moveY = y * 20 * speed;
            el.style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${rotX * 0.5}deg) rotateY(${rotY * 0.5}deg)`;
        });
    });
}

// Movimiento en móvil (giroscopio)
function moverEscenaConGiroscopio() {
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function(e) {
            const beta = e.beta || 0; // -180 a 180
            const gamma = e.gamma || 0; // -90 a 90
            
            const rotX = beta * 0.3;
            const rotY = gamma * 0.3;
            
            const escena = document.getElementById('espacio-amor');
            escena.style.animation = 'none';
            escena.style.transform = `translate(-50%, -50%) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        }, { passive: true });
    }
}

// Detectar zoom
function detectarZoom() {
    let lastWidth = window.innerWidth;
    let lastHeight = window.innerHeight;
    let isZooming = false;
    
    const resizeObserver = new ResizeObserver(() => {
        const currentWidth = window.innerWidth;
        const currentHeight = window.innerHeight;
        
        const widthRatio = lastWidth / currentWidth;
        const heightRatio = lastHeight / currentHeight;
        const zoomLevel = Math.max(widthRatio, heightRatio);
        
        if (zoomLevel > 1.08 && !isZooming) {
            isZooming = true;
            document.body.classList.add('zoom-in');
            zoomActivo = true;
        } else if (zoomLevel < 1.02 && isZooming) {
            isZooming = false;
            document.body.classList.remove('zoom-in');
            zoomActivo = false;
        }
        
        lastWidth = currentWidth;
        lastHeight = currentHeight;
    });
    
    resizeObserver.observe(document.body);
    
    // Gestos de pinza
    let initialPinch = 0;
    let isPinching = false;
    
    document.addEventListener('touchstart', function(e) {
        if (e.touches.length === 2) {
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            const dist = Math.hypot(
                touch1.clientX - touch2.clientX,
                touch1.clientY - touch2.clientY
            );
            initialPinch = dist;
            isPinching = true;
        }
    }, { passive: true });
    
    document.addEventListener('touchmove', function(e) {
        if (e.touches.length === 2 && isPinching) {
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            const dist = Math.hypot(
                touch1.clientX - touch2.clientX,
                touch1.clientY - touch2.clientY
            );
            
            const ratio = dist / initialPinch;
            
            if (ratio > 1.1 && !zoomActivo) {
                document.body.classList.add('zoom-in');
                zoomActivo = true;
            } else if (ratio < 0.9 && zoomActivo) {
                document.body.classList.remove('zoom-in');
                zoomActivo = false;
            }
        }
    }, { passive: true });
    
    document.addEventListener('touchend', function() {
        isPinching = false;
    }, { passive: true });
}

// Inicializar
function init() {
    crearEscena3D();
    detectarZoom();
    moverEscenaConMouse();
    moverEscenaConGiroscopio();
    
    setTimeout(() => {
        iniciarLluvia3D();
    }, 500);
}

// Limpiar
window.addEventListener('beforeunload', function() {
    if (intervalo) {
        clearInterval(intervalo);
    }
});

// Iniciar
if (document.readyState === 'complete') {
    init();
} else {
    window.addEventListener('load', init);
}

console.log('💫 ¡Amor en 3D! 🌟');
console.log('🔍 Haz zoom para acercarte');
console.log('🖱️ Mueve el mouse o el teléfono para ver el efecto 3D');
console.log('✨ Todo flota en el espacio');