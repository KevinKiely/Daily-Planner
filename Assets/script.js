// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {


  $('#block-10').children().eq(1).val(localStorage.getItem("tenAM"));
  $('#block-9').children().eq(1).val(localStorage.getItem("nineAM"));

  $('.saveBtn').on('click', function () {
    console.log("entered saved text");
    var nineAM = $('#block-9').children().eq(1).val();
    //GRAB VALUE FOR EACH TIME BLOCK

    localStorage.setItem("nineAM", nineAM);

    var tenAM = $('#block-10').children().eq(1).val();
    localStorage.setItem("tenAM", tenAM);
  });

  var hour= parseInt(dayjs().format('HH'));
  console.log(hour);

  $('.time-block').each(function () {
    var currentTime = parseInt($(this).attr("id").split('-')[1]);
    console.log(currentTime);



    if (currentTime === hour) {
      console.log('here');
      $(this).addClass('present');
      console.log($(this));
      $(this).removeClass('past');
      $(this).removeClass('future');
    }
    else if (currentTime > hour) {
      $(this).addClass('future');
      $(this).removeClass('past');
      $(this).removeClass('present');

    }
    else {
      $(this).addClass('past');
      $(this).removeClass('future');
      $(this).removeClass('present');
    }
  });


  var now = dayjs().format('MMM DD, YYYY');
  $('#currentDay').text(now);



});








// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

// Use currentHour= dayjs().format to get the hour, then compare the current hour to the value of the ID hour. Use an if/else if/else statement. If the hour=IDhour, add attribute "current" to the attribute of the block. If

//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.



