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
});
let usersArray = [
  {userName: "joan", password: "fooobar"},
  {userName: "clinton", password: "clinton"},
  {userName: "charles", password: "charles"}
]
let signinBtn = document.getElementById('signinForm');
let signupBtn = document.getElementById('signupForm');
signinBtn.addEventListener('click', () => {
  let name = document.getElementById('name').value;
  let password = document.getElementById('password').value;
  console.log(`${name}, ${password}`)
  checkLogin(name,password);
  usersArray.push({userName: name, password: password})
  console.log(usersArray);
  sessionStorage.user = JSON.stringify({userName: name, userPassword: password})
});

const checkLogin = (name, password) => {
  if (password.length > 6){
      window.location.href = "./event.html";
  }else{
      if(password !== password2){
          document.getElementById('errorMatch').style.display = "block";
      }
      if (password.length < 6){
          document.getElementById('errorLen').style.display = "block";
      }
  }
}
signupBtn.addEventListener('click', () => {
  let name = document.getElementById('name').value;
  let password = document.getElementById('password').value;
  console.log(`${name}, ${password}`)
  checkPassword(password);
  usersArray.push({userName: name, password: password})
  console.log(usersArray);
  sessionStorage.user = JSON.stringify({userName: name, userPassword: password})
});

const checkPasswordSignup = (password) => {
  let password2 = document.getElementById('password1').value;
  if (password === password2 && password.length > 6){
      window.location.href = "./event.html";
  }else{
      if(password !== password2){
          document.getElementById('errorMatch').style.display = "block";
      }
      if (password.length < 6){
          document.getElementById('errorLen').style.display = "block";
      }
  }
}



// function validateform(){
//   var name = document.getElementById("name").value
//   var password = document.getElementById("password").value
//   if(name =="" && password ==""){
//     alert("Fill out all the fields");
//   }
// }

