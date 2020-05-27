let user = JSON.parse(sessionStorage.user)
document.getElementById('personName').innerHTML = user.userName;
$(document).ready(function() {
    $('#eventForm').submit(function(e) {
      var nameEvent = $('#nameEvent').val();
      var dateEvent = $('#eventDate').val();

    });
    
})