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
     * 戻るボタン押下時
     */
    $('#form-top-back-btn').on('click', function () {
        $formTopView.hide();
        $indexView.show();
    });

    /**
     * フォームのエラーチェック
     * @returns {Boolean}
     */
    function isInvalidError() {
        let isError = false;
        const $artistName = $('#artist-name-input');
        const $totalTime = $('#playing-total-time-input');
        if ($artistName.val() == '') {
            isError = true;
            $artistName.parent().addClass('has-error has-feedback');
        } else {
            $artistName.parent().removeClass('has-error has-feedback');
        }
        if ($totalTime.val() == '') {
            isError = true;
            $totalTime.parent().addClass('has-error has-feedback');
        } else {
            $totalTime.parent().removeClass('has-error has-feedback');
        }
        return isError;
    }

});
