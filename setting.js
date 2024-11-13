
/* (c) 2024 Latte72. */

// ページロード時にフェードイン
$(document).ready(function () {
    $('.document').hide().fadeIn(1000);
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './particles.json', function() {
    console.log('callback - particles.js config loaded');
});
