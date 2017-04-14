var pzlPiece = ["bk","bk","bk","bk","roo1","bk","roo2","bk","bk","bk","bk","bk","bk","","eye","bk","","bk","bk","bk","bk","bk","bk","div","bk","roo3","bk","roo2","bk","roo1","bk","roo2","bk","roo1","bk","bk","","bk","bk","roo3","bk","","eye","","bk","bk","","eye","bk","bk","","bk","roo3","","","bk","bk","bk","bk"];

for (var i=0; i<pzlPiece.length; i++) {
	$(".container").append("<div></div>");
	$(".container div:last-child").addClass(pzlPiece[i]);
}

$(".container").append("<p>Happy Chinese<br/>&nbsp &nbsp New Year!</p>");

$(document).ready(function(){
	$(".container").click(function() {
 	 	$(".bk").toggleClass("blk");
		$(".roo1").toggleClass("cmb1");
		$(".roo2").toggleClass("cmb2");
		$(".roo3").toggleClass("cmb3");
		$(".eye").toggleClass("blink");
		$("p").toggleClass("newYear");
	});
});
