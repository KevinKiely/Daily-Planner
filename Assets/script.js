
$(document).ready(function () {

  $('#block-9').children().eq(1).val(localStorage.getItem("nineAM"));
  $('#block-10').children().eq(1).val(localStorage.getItem("tenAM"));
  $('#block-11').children().eq(1).val(localStorage.getItem("elevenAM"));
  $('#block-12').children().eq(1).val(localStorage.getItem("twelvePM"));
  $('#block-13').children().eq(1).val(localStorage.getItem("onePM"));
  $('#block-14').children().eq(1).val(localStorage.getItem("twoPM"));
  $('#block-15').children().eq(1).val(localStorage.getItem("threePM"));
  $('#block-16').children().eq(1).val(localStorage.getItem("fourPM"));
  $('#block-17').children().eq(1).val(localStorage.getItem("fivePM"));
  

  $('.saveBtn').on('click', function () {
    var nineAM = $('#block-9').children().eq(1).val();
    localStorage.setItem("nineAM", nineAM);

    var tenAM = $('#block-10').children().eq(1).val();
    localStorage.setItem("tenAM", tenAM);

    var elevenAM = $('#block-11').children().eq(1).val();
    localStorage.setItem("elevenAM", elevenAM);

    var twelvePM = $('#block-12').children().eq(1).val();
    localStorage.setItem("twelvePM", twelvePM);

    var onePM = $('#block-13').children().eq(1).val();
    localStorage.setItem("onePM", onePM);

    var twoPM = $('#block-14').children().eq(1).val();
    localStorage.setItem("twoPM", twoPM);

    var threePM = $('#block-15').children().eq(1).val();
    localStorage.setItem("threePM", threePM);

    var fourPM = $('#block-16').children().eq(1).val();
    localStorage.setItem("fourPM", fourPM);

    var fivePM = $('#block-17').children().eq(1).val();
    localStorage.setItem("fivePM", fivePM);
  });

  var hour= parseInt(dayjs().format('HH'));
  console.log(hour);

  $('.time-block').each(function () {
    var currentTime = parseInt($(this).attr("id").split('-')[1]);
    console.log(currentTime);



    if (currentTime === hour) {
      console.log('here');
      $(this).addClass('present');
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