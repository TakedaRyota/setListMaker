/* =========================
index.htmlに適用するJS
============================ */

const VERSION = '0.0.1';

$(function () {

    $('.version-info').text(VERSION);

    /* 高さvhの調整 */
    const vh = $(window).height() * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});