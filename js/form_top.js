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
        $('#open-form-top-btn').children('.badge-ok').css({'visibility':'visible'});
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
     * 演奏時間入力補完ボタン押下時
     */
    $('.playing-time-input').on('click', function () {
        $('#playing-total-time-input').val($(this).text());
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
