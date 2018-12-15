$(document).ready(function(){
    $("#main-slider").owlCarousel({
        items: 1,
        rtl :true,
        loop:true,
        nav:true
    });

    $("#partners-slider").owlCarousel({
        items: 5,
        rtl :true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            700:{
                items:3
            },
            1000:{
                items:4
            }
            ,
            1200:{
                items:5
            }
        }
       
    });

  });

  new Vivus('serivce-icon-1', {duration: 250, file: '../images/passport.svg'}, myCallback1);
  new Vivus('serivce-icon-2', {duration: 250, file: '../images/bargain.svg'}, myCallback2);
  new Vivus('serivce-icon-3', {duration: 250, file: '../images/shake-hands.svg'}, myCallback3);

function myCallback1() {
    $('#serivce-icon-1 .st0').css({"fill-opacity": "1", "stroke": "transparent"});
}
function myCallback2() {
    $('#serivce-icon-2 .st0').css({"fill-opacity": "1", "stroke": "transparent"});
}
function myCallback3() {
    $('#serivce-icon-3 .st0').css({"fill-opacity": "1", "stroke": "transparent"});
}



jQuery(document).ready(function($) {

    var carousel = $("#testimonials-slider");
    carousel.owlCarousel({
        loop : true,
        items : 3,
        margin:0,
        nav : true,
        dots : true,
        rtl:true,
        center:true
    });

    checkClasses();
    carousel.on('translated.owl.carousel', function(event) {
        checkClasses();
    });
    var owl = $('.owl-carousel');

        $('.prevButom').click(function() {
 
            owl.trigger('prev.owl.carousel', [300]);
            });
            $('.firstActiveItem .client-image').click(function() {
        
               owl.trigger('next.owl.carousel', [300]);
               });
   

    function checkClasses(){
        var total = $('#testimonials-slider .owl-stage .owl-item.active').length;

        $('#testimonials-slider .owl-stage .owl-item').removeClass('firstActiveItem lastActiveItem');

        $('#testimonials-slider .owl-stage .owl-item.active').each(function(index){
            if (index === 0) {
                // this is the first one
                $(this).addClass('firstActiveItem');
            }
            if (index === total - 1 && total>1) {
                // this is the last one
                $(this).addClass('lastActiveItem');
            }
        });
    }

$('.firstActiveItem').on('click',function(){
    console.log('sdsaasd');
    
});
});

