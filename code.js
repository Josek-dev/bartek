$(document).ready(function() {
    $("#otwarcie").hover(function(){
        $("#kontakt").css("border-left", "0px");
    },
    function(){
        $("#kontakt").css("border-left", "1px solid #aaaaaa");
  });
    $("#kontakt").hover(function(){
        $("#kontakt").css("border-left", "0px");
    },
    function(){
        $("#kontakt").css("border-left", "1px solid #aaaaaa");
    });

});
