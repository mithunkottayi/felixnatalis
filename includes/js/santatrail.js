for (let i = 1; i <= 50; i++) {
  $(".snowfall").append($("<div/>", { class: "snowflake" }));
}

$(document).ready(function() {
  // Set the target Christmas date (December 25, 2024, 00:00:00)
  const christmasDate = new Date("December 25, 2024 00:00:00").getTime();

  // Function to update the countdown
  function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = christmasDate - now;

      if (timeLeft <= 0) {
          $('#days').text('00');
          $('#hours').text('00');
          $('#minutes').text('00');
          $('#seconds').text('00');
          return;
      }

      // Calculate time remaining
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      // Update countdown display
      $('#days').text(days.toString().padStart(2, '0'));
      $('#hours').text(hours.toString().padStart(2, '0'));
      $('#minutes').text(minutes.toString().padStart(2, '0'));
      $('#seconds').text(seconds.toString().padStart(2, '0'));
  }

  // Update countdown every second
  setInterval(updateCountdown, 0);
});
//Contact Form validate  
if($("#contactform").length > 0){
  $("#contactform").validate({
    rules:{
      // if any
    },
    messages:{
    //  if any
    }
  });
}