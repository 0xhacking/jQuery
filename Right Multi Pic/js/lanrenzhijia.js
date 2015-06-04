$(document).ready(function(){
	$('#select_btn li:first').css('border','none');
	if ($('#zSlider').length) {
		zSlider();
	}
	function zSlider(ID, delay){
		var ID=ID?ID:'#zSlider';
		var delay=delay?delay:5000;
		var currentEQ=0, picnum=$('#picshow_img li').size(), autoScrollFUN;
        var li_len = $('#select_btn li').length;
		$('#select_btn li').eq(currentEQ).addClass('current');
		$('#picshow_img li').eq(currentEQ).show();
		$('#picshow_tx li').eq(currentEQ).show();
        
		$('body').keydown(function(e){
            if(e.keyCode==40){
                currentEQ = (currentEQ+1 < li_len) ? currentEQ+1 : 0 ;
            }else if(e.keyCode==38){
                currentEQ = (currentEQ-1 < 0) ? li_len-1 : currentEQ-1 ;
            }
                $('#select_btn li').removeClass('current');
                $('#picshow_img li').hide();
                $('#picshow_tx li').hide().eq(currentEQ).slideDown(100);
                $('#select_btn li').eq(currentEQ).addClass('current');
                $('#picshow_img li').eq(currentEQ).show();
                return false;
		});
	};
})

