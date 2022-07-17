/* =========================
コメント入力フォームに適用するJS
============================ */

$(function () {
    const $indexView = $('#form-index'); // 作成トップ
    const $otherCommentView = $('#other-comment-view'); // その他自由コメント欄

    /**
     * コメント保存ボタン押下時
     */
    $('#other-comment-save-btn').on('click', function () {
        $('#other-form-btn').children('.badge-ok').css({'visibility':'visible'});
        $otherCommentView.hide();
        $indexView.show();
    });

    /**
     * 戻るボタン押下時
     */
    $('#detail-back-btn').on('click', function () {
        $otherCommentView.hide();
        $indexView.show();
    });
});
