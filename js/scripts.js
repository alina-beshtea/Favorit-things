$(document).ready(function() {
  $("form").submit(function(event){

  var answer1 =  $("#answer1").val();
  var answer2 =  $("#answer2").val();
  var answer3 =  $("#answer3").val();
  var originalArray = [answer1,answer2,answer3]

  originalArray.push("sam","jon","mary");
  
  document.write(originalArray);
  // originalArray.display(ul);

  console.log(originalArray);

event.preventDefault();
  });
});
