/* =========================
セットリスト入力フォームに適用するJS
============================ */

$(function () {
    const $indexView = $('#form-index'); // 作成トップ
    const $musicTitleListView = $('#music-title-list-view'); // 曲名リスト
    const $musicListTable = $('#music-list-tbody'); // 曲目リスト
    const $musicCards = $('#music-cards'); // 曲詳細カード
    const $musicDetailView = $('#music-detail-view'); // 楽曲詳細入力

    /**
     * リスト保存ボタン押下時
     */
    $('#set-list-save-btn').on('click', function () {
        $('#open-music-title-form').children('.badge-ok').css({'visibility':'visible'});
        $musicTitleListView.hide();
        $indexView.show();
    });

    /**
     * リスト戻るボタン押下時
     */
    $('#set-list-back-btn').on('click', function () {
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
                <td class="position-relative">
                    <a class="detail-view-btn" id="set-list-title-${listLength + 1}" href="#set-list${listLength + 1}">${musicTitle}</a>
                    <span uk-icon="icon: triangle-right" class="list-icon"></span>
                </td>
            </tr>`);
        $('#music-title-form').val('');
        $musicCards.append(`
            <div id="set-list${listLength + 1}" class="music-detail-form input-area bg-light mb-3" data-list-id="${listLength + 1}">
                <div class="input-label">タイトル
                    <span class="badge badge-danger">必須</span>
                </div>
                <div class="">
                    <input class="form-control mb-2 music-title" type="text" value="${musicTitle}"/>
                    <span uk-icon="icon: warning" class="form-control-feedback"></span>
                </div>
                <div class="input-label">Track</div>
                <div class="d-flex mb-2">
                    <button class="btn btn-normal btn-minus" type="button">
                        <span uk-icon="icon: minus"></span>
                    </button>
                    <input class="track-no-input form-control input-number" type="number" min="0" max="100"/>
                    <button class="btn btn-normal btn-plus" type="button">
                        <span uk-icon="icon: plus"></span>
                    </button>
                </div>
                <div class="input-label">TIME
                    <span class="badge badge-danger">必須</span>
                </div>
                <input class="music-time-input form-control mb-2" type="time" value="00:00" min="00:00" max="59:59"/>
                <div class="input-label">キッカケ
                    <span class="badge badge-danger">必須</span>
                </div>
                <div class="d-flex mb-2">
                    <button class="start-position-input me-2" type="button">音先行</button>
                    <button class="start-position-input me-2" type="button">板付</button>
                    <button class="start-position-input" type="button">おまかせ</button>
                </div>
                <div class="">
                    <textarea class="start-position-text form-control mb-2" rows="2" placeholder="音先行/板付など" required></textarea>
                    <span uk-icon="icon: warning" class="form-control-feedback"></span>
                </div>
                <div class="input-label">音響への要望</div>
                <textarea class="pa-request-text form-control mb-2" rows="3" placeholder=""></textarea>
                <div class="input-label">照明への要望</div>
                <textarea class="lt-request-text form-control mb-2" rows="3" placeholder=""></textarea>
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
        if (isInvalidError()) return;
        const $showListObj = $('.input-area-show');
        const listId = $showListObj.attr('data-list-id');
        $(`#set-list-title-${listId}`).text(
            $showListObj.find('.music-title').val()
        );

        $showListObj.removeClass('input-area-show');
        $musicDetailView.hide();
        $musicTitleListView.show();
    });

    /**
     * 曲削除ボタン押下時
     */
    $('#detail-delete-btn').on('click', function () {
        const $showListObj = $('.input-area-show');
        const listId = $showListObj.attr('data-list-id');
        $showListObj.remove();
        $(`#set-list-title-${listId}`).parent().parent().remove();
        $musicDetailView.hide();
        $musicTitleListView.show();
        $('#delete-cfm-modal').modal('hide');
    });

    /**
     * フォームのエラーチェック
     * @returns {Boolean}
     */
    function isInvalidError() {
        let isError = false;
        const $textObj = $('.input-area-show').find('.start-position-text');
        const $titleObj = $('.input-area-show').find('.music-title');

        if ($textObj.val() == '') {
            isError = true;
            showInputError($textObj);
        } else {
            hideInputError($textObj);
        }
        if ($titleObj.val() == '') {
            isError = true;
            showInputError($titleObj);
        } else {
            hideInputError($titleObj);
        }
        return isError;
    }

    /**
     * 音先行ボタン押下時
     */
    $musicCards.on('click', '.start-position-input', function () {
        $(this).parent().parent().find('.start-position-text').text($(this).text());
    });
});
