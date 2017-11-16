$(document).ready(function() {

//Handle User Form input
$(function() {
    $('#rideForm').submit(function(event) {
        event.preventDefault(); // Stops browser from navigating away from page
        var data = {};
        var data = {
          ridecapacity: document.querySelector("#ridecapacity").value,
          origin: document.querySelector("#origin").value,
          rideprice: document.querySelector("#rideprice").value,
          destination: document.querySelector("#ridedestination").value,
          date: document.querySelector("#dtp_input").value,
          userid: document.querySelector("#userid").value,
          username: document.querySelector("#userName").value
        }
        console.log("Sending Data to server:");
        console.log(data);
        // build a json object or do something with the form, store in data
        $.post('/api/rides', data, function(resp) {
            alert(resp);
            // do something when it was successful
            console.log(resp);
        });
    });
});
// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function(){
        $('.navbar-toggle:visible').click();
});

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      var d = $('#jumbo');
    if ($(window).scrollTop() > d.prop("scrollHeight") ) {
      $('#nav_bar').addClass('navbar-fixed-top');
      $('#linkList').addClass('fixed-links');
      //$('body').css('margin-top','54px');
    }
    if ($(window).scrollTop() < d.prop("scrollHeight")) {
      $('#nav_bar').removeClass('navbar-fixed-top');
      $('#linkList').removeClass('fixed-links');
      //$('body').css('margin-top','0px');
    }
  });

  // Add smooth scrolling to nav links
  $(".XX").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      console.log("Hash" + hash);
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 50
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
