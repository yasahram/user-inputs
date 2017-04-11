$(function() { 
  
  $("#age-submit").click(function(){
    var ageString = $("#age").val();
    var age = parseInt(ageString);

    
    if ( age >= 16 ) {
      
      $("#friends-form").show();
      $("#age-form").hide();
    } else {
      $("#answer").text("haaa haaa you too young.");
      $("#club-img").attr("src", "");
    }
    
  });

  $("#friends-submit").click(function(){
    var friendsSeasonsString = $("#friends-seasons").val();
    var friendsSeasons = parseInt(friendsSeasonsString);

    if ( friendsSeasons = 10 ) {
      $("#friends-form").hide();
      $("#answer").text("Impressive, welcome to the club.");
      $("#club-img").attr("src", "https://68.media.tumblr.com/f01c8b9b969f8a4b4c7117766973dd39/tumblr_o5m9p8Tafv1udj5wwo1_500.gif");
      
    } else {
      $("#answer").text("Find yourself out, you aren't educated enough.");
      $("#club-img").attr("src", "https://media.giphy.com/media/YhRzFyF3EzhXG/giphy.gif");
    }
  });

});



