// Navigation Logic
function nextPage(currentPage) {
    // Play music on first interaction safely
    const audio = document.getElementById('bg-music');
    if (audio && audio.paused) {
        try {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(e => console.log("Audio play prevented", e));
            }
        } catch (err) {
            console.log("Audio error", err);
        }
    }
    
    const current = document.getElementById(`page-${currentPage}`);
    const next = document.getElementById(`page-${currentPage + 1}`);
    
    if (current && next) {
        current.classList.remove('active');
        current.classList.add('previous');
        
        // Slight delay to allow out-animation before in-animation
        setTimeout(() => {
            next.classList.remove('previous');
            next.classList.add('active');
        }, 300);
    }
}

function prevPage(currentPage) {
    const current = document.getElementById(`page-${currentPage}`);
    const prev = document.getElementById(`page-${currentPage - 1}`);
    
    if (current && prev) {
        current.classList.remove('active');
        
        setTimeout(() => {
            prev.classList.remove('previous');
            prev.classList.add('active');
        }, 300);
    }
}

function restart() {
    const pages = document.querySelectorAll('.page');
    
    pages.forEach(page => {
        page.classList.remove('active');
        page.classList.remove('previous');
    });
    
    setTimeout(() => {
        document.getElementById('page-1').classList.add('active');
    }, 300);
}

// Particle Generation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 5 + 2; // 2px to 7px
        const posX = Math.random() * 100; // 0% to 100% viewport width
        const posY = Math.random() * 100 + 100; // Start below the screen
        const duration = Math.random() * 20 + 10; // 10s to 30s
        const delay = Math.random() * 15; // 0s to 15s delay
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}vw`;
        particle.style.top = `${posY}vh`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    createParticles();
});
