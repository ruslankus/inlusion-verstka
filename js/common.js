$(document).ready(function(e) {
    
	$('.mask-holder > a').hover(function(e) {
		$(this).prev('img').addClass('rotate');      
		
    },function(e){
		$(this).prev('img').removeClass('rotate');
	});
	
});