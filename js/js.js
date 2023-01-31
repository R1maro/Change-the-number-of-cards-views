// change view btn js

$(document).ready(function () {
    $('.two-view').click(function () {
        $('.stable-img').removeClass('col-lg-3').addClass('col-lg-6').addClass('p-5');
        $('.dlt-img').removeClass('col-lg-3').addClass('col-lg-6').addClass('p-5');
        $('.custom-img').css('height','700'+'px')
    });
    $('.four-view').click(function () {
        $('.stable-img').removeClass('col-lg-6').addClass('col-lg-3').removeClass('p-5');
        $('.dlt-img').removeClass('col-lg-6').addClass('col-lg-3').removeClass('p-5');
        $('.custom-img').css('height','500'+'px')
    })
});

