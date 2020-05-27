let usersArray = [
  {userName: "joan", password: "fooobar"},
  {userName: "clinton", password: "clinton"},
  {userName: "charles", password: "charles"},
  {userName: "virginiah", password: "virginiah"}
]


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


  $('#errorLen').hide();
  $('#errorMatch').hide();
  $('#errorPresence').hide();
  $('#errorPassword').hide();

  $('#form2').submit(function(e) {
    e.preventDefault();    
    var name = $('#signupName').val();
    var password = $('#signupPass').val();
    checkSignup(password)
    sessionStorage.user = JSON.stringify({userName: name, userPassword: password});

  });

  $('#form1').submit(function(e) {
    e.preventDefault();    
    var name = $('#signinName').val();
    var password = $('#signinPass').val();
    checkLogin(name, password)
    sessionStorage.user = JSON.stringify({userName: name, userPassword: password});
  });


});

let signinBtn = document.getElementById('signinForm');
let signupBtn = document.getElementById('signupForm');
// signinBtn.addEventListener('click', () => {
//   let name = document.getElementById('name').value;
//   let password = document.getElementById('password').value;
//   console.log(`${name}, ${password}`)
//   checkLogin(name,password);
//   usersArray.push({userName: name, password: password})
//   console.log(usersArray);
//   sessionStorage.user = JSON.stringify({userName: name, userPassword: password})
// });

const checkLogin = (name, password) => {
  usersArray.forEach((user) => {
    if (user['userName'] == name && user['password'] == password){
      window.location.href = "./event.html";
    }else{
      if(user['userName'] != name){
        document.getElementById('errorPresence').style.display = "block";
      }
      if(user['password'] != password){
        document.getElementById('errorPassword').style.display = "block";
      }
    }
  });
}
// signupBtn.addEventListener('click', () => {
//   let name = document.getElementById('signupName').value;
//   let password = document.getElementById('signupPass').value;
//   console.log(`${name}, ${password}`)
//   checkSignup(password);
//   usersArray.push({userName: name, password: password})
//   console.log(usersArray);
//   sessionStorage.user = JSON.stringify({userName: name, userPassword: password})
// });

const checkSignup = (password) => {
  let password2 = document.getElementById('signupPass2').value;
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

