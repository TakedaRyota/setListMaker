/* =========================
全てのhtmlに適用するJS
============================ */

const VERSION = '1.2.0';

$(function () {

    $('.version-info').text(VERSION);

    /* 高さvhの調整 */
    const vh = $(window).height() * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

});

/**
 * 0を付加
 * @param {Number} number 
 * @returns 
 */
function zeroPadded(number) {
    number = String(number);
    if (number.length == 1) {
        return `0${number}`;
    }
    return number;
}

/**
 * 開催日を出力します
 * @param {Date} date 
 * @returns 
 */
function getOpenDate(date) {
    if (date != ''){
        date = new Date(date);
        return `${date.getFullYear()}年${zeroPadded(date.getMonth() + 1)}月${zeroPadded(date.getDate())}日`;
    }
    return '';
}

/**
 * 日時の表記を変更
 * @param {Date} dateTime 
 * @returns YYYY/MM/DD hh:mm:00
 */
function changeDateTime(dateTime) {
    return `${dateTime.getFullYear()}/${zeroPadded(dateTime.getMonth() + 1)}/${zeroPadded(dateTime.getDate())} ${zeroPadded(dateTime.getHours())}:${zeroPadded(dateTime.getMinutes())}:00`;
}

/**
 * 入力エラーを表示
 * @param {*} $targetObj 
 */
function showInputError($targetObj) {
    $targetObj.parent().addClass('has-error has-feedback');
}

/**
 * 入力エラーを非表示
 * @param {*} $targetObj 
 */
function hideInputError($targetObj) {
    $targetObj.parent().removeClass('has-error has-feedback');
}