//$("li").click(function()--this is only for existing elements in original html file
$("ul").on("click", "li", function(){      //for all li's that are added to ul
	$(this).toggleClass("completed");     //check for done events in the list
});

//Delete elements from the list by clicking the X
$("ul").on("click", "span", function(event){     //simlar to above
	$(this).parent().fadeOut(500,function(){     //parent so that li which is parent ofspan is removed
      $(this).remove();
	});
	event.stopPropagation();  //so that when we click x the li part doesnt get affected
});

//create new todos
$("input[type='text']").keypress(function(event){
	if(event.which=== 13){
       var textadd=$(this).val();
       $(this).val("");
       $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + textadd + "</li>");
	}

});

$(".fa-plus-square").click(function(){
	$("input[type='text']").fadeToggle();
})
