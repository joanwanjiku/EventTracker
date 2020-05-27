$(document).ready(function(){
  
  $("form").submit(function(event){
    event.preventDefault();
  });
  $("#signin").click(function(){
    $("form#form2").hide();
  $("form#form1").toggle();
  })
  $("#signup").click(function(){
    $("form#form1").hide();
    $("form#form2").toggle();
  });
})
function validateform(){
  var name = document.getElementById("name").value
  var password = document.getElementById("password").value
  if(name =="" && password ==""){
    alert("Fill out all the fields");
  }
}
