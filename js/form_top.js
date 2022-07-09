/* =========================
概要入力フォームに適用するJS
============================ */

$(function () {
    const $indexView = $('#form-index'); // 作成トップ
    const $formTopView = $('#form-top-view'); // 概要入力

    /**
     * 概要保存ボタン押下時
     */
    $('#form-top-save-btn').on('click', function () {
        if (isInvalidError()) return;
        $('#open-form-top-btn').children('.badge-ok').show();
        $formTopView.hide();
        $indexView.show();
    });

    /**
     * フォームのエラーチェック
     * @returns {Boolean}
     */
    function isInvalidError() {
        let isError = false;
        if ($('.artist-name').val() == '') {
            isError = true;
            $('.artist-name').parent().addClass('has-error has-feedback');
        } else {
            $('.artist-name').parent().removeClass('has-error has-feedback');
        }
        if ($('.playing-total-time').val() == '') {
            isError = true;
            $('.playing-total-time').parent().addClass('has-error has-feedback');
        } else {
            $('.playing-total-time').parent().removeClass('has-error has-feedback');
        }
        return isError;
    }

});
