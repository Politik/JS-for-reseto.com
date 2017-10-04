//windows resize
function windowSizeRes() {
    if ($(window).width() >= '992') {
        $(".fixed-top").css({
            "paddingLeft": "23%"
        });
        $(".nav-item").css({
            "borderBottomStyle": "",
            "borderBottomWidth": "",
            "borderBottomColor": ""
        });
    } else {
        $(".fixed-top").css({
            "paddingLeft": ""
        });
        $(".nav-item").css({
            "borderBottomStyle": "solid",
            "borderBottomWidth": "1px",
            "borderBottomColor": "#5a86ea"
        });
    }
}
$(window).resize(windowSizeRes);
$(window).ready(windowSizeRes);


//rating
function ratingUpRes(clickedId) {
    $.post("vote_up.php", {
        id: clickedId
    }, function (data) {
        $('#' + clickedId + '.diff_res').text(data);
    });
}

function ratingDown(clickedId) {
    $.post("vote_down.php", {
        id: clickedId
    }, function (data) {
        $('#' + clickedId + '.diff_res').text(data);
    });
}


//scroll
function scrollRes() {
    var startLoad = 20;
    var inProgress = false;
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 500 && !inProgress) {
            $.ajax({
                url: "load.php",
                type: "POST",
                data: {
                    startLoad: startLoad
                },
                beforeSend: function () {
                    inProgress = true;
                },
                success: function (data) {
                    var data = $.parseJSON(data);
                    if(data.length == 10) {
                        $("#content_res").append("<div class='col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8'><ins class='adsbygoogle google_ads' style='display:block' data-ad-client='ca-pub-2928478915116205' data-ad-slot='1371563414' data-ad-format='auto'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script></div>");
                    }
                    $.each(data, function (index, data) {
                        var dataId = data.id;
                        var viberId = data.id;
                        var viberText = data.text_res;
                        viberText = viberText.replace(/&quot;/gi, '"');
                        $("#content_res").append("\
                                              <div class='col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8 text_res'>\
                                                <div class='row id_date_bottom_line'>\
                                                    <div class='col col-sm col-md col-lg col-xl'><a class='id_res' href='vopros.php?" + data.id + "'>#" + data.id + "</a></div>\
                                                    <div class='col col-sm col-md col-lg col-xl text-right date_res'>\
                                                        " + data.date_res + "\
                                                    </div>\
                                                </div>\
                                                <div class='row text-justify text_content_res'>\
                                                    " + data.text_res + "\
                                                </div>\
                                                <div class='row rating_share_line'>\
                                                <div class='share_buttons col col-sm col-md col-lg col-xl'>\
                                                <div id='" + data.id + "' class='btn-success clearfix personal_share_style'></div>\
                                                <a class='personal_share_style' onClick=\"window.open('https://twitter.com/share?url=https%3A%2F%2Freseto.com/vopros.php?" + data.id + "&text=" + data.text_res + "', '_blank', 'width=600,height=400')\">\
                                                <img src='img/twitter.png' alt='twitter'>\
                                                </a>\
                                                <a class='personal_share_style' onClick=\"window.open('https://plus.google.com/share?url=http://reseto.com/vopros.php?" + data.id + "&text=" + data.text_res + "', '_blank', 'width=400,height=600')\">\
                                                <img src='img/google.png' alt='google+'>\
                                                </a>\
                                                <a class='personal_share_style hidden-lg-up' id='share" + viberId + "'><img src='img/viber.png' alt='viber'></a>\
                                                <a class='personal_share_style hidden-lg-up' href='whatsapp://send?text=" + viberText + " www.reseto.com' data-action='share/whatsapp/share'><img src='img/whatsapp.png' alt='whatsapp'></a>\
                                                <a class='personal_share_style hidden-lg-up' href='https://t.me/share/url?url=http://reseto.com&text=" + viberText + "'><img src='img/telegram.png' alt='telegram'></a>\
                                                <a class='personal_share_style hidden-lg-up' href=\"fb-messenger://share/?link=http%3A%2F%2Freseto.com%2Fvopros.php?" + data.id + "&app_id=679488452262404\"><img src='img/messager.png' alt='messager'></a>\
                                                </div>\
                                                    <div class='up col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1' id='" + data.id + "' onclick='ratingUpRes(this.id)'>+</div>\
                                                    <div class='diff_res col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1' id='" + data.id + "'>\
                                                        " + data.diff_res + "\
                                                    </div>\
                                                    <div class='down col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1' id='" + data.id + "' onclick='ratingDown(this.id)'>&ndash;</div>\
                                                </div>\
                                            </div>\
                                              ");
                        $("#" + dataId).click(function () {
                            FB.ui({
                                method: 'share',
                                display: 'popup',
                                href: 'http://reseto.com/vopros.php?' + dataId,
                            }, function (response) {});
                        });
                        $("#share" + viberId).attr('href', 'viber://forward?text=' + encodeURIComponent(viberText + ' www.reseto.com'));
                    });
                    inProgress = false;
                    startLoad += 10;
                }
            })
        }
    });
}


//scroll
function scrollResRating() {
    var startLoad = 20;
    var inProgress = false;
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 500 && !inProgress) {
            $.ajax({
                url: "load_rating.php",
                type: "POST",
                data: {
                    startLoad: startLoad
                },
                beforeSend: function () {
                    inProgress = true;
                },
                success: function (data) {
                    var data = $.parseJSON(data);
                    if(data.length == 10) {
                        $("#content_res").append("<div class='col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8'><ins class='adsbygoogle google_ads' style='display:block' data-ad-client='ca-pub-2928478915116205' data-ad-slot='1371563414' data-ad-format='auto'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script></div>");
                    }
                    $.each(data, function (index, data) {var dataId = data.id;
                        var viberId = data.id;
                        var viberText = data.text_res;
                        viberText = viberText.replace(/&quot;/gi, '"');
                        $("#content_res").append("\
                                              <div class='col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8 text_res'>\
                                                <div class='row id_date_bottom_line'>\
                                                    <div class='col col-sm col-md col-lg col-xl'><a class='id_res' href='vopros.php?" + data.id + "'>#" + data.id + "</a></div>\
                                                    <div class='col col-sm col-md col-lg col-xl text-right date_res'>\
                                                        " + data.date_res + "\
                                                    </div>\
                                                </div>\
                                                <div class='row text-justify text_content_res'>\
                                                    " + data.text_res + "\
                                                </div>\
                                                <div class='row rating_share_line'>\
                                                <div class='share_buttons col col-sm col-md col-lg col-xl'>\
                                                <div id='" + data.id + "' class='btn-success clearfix personal_share_style'></div>\
                                                <a class='personal_share_style' onClick=\"window.open('https://twitter.com/share?url=https%3A%2F%2Freseto.com/vopros.php?" + data.id + "&text=" + data.text_res + "', '_blank', 'width=600,height=400')\">\
                                                <img src='img/twitter.png' alt='twitter'>\
                                                </a>\
                                                <a class='personal_share_style' onClick=\"window.open('https://plus.google.com/share?url=http://reseto.com/vopros.php?" + data.id + "&text=" + data.text_res + "', '_blank', 'width=400,height=600')\">\
                                                <img src='img/google.png' alt='google+'>\
                                                </a>\
                                                <a class='personal_share_style hidden-lg-up' id='share" + viberId + "'><img src='img/viber.png' alt='viber'></a>\
                                                <a class='personal_share_style hidden-lg-up' href='whatsapp://send?text=" + viberText + " www.reseto.com' data-action='share/whatsapp/share'><img src='img/whatsapp.png' alt='whatsapp'></a>\
                                                <a class='personal_share_style hidden-lg-up' href='https://t.me/share/url?url=http://reseto.com&text=" + viberText + "'><img src='img/telegram.png' alt='telegram'></a>\
                                                <a class='personal_share_style hidden-lg-up' href=\"fb-messenger://share/?link=http%3A%2F%2Freseto.com%2Fvopros.php?" + data.id + "&app_id=679488452262404\"><img src='img/messager.png' alt='messager'></a>\
                                                </div>\
                                                    <div class='up col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1' id='" + data.id + "' onclick='ratingUpRes(this.id)'>+</div>\
                                                    <div class='diff_res col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1' id='" + data.id + "'>\
                                                        " + data.diff_res + "\
                                                    </div>\
                                                    <div class='down col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1' id='" + data.id + "' onclick='ratingDown(this.id)'>&ndash;</div>\
                                                </div>\
                                            </div>\
                                              ");
                        $("#" + dataId).click(function () {
                            FB.ui({
                                method: 'share',
                                display: 'popup',
                                href: 'http://reseto.com/vopros.php?' + dataId,
                            }, function (response) {});
                        });
                        $("#share" + viberId).attr('href', 'viber://forward?text=' + encodeURIComponent(viberText + ' www.reseto.com'));
                    });
                    inProgress = false;
                    startLoad += 10;
                }
            })
        }
    });
}


//add file, question, anekdot, GIFs
function uploadFile() {
    $("#add_file").append("<hr><input name='userfile[]' class='add_file_style' type='file' accept='image/jpeg' onchange='uploadFile()'/>\
                          <input name='usertext[]' type='text' class='add_text_style' size='50'>\
                          <br />");
}

function addQuestion() {
    $("#add_question").append("<hr><textarea name='questions[]' rows='3' onkeydown='if (window.event.keyCode == 9){addQuestion()}'></textarea>");
}

function addAnekdot() {
    $("#add_anekdot").append("<hr><textarea name='anekdots[]' rows='3' onkeydown='if (window.event.keyCode == 9){addAnekdot()}'></textarea>");
}

function uploadGif() {
    $("#add_gif").append("<hr><input name='giffile[]' class='add_file_style' type='file' accept='video/mp4,video/x-m4v,video/*' onchange='uploadGif()'/>\
                          <input name='giftext[]' type='text' class='add_text_style' size='50'>\
                          <br />");
}

function playPause(id) {
    var gif = document.getElementById(id);
    if (gif.paused) {
        gif.play();
    } else {
        gif.pause();
    }
}


//upgrade img, question, anekdot, gif
function upgradeImg() {
    var imagesId = $("input[name=img]").val();
    $.ajax({
        url: "upgrade_preview_img.php",
        type: "POST",
        data: {
            imagesId: imagesId
        },
        success: function (data) {
            var data = $.parseJSON(data);
            $.each(data, function (index, data) {
                $("#upgrade_img").append("<hr><p><img class='upgrade_img_preview' src='" + data.text_res + "'></p>\
                <p><input name='alt_res' value='" + data.alt_res + "'</p>\
                <input name='userfile' class='add_file_style' type='file' accept='image/jpeg' />");
            });
        }
    })
}

function upgradeQuestion() {
    var questionId = $("input[name=question]").val();
    $.ajax({
        url: "upgrade_preview_question.php",
        type: "POST",
        data: {
            questionId: questionId
        },
        success: function (data) {
            var data = $.parseJSON(data);
            $.each(data, function (index, data) {
                $("#upgrade_question").append("<hr><textarea name='text_res'> " + data.text_res + " </textarea>");
            });
        }
    })
}

function upgradeAnekdot() {
    var anekdotId = $("input[name=anekdot]").val();
    $.ajax({
        url: "upgrade_preview_anekdot.php",
        type: "POST",
        data: {
            anekdotId: anekdotId
        },
        success: function (data) {
            var data = $.parseJSON(data);
            $.each(data, function (index, data) {
                $("#upgrade_anekdot").append("<hr><textarea rows='10' name='text_res'> " + data.text_res + " </textarea>");
            });
        }
    })
}

function upgradeGif() {
    var gifsId = $("input[name=gif]").val();
    $.ajax({
        url: "upgrade_preview_gif.php",
        type: "POST",
        data: {
            gifsId: gifsId
        },
        success: function (data) {
            var data = $.parseJSON(data);
            $.each(data, function (index, data) {
                $("#upgrade_gif").append("<hr><p><p><video id='" + data.id + "' onclick='playPause(this.id)' loop> <source src='" + data.text_res + "' type='video/mp4'></video></p>\
                <p><input name='description' value='" + data.description + "'</p>\
                <input name='userfile' class='add_file_style' type='file' accept='video/mp4,video/x-m4v,video/*' />");
            });
        }
    })
}


// share