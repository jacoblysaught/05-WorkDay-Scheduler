$(document).ready(function () { 

    // sets the current date at the top of the page
    var now = moment();
    $("#currentDay").text(now.format("MMMM Do YYYY, h:mm:ss a"));

    // makes the time at the top of the page live 
    window.setInterval(function () {
        $('#currentDay').html(moment().format("MMMM Do YYYY, h:mm:ss a"))
    }, 1000);

    function saveToStorage (event) {
        // this sets the users input to the value of the text field closest to the button that was clicked by navigating to the buttons parent element and finding the element with class form-control
        let userInput = $(event.target).parent().find(".form-control").val();
        // sets time slot in similar manner but sources the value of the id instead 
        let timeSlot = $(event.target).parent().find(".form-control").attr("id");
        // commits both values to the localStorage
        localStorage.setItem(timeSlot, userInput);
        
    };
    
    $('.saveBtn').on('click', saveToStorage);

    // updates the background of each row based on the time of day
    var colorTasks = function() {

        //gets current hour
        var currentHour = moment().hour();

        $(".task-info").each(function() {
            var elementHour = parseInt($(this).attr("id"));

            // sets the bg color depending on past, present, and future
            if (currentHour > elementHour) {
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
    colorTasks();

    $(".saveBtn").click(function() {
        let comment = $.trim($(".form-control").val());
        if(comment != "") {
          //alert(comment);
          
        }
    });
});


console.log(localStorage);