$(document).ready(function() {
  $("form").submit(function(event){

  var answer1 =  $("#answer1").val();
  var answer2 =  $("#answer2").val();
  var answer3 =  $("#answer3").val();
  var myArray = [answer1,answer2,answer3]

  console.log(myArray);

event.preventDefault();
  });
//  var food Input = $(input#food).val();


});
