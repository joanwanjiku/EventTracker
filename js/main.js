let usersArray = [
  {userName: "joan", password: "fooobar"},
  {userName: "clinton", password: "clinton"},
  {userName: "charles", password: "charles"},
  {userName: "virginiah", password: "virginiah"}
]


// Display current time
var timer = setInterval(getTime, 1000);
var today = new Date();
    var date = today.toLocaleDateString().toString();
    let mnt =  today.getMonth();
    let day = today.getDay()
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    document.getElementById('day').innerHTML = days[day] +","
    document.getElementById('date').innerHTML =today.getDate() + " " + months[mnt] + " "+ today.getFullYear();

function getTime() {
    var today = new Date();

    var time = today.toLocaleTimeString();
    document.getElementById('time').innerHTML = time;
}

// Toggle between sign in and sign up
$(document).ready(function(){
  $(window).scroll(function() {
    if($(window).scrollTop() > 60 ) {
      $('.my-navbar').addClass('navbar-scroll');
    } else {
      $('.my-navbar').removeClass('navbar-scroll');
    };
  });
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

// form validations
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
const checkLogin = (name, password) => {
  usersArray.forEach((user) => {
    if (user['userName'] == name && user['password'] == password){
      window.location.href = "./event.html";
    }else{
      document.getElementById('errorPresence').style.display = "block";
    }
  });
};


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
};
