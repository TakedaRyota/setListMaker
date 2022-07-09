/* =========================
入力フォームに適用するJS
============================ */

$(function () {
    const $indexView = $('#form-index'); // 作成トップ
    const $formTopView = $('#form-top-view'); // 概要入力
    const $musicTitleListView = $('#music-title-list-view'); // 曲名リスト
    const $musicDetailView = $('#music-detail-view'); // 楽曲詳細入力
    const $otherCommentView = $('#other-comment-view'); // その他自由コメント欄
    const $musicListTable = $('#music-list-table'); // 曲目リスト
    const $musicCards = $('#music-cards'); // 曲詳細カード
    const $outputView = $('#output-view'); // 出力画面

    /* 高さvhの調整 */
    const vh = $(window).height() * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    /**
     * 概要入力ボタン押下時
     */
    $('#open-form-top-btn').on('click', function () {
        $indexView.hide();
        $formTopView.show();
    });

    /**
     * セットリスト入力ボタン押下時
     */
    $('#open-music-title-form').on('click', function () {
        $indexView.hide();
        $musicTitleListView.show();
    });

    /**
     * その他入力ボタン押下時
     */
    $('#other-form-btn').on('click', function () {
        $indexView.hide();
        $otherCommentView.show();
    });

    /**
     * 完了ボタン押下時
     */
    $('#complete-btn').on('click', function () {
        if ($('#open-form-top-btn').children('.badge-ok').is(':visible') &&
            $('#open-music-title-form').children('.badge-ok').is(':visible') &&
            $('#other-form-btn').children('.badge-ok').is(':visible')) {
                $indexView.hide();
                $outputView.show();
        }
        return;
    });

    /**
     * -ボタン押下時
     */
    $('main').on('click', '.btn-minus', function () {
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
    $('main').on('click', '.btn-plus', function () {
        const $inputObj = $(this).prev();
        const maxValue = $inputObj.attr('max');
        const currentValue = Number($inputObj.val());

        // 1追加
        if (currentValue < maxValue) {
            $inputObj.val(currentValue + 1);
        }
    });

});
