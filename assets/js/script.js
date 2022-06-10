// sets the current date at the top of the page
var now = moment();
$("#currentDay").text(now.format("MMMM Do YYYY, h:mm:ss a"));

// makes the time at the top of the page live 
window.setInterval(function () {
    $('#currentDay').html(moment().format("MMMM Do YYYY, h:mm:ss a"))
}, 1000);

var tasks = {
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": []
};

var setTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// updates the background of each row based on the time of day
var colorTasks = function() {

    //gets current hour
    var currentHour = moment().hour();

    $(".task-info").each(function() {
        var elementHour = parseInt($(this).attr("id"));

        // sets the bg color depending on past, present, and future
        if (currentHour < elementHour) {
            $(this).removeClass(["present", "future"]).addClass("past");
        }
        else if (currentHour === elementHour) {
            $(this).removeClass(["past", "future"]).addClass("present");
        }
        else {
            $(this).removeClass(["past", "present"]).addClass("future");
        }
    })
};

//calls function to work and display the colors
colorTasks()

// saves input text to localStorage on button click
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings("#myTextarea").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);


    // retrieves value of text if there is any
    $("#9 .form-control").val(localStorage.getItem("hour9"));
    $("#10 .form-control").val(localStorage.getItem("hour10"));
    $("#11 .form-control").val(localStorage.getItem("hour11"));
    $("#12 .form-control").val(localStorage.getItem("hour12"));
    $("#13 .form-control").val(localStorage.getItem("hour13"));
    $("#14 .form-control").val(localStorage.getItem("hour14"));
    $("#15 .form-control").val(localStorage.getItem("hour15"));
    $("#16 .form-control").val(localStorage.getItem("hour16"));
    $("#17 .form-control").val(localStorage.getItem("hour17"));

});