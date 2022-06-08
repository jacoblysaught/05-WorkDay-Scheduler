// sets the current date at the top of the page
var today = moment();
$("#currentDay").text(today.format("MMMM Do YYYY, h:mm:ss a"));

window.setInterval(function () {
    $('#currentDay').html(moment().format("MMMM Do YYYY, h:mm:ss a"))
}, 1000);