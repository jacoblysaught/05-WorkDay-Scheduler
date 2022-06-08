// sets the current date at the top of the page
var now = moment();
$("#currentDay").text(now.format("MMMM Do YYYY, h:mm:ss a"));

// 
window.setInterval(function () {
    $('#currentDay').html(moment().format("MMMM Do YYYY, h:mm:ss a"))
}, 1000);


// updates the background of each row based on the time of day
var colorTasks = function() {

    var currentHour = moment().hour();
    $(textarea).each(function() {
        var elementHour = parseInt($(this).attr("element"));

        // sets the bg color depending on past, present, and future
        if (elementHour < currentHour) {
            $(this).removeClass(["present", "future"]).addClass("past");
        }
        else if ( elementHour === currentHour) {
            $(this).removeClass(["future", "past"]).addClass("present");
        }
        else {
            $(this).removeClass(["past", "present"]).addClass("future");
        }
    })
};