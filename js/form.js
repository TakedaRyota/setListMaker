/* =========================
入力フォームに適用するJS
============================ */

$(function () {
    /**
     * 曲編集ボタン押下時
     * フォーム概要を非表示/リスト編集を表示
     */
    $('#music-edit-btn').on('click', function () {
        $('#form-music-list, #form-top, #overview-btn, #music-edit-btn, #back-btn, #next-btn, #sort-form-btn').toggle();
        $(this).hide();
    });

    /**
     * -ボタン押下時
     */
    $('.btn-minus').on('click', function () {
        const $inputObj = $(this).next();
        const minValue = $inputObj.attr('min');
        const currentValue = Number($inputObj.val());

        // 1引く
        if (minValue < currentValue) {
            $inputObj.val(currentValue - 1);
        };
    });

    /**
     * ＋ボタン押下時
     */
    $('.btn-plus').on('click', function () {
        const $inputObj = $(this).prev();
        const maxValue = $inputObj.attr('max');
        const currentValue = Number($inputObj.val());

        // 1追加
        if (currentValue < maxValue) {
            $inputObj.val(currentValue + 1);
        }
    });

    /**
     * 概要入力に遷移ボタン押下時
     */
    $('#overview-btn').on('click', function () {
        $('#form-music-list, #form-top, #overview-btn, #music-edit-btn, #back-btn, #next-btn, #sort-form-btn').toggle();
    });

    $('.slider').slick({
        infinite: false, // ループ禁止
        slidesToShow: 1,
        dots: false,
    });

    /**
     * リスト追加ボタン押下時
     */
    $('#add-btn').on('click', function () {

    });

    /**
     * リスト削除ボタン押下時
     */
    $('#remove-btn').on('click', function () {

    });
    

});