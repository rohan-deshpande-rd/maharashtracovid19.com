// $("button").on("click",function(){
//     $("div").fadeToggle(500);
//     $("div").css("float","right");
// });

$("button").on("click",function(){
    $("div").slideToggle(1000,function(){
        $(this).css("color","blue");
        $(this).css("font-size","20px");
        $(this).css("background","black");
    });
});
