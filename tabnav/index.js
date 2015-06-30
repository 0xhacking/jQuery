jQuery(function(){
	$(".CategoryTree > ul > li").hover(function(){
		$(this).addClass("selected");
		$(this).children("a:eq(0)").addClass("h2-tit");
		$(this).children("ul").show();
        $(this).children("ul").offset({top:71});
	},function(){
		$(this).removeClass("selected");
		$(this).children(".tit").removeClass("h2-tit");
		$(this).children("ul").hide();
	})

})
//Download by http://www.jb51.net
