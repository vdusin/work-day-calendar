// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeDisplayEl = $('#currentDay');
// var timeBlockEl = $('') trying to use all the div ids for one function, How?

$(function () {
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
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


  // Click event and puts item into storage (How do i assign proper id(hour-9,
  //  should they all be the same?)? am i using row time-block, .saveBtn.... is this even complete?)
  // there is no 'this' as refered to in the todo, confusion everywhere
  $('.saveBtn').click(function saveInternalStorage(?) {
    var userInput = document.getElementById('timeBlockEl?').value;
    localStorage.setItem('.saveBtn?', userInput);
  })

  // current time color displays
var timeblocks = $(?).children()

console.log(timeblocks.css ('color', '?'))

var currentHour;

for (let index = 0; index < timeblocks.length; index++) {
  console.log('element', element);
  console.log('element.dataset.time', element.datatset.time)
  
}
if (element.dataset.time === currentHour){

}
else  (){
// change class
}
else(){

}
  // retreives stored text
  
   
  // display current time (not showing up. Is everything connected correctly? Missing something?)
  var today = dayjs();
  $('#currentDay').text(today.format('MMMM DD, YYYY'));
});