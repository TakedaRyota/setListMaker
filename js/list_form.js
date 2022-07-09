/* =========================
セットリスト入力フォームに適用するJS
============================ */

$(function () {
    const $indexView = $('#form-index'); // 作成トップ
    const $musicTitleListView = $('#music-title-list-view'); // 曲名リスト
    const $musicListTable = $('#music-list-table'); // 曲目リスト
    const $musicCards = $('#music-cards'); // 曲詳細カード
    const $musicDetailView = $('#music-detail-view'); // 楽曲詳細入力

    /**
     * リスト保存ボタン押下時
     */
    $('#set-list-save-btn').on('click', function () {
        $('#open-music-title-form').children('.badge-ok').show();
        $musicTitleListView.hide();
        $indexView.show();
    });

    /**
     * リスト追加ボタン押下時
     */
    $('#add-music-btn').on('click', function () {
        const listLength = $musicListTable.children().length;
        const musicTitle = $('#music-title-form').val();
        
        if (musicTitle == '') {
            $('#music-title-form').parent().addClass('has-error has-feedback');
            return;
        } else {
            $('#music-title-form').parent().removeClass('has-error has-feedback');
        }

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
                    <input class="form-control input-number" type="number" min="0" max="100"/>
                    <button class="btn btn-normal btn-plus" type="button">
                        <span uk-icon="icon: plus"></span>
                    </button>
                </div>
                <div class="input-label">TIME</div>
                <input class="form-control mb-2" type="time"/>
                <div class="input-label">キッカケ
                    <span class="badge badge-danger">必須</span>
                </div>
                <div class="">
                    <textarea class="start-position-text form-control mb-2" rows="2" placeholder="音先行/板付など" required></textarea>
                    <span class="glyphicon glyphicon-remove form-control-feedback"></span>
                </div>
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
        const $showObj = $(`${$(this).attr('href')}`)
        $showObj.show();
        $showObj.addClass('input-area-show');
    });

    /**
     * 詳細保存ボタン押下時
     */
    $('#detail-save-btn').on('click', function () {
        const $textObj = $('.input-area-show').find('.start-position-text');
        const startPositionText = $textObj.val();
        if (startPositionText == '') {
            $textObj.parent().addClass('has-error has-feedback');
            return;
        } else {
            $textObj.parent().removeClass('has-error has-feedback');
        }
        $musicDetailView.hide();
        $musicTitleListView.show();
    });

});
