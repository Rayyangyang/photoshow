
setTimeout(function(){
	$('.init').removeClass('init');

},400)
$('.item').on('click', function(){
	$('.wrapper').addClass('wrapper-active');
	$(this).addClass('item-active');
})
$('.close').on('click', function(e){
	e.stopPropagation();
	$('.wrapper-active').removeClass('wrapper-active');
	$('.item-active').removeClass('item-active');

})