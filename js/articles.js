function FixedAnime(){
    var headerH = $('#aboves').outerHeight(true);
    var scroll = $(window).scrollTop();

    if(scroll >= headerH){
        $('#aboves').addClass('fixed');
        $('#abovetabbar').addClass('fixed');
    }else{
        $('#aboves').removeClass('fixed');
        $('#abovetabbar').removeClass('fixed');
    }
}

$(window).scroll(function (){
    FixedAnime();
});

$(window).on('load', function(){
    FixedAnime();
});