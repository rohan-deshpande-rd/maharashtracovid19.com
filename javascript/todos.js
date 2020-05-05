$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){                
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//adding new todo's
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todotext=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>");
    };
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();  
});

//deleting the todo's  NOTE-- click only add the events to the existing li's on the page but not the li's thar are going to be added 
//to the list in future. but 'on' event adds the li's that are specified in the future like "add events to all the li's inside 
//the ul" as specified above.  