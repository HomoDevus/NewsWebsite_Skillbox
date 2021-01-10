$(function() {
    $.get('http://data.fixer.io/api/latest?access_key=d256ad03b0e378c15bb87329a6c4a0d0', 
    {symbols: 'USD, RUB'},
    function(response) {
        let RUB = response.rates.RUB.toFixed(2)
        let USD = response.rates.USD.toFixed(2)
        $('#RUB').append(`<strong>₽</strong> ${RUB}`);
        $('#USD').append(`<strong>$</strong> ${USD}`);
    })

    let menu = false
    let body = $('body')

    $('html').on('click','#nav-button', function () {
        $(function() {
            if(menu == false){
                $(body).addClass("fixed");
                $('#mobile-menu').animate({
                    height: "525px",
                    padding: "25px 15px"
                })
                $('.mobile-menu-section').css({
                    display: "block"
                })
                menu = true
            } else {
                $(body).removeClass("fixed");
                $('#mobile-menu').animate({
                    height: "0px",
                    padding: "0 15px"
                })
                setTimeout(function(){
                    $('.mobile-menu-section').css('display','none');
                }, 300);
                menu = false
            }
        })
    })
});
