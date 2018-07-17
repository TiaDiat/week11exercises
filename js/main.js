//$(document).ready(function()) {}

$("#show").click(function() {
	$("img").show();
});

$("#hide").click(function() {
	$("img").hide();
});

//when the image is visible and you click the button, the image disppears; when the image is not visible and you click the button, the image reappears
$("#toggleImg").click(function() {
	$("img").toggle();
});

//toggles this new "fade" class on and off for the image element when clicked
$("#fade").click(function() {
	$("img").toggle(".fade");
});

//make the image change to a different image on hover 
$("img").hover(function() {
		$("img").attr("src", "https://www.nba.com/warriors/sites/warriors/files/styles/story_main_photo/public/web-image1-670.png?itok=ZiInTPR1");
	},
	
	function() {
		$("img").attr("src", "https://www.cheatsheet.com/wp-content/uploads/2015/05/golden-state-warriors-e1432049915210.jpg");
});

//when this button is clicked, add a new list-item with some text content to this unordered list
$("#list").click(function () {
	  var selectedVal = $("#select").val();

  $('ul').append('<li>'+selectedVal)
  $("#select").val("");

}); 

 // when this button is clicked, cause an element to render with a red background, which covers your entire window and all of the elements on your page. Make sure that if you try to scroll, you can still see nothing but the red background.

 $("#red").click(function() {
 	$("body").append("<div id='cover'></div");
 })
