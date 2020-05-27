let user = JSON.parse(sessionStorage.user)
document.getElementById('personName').innerHTML = user.userName;


// kahsd, 3036-08-04, 11am, jsgdf
function Event(name, date, time, description, location){
    this.eventName = name;
    this.eventDate = date;
    this.eventTime = time;
    this.description = description;
    this.eventLocation = location;
}

Event.prototype.timeDifference = function(){
    let difference = new Date(this.eventDate) - new Date();
    let remaining = "Time's up!";

    if (difference > 0) {
        const parts = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };

        remaining = Object.keys(parts)
        // [days, hours, minutes, seconds]
            .map(function(part){
            // if (!parts[part]) return;
                return `${parts[part]} ${part}`;
            });
            // .join(" ");
        }
    return remaining;
}

$(document).ready(function() {
    $('#eventForm').submit(function(e) {
        e.preventDefault();
        var nameEvent = $('#nameEvent').val();
        var dateEvent = $('#eventDate').val();
        var timeEvent = $('#timeofEvent').val();
        var eventDescription = $('#eventDesc').val();
        var locationEvent = $('#locationEvent').val()
        console.log(`${nameEvent}, ${dateEvent}, ${timeEvent}, ${eventDescription}`);

        var event = new Event(nameEvent, dateEvent, timeEvent, eventDescription, locationEvent)

        $('#eventList').append(`<div class="card">
        <div class="card-header" id="${event.eventName}">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            ${event.eventName}
            </button>
          </h2>
        </div>
    
        <div id="collapseOne" class="collapse" aria-labelledby="${event.eventName}" data-parent="#eventList">
          <div class="card-body">
          <p>Your event will take place at <span style= "font-weight:bold;">${event.eventTime}</span> on <span style= "font-weight:bold;">${event.eventLocation}</span>, 
          you have  <span style= "font-weight:bold;">${event.timeDifference()} </span>to the start
          of your event<p>
          <p>${event.description}</p>
          
          </div>
          <div class="card-footer">
          <a href= "#" class = "btn btn-primary">${event.timeDifference()}</a>          
          </div>
        </div>
      </div> `)
    });
    
})