/* =========================
index.htmlに適用するJS
============================ */

$(function () {

    /* 高さvhの調整 */
    const vh = $(window).height() * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
