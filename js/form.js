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
    let base64;

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
        if ($('#open-form-top-btn').children('.badge-ok').css('visibility')=='visible' &&
            $('#open-music-title-form').children('.badge-ok').css('visibility')=='visible' &&
            $('#other-form-btn').children('.badge-ok').css('visibility')=='visible') {
                $('#list-table-view').show();
                
                outputTable(); // 出力テーブルの生成
                html2image(); // 画像の生成
                
                $indexView.hide();
                $outputView.show();
                $('#list-table-view').hide();
        }
        return;
    });

    /**
     * pdf出力ボタン押下時
     */
    $('#output-pdf-btn').on('click', function () {
        outputHtml2pdf(); // pdfの生成
    });

    /**
     * 画像に変換
     */
    function html2image() {
        const $capture = document.querySelector('#list-table-view');
        html2canvas($capture, {useCORS: true}).then(canvas => {
        base64 = canvas.toDataURL('image/png');
        $('#preview-img').attr("src", base64);
        });
    }

    /**
     * pdfの生成
     */
    function outputHtml2pdf() {
        const doc = new jspdf.jsPDF();
        const fileName = `セットリスト_${$('#artist-name-input').val()}.pdf`;

        const width = doc.internal.pageSize.width;
        doc.addImage(base64, 'png', 10, 0, width * 0.9, 0);
        doc.save(fileName);
    }

    /**
     * テーブルhtmlの生成
     */
    function outputTable() {
        const currentTime = new Date();
        // 出力日
        $('#output-date').text(changeDateTime(currentTime));
        // イベント名
        $('#event-title-cell').text($('#event-title-input').val());
        // 会場名
        $('#event-place-cell').text($('#event-place-input').val());
        // 開催日
        $('#event-date-cell').text(getOpenDate($('#calendar').val()));
        // アーティスト名
        $('#artist-name-cell').text($('#artist-name-input').val());
        // 演奏時間
        $('#playing-time-cell').text($('#playing-total-time-input').val());
        // メンバー数
        $('#member-num-cell').text(`${$('#member-num-input').val()}人`);
        // マイク本数
        $('#mic-num-cell').text(`${$('#mic-num-input').val()}本`);
        // その他
        $('#other-comment-cell').text($('#other-comment-input').val());

        let listTable = '';
        $musicCards.children().each(function (index, ele) {
            const $musicDetailEle = $(ele);
            listTable += `
                <tr>
                    <th>${index + 1}</th>
                    <td>
                        <div class="music-title-cell">
                            ${$musicDetailEle.find('.music-title').val()}
                        </div>
                        <div class="time-area">
                            <span>TIME</span>
                            <label class="time-label">${$musicDetailEle.find('.music-time-input').val()}</label>
                        </div>
                    </td>
                    <td>${$musicDetailEle.find('.track-no-input').val()}</td>
                    <td>${$musicDetailEle.find('.start-position-text').val()}</td>
                    <td>${$musicDetailEle.find('.pa-request-text').val()}</td>
                    <td>${$musicDetailEle.find('.lt-request-text').val()}</td>
                </tr>`;
        });
        $('#list-row-table').children().remove();
        $('#list-row-table').append(listTable);
    }

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

    /**
     * 編集に戻るボタン押下時
     */
    $('#back-edit-btn').on('click', function () {
        $outputView.hide();
        $indexView.show();
    });
 
});
