
/* (c) 2024 Latte72. */

let headerHight;
let canvasWidth;
let canvasHeight;
$(window).on("load resize", function () {
    let breakpoint = 1024;
    let browseWid = $(window).width();
    let widSp = browseWid < breakpoint; //SP表示
    if (widSp) {
        // スマートフォン
        headerHight = 145;
        canvasWidth = browseWid * 0.76;
        canvasHeight = 600;
    } else {
        // PC
        headerHight = 110;
        canvasWidth = browseWid * 0.78;
        canvasHeight = 600;
    }
});
$(document).on("click", "a[href^='#']", function () {
  let speed = 800;
  let href = $(this).attr("href").replace("\.", "\\\.");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top - headerHight;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});
// .accordion_one
$(function () {
    //.accordion_oneの中の.accordion_headerがクリックされたら
    $('.accordion_one .accordion_header').click(function () {
        //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
        $(this).next('.accordion_inner').slideToggle();
        $(this).toggleClass("open");
    });
});

// ページロード時にフェードイン
$(document).ready(function () {
    $('.document').hide().fadeIn(1000);
});

localStorage.setItem('dark-mode-settings', 'dark');

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './particles.json', function() {
    console.log('callback - particles.js config loaded');
});
