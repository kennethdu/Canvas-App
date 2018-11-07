$(document).ready(function() {
  $("#goodSide").click(function(event) {
    event.preventDefault();
    $("#intro").hide();
    $("#secondIntro").hide();
    $("#firstCanvas").show();
    
  });
  $("#badSide").click(function(event) {
    event.preventDefault();
    $("#intro").hide();
    $("#secondIntro").hide();
    $("#firstCanvas").show();

  });

});
