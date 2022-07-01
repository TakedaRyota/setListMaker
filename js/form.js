/* =========================
入力フォームに適用するJS
============================ */

$(function () {
    /**
     * 曲編集ボタン押下時
     * フォーム概要を非表示/リスト編集を表示
     */
    $('#music-edit-btn').on('click', function () {
        $('#form-music-list, #form-top').toggle();
        $(this).hide();
    });
});