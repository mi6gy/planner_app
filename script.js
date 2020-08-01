var now = moment().format("MMM Do YY");
$("#timeDay").append(now);

$(document).ready(function () {

    $(".rowBtn").on("click", function () {
        var value = $(this).siblings('.inputVal').val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value)
    })

    function hourUpdate() {

        var curHour = moment().hours();


        $(".row").each(function () {
            var hourBlock = parseInt($(this).attr("id"));

            if (hourBlock < curHour) {
                $(this).addClass('past')
            } else if (hourBlock === curHour) {
                $(this).removeClass('past')
                $(this).addClass('present')
            } else {
                $(this).removeClass('past')
                $(this).removeClass('presnet')
                $(this).addClass('future')
            
            }

        })







    }

    hourUpdate();



    //initial functions

    $("#8 .inputVal").val(localStorage.getItem("8"))
    $("#9 .inputVal").val(localStorage.getItem("9"))
    $("#10 .inputVal").val(localStorage.getItem("10"))
    $("#11 .inputVal").val(localStorage.getItem("11"))
    $("#12 .inputVal").val(localStorage.getItem("12"))
    $("#13 .inputVal").val(localStorage.getItem("13"))
    $("#14 .inputVal").val(localStorage.getItem("14"))
    $("#15 .inputVal").val(localStorage.getItem("15"))
    $("#16 .inputVal").val(localStorage.getItem("16"))
    $("#17 .inputVal").val(localStorage.getItem("17"))


});


//SAVE BUTTON
//grab value that was typed and stores into var
//this value of input which input based on iD
//store that into local storage

//grab from local storage
//display onto browser

//create func to update
//use moment to current hour and store in var
//loop over each time block, grab an id that tells us time block
// if current hour is less than time block to indicate the past

//css anything with class name pass to make it 'red'

//todays date and current time