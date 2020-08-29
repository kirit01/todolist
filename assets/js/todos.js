// check off specific todos By Clicking 
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
    // or below code
    /*   //if li is gray 
       // console.log($(this).css("color")); 
       if ($(this).css("color") === "rgb(128, 128, 128)") {
           //turn it blacks
           $(this).css({
               color:"black",
               textDecoration:"none"
           });
       }
       //else
       else {
           // turn it gray        
           $(this).css({
               color: "gray",
               textDecoration: "line-through"
           });
       } */
});


//click on span to delete todos
$("ul").on("click", "span", function (event) {
    //parent is used to remove the parent
    $(this).parent().fadeOut(500, function () {
        // this in remove is not same as remove as its above
        $(this).remove();
    });
    // stopPropogation stops other events from firing, span is inside ul, so here we trigger only span so we need  to cancel propogation of other things  
    event.stopPropagation();
});

$('input[type=text]').keypress(function (event) {
    if (event.which === 13) {
        //grabbing new todo text from  from input
        var todoText = ($(this).val());
        $(this).val("");
        //create a new li and add it to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});




$(".fa-plus-circle").click(function(){
    $('input[type=text]').fadeToggle(1);
});