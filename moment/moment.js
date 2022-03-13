
var currentDate = moment(). format('dddd') + " "+ moment().format("08 03 2022");

var nineAm = $("#9am");
var tenAm =  $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("14pm");
var threePm = $("15pm");
var fourPm = $("16pm");
var fivePm = $("17pm");
var sixPm = $("#18pm");
var sevenPm = $("#19pm");



var hour=moment().hours();
var userInput;
var hourSpan;


//Date
var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
    +momentNow.format('dddd')
    .substring(0.3).toUpperCase());
},100)





function background (){
    var timeTest = parseInt($(this).attr("id"));
    hour = parseInt(hour);
    console.log(timeTest);
    console.log(hour);
//console.log(this);
if (hour >timeTest) {
    $(this).addClass("past");
} else if (hour <timeTest) {
    $(this).addClass("future");
} else{
    $(this).addClass("present");
}
}


$(document).ready(function(){
    initPage()
    background()
})
localStorage.setItem();