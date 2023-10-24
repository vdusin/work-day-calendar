var timeDisplayEl = $('#currentDay');

$(function () {
// internal storage (not finished)
  $('.saveBtn').click(function() {
    console.log($(this).parent().eq(1))
  })

// current time color displays
var timeblocks = $(".time-block")
console.log(timeblocks)

var currentHour = dayjs().format("H")
timeblocks.each(function() {
var hour = $(this).attr("id").split("-")[1]
if (hour === currentHour){
  $(this).addClass("present")
}
else if (currentHour < hour){
  $(this).addClass("future")
}
else if (currentHour > hour){
  $(this).addClass("past")
}
})
   
// display current time at top of page
var today = dayjs();
$('#currentDay').text(today.format('MMMM DD, YYYY'));
});