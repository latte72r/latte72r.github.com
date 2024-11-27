
/* (c) 2024 Latte72. */

export default function loadParticles() {
    window.particlesJS.load('particles-js', './particles.json', function () {
        console.log('callback - particles.js config loaded');
    });
}
