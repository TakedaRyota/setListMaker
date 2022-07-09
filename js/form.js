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
     * リスト追加ボタン押下時
     */
    $('#add-music-btn').on('click', function () {
        const listLength = $musicListTable.children().length;
        const musicTitle = $('#music-title-form').val();
        $musicListTable.append(`
            <tr>
                <td>${listLength + 1}</td>
                <td>
                    <a class="detail-view-btn" href="#set-list${listLength + 1}">${musicTitle}
                        <span uk-icon="icon: triangle-right" class="list-icon"></span>
                    </a>
                </td>
            </tr>`);
        $('#music-title-form').val('');
        $musicCards.append(`
            <div id="set-list${listLength + 1}" class="music-detail-form input-area bg-light">
                <div class="input-label">タイトル</div>
                <input class="form-control mb-2" type="text" value="${musicTitle}" disabled/>
                <div class="input-label">Track</div>
                <div class="d-flex mb-2">
                    <button class="btn btn-normal btn-minus" type="button">
                        <span uk-icon="icon: minus"></span>
                    </button>
                    <input class="form-control" type="number" min="0" max="100"/>
                    <button class="btn btn-normal btn-plus" type="button">
                        <span uk-icon="icon: plus"></span>
                    </button>
                </div>
                <div class="input-label">TIME</div>
                <input class="form-control mb-2" type="time"/>
                <div class="input-label">キッカケ
                    <span class="badge badge-danger">必須</span>
                </div>
                <textarea class="form-control mb-2" rows="2" placeholder="音先行/板付など" required></textarea>
                <div class="input-label">音響への要望</div>
                <textarea class="form-control mb-2" rows="3" placeholder=""></textarea>
                <div class="input-label">照明への要望</div>
                <textarea class="form-control mb-2" rows="3" placeholder=""></textarea>
            </div>`);
    });

    /**
     * タイトルテーブル押下時
     */
    $musicListTable.on('click', '.detail-view-btn', function () {
        $musicTitleListView.hide();
        $musicDetailView.show();
        $('.music-detail-form').hide();
        $(`${$(this).attr('href')}`).show();
    });

});
