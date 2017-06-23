$(document).ready(function(){

    $("#animate1 .post").addClass('animated zoomIn');
    
    var h = $(window).height();
    $(window).scroll(function(){
        if ( ($(this).scrollTop()+h) >= $("#animate2").offset().top) {
            $("#animate2 .post").css({visibility:"visible"});
            $("#animate2 .post").eq(0).addClass('animated bounceInLeft');
            $("#animate2 .post").eq(1).addClass('animated bounceInRight');
        } 
        if ( ($(this).scrollTop()+h) >= $("#animate3").offset().top) {
            $("#animate3 .post").css({visibility:"visible"});
            $("#animate3 .post").eq(0).addClass('animated bounceInLeft');
            $("#animate3 .post").eq(1).addClass('animated bounceInRight');
        } 
        if ( ($(this).scrollTop()+h) >= $("#animate4").offset().top) {
            $("#animate4 .post").css({visibility:"visible"});
            $("#animate4 .post").addClass('animated zoomIn');
        } 
        
        if ( $(this).scrollTop() == 0 ) {
            $("#animate2 .post, #animate3 .post, #animate4 .post").each(function(){
                if ( $(this).hasClass('last') ) {
                    $(this).removeClass('post last').addClass('post last');
                } else {
                    $(this).removeClass('post').addClass('post');
                }
                $(this).css({visibility:"hidden"});
            });
        }
    });
});