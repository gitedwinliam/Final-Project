var app = angular.module('abApp',[]);

$(document).ready(function(){
	var temp;
    $(".nav-tabs a").on('click',function(e){
    	e.preventDefault();
    	if (temp != e.target){
    		$(".tab-pane").removeClass("in active tabOn");
    	}
        $(this).tab('show');
        temp= e.target;
    });   

    $(".navScroll").on("click", 'a', function(e){
        e.preventDefault();
        
        var scrollToThis = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(scrollToThis).offset().top
            }, 500);
    });

    $('.icon').on("click",'a',function(e){
        e.preventDefault();

       $(".navBar").toggleClass('responsiveMenu'); 
    });

    $('#myCarousel').hover(
    function() {
        $(this).carousel('pause');
    },
    function() {
        $(this).carousel('cycle');
    }
);

});
