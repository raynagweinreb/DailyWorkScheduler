// Enters day at the top of the page 
var todaysDate = moment();
$("#currentDay").text(todaysDate.format("MMMM Do YYYY, h:mm: a"))
//Gets hour data to color the correct hours 
var thisHour = parseInt(moment().format('HH'));
// creates variabel for every hour to save to local storage and append 
var hour9am = $("#9am");
var hour10am = $("#10am");
var hour11am = $("#11am");
var hour12pm = $("12pm");
var hour1pm = $("#1pm");
var hour2pm = $("#2pm");
var hour3pm = $("#3pm");
var hour4pm = $("#4pm");
var hour5pm = $("#5pm");

//setting hte color of each text area depending on what time it is 
$("textarea").each(function(){
    var hour = parseInt($(this).attr("name"));
    if ( hour < thisHour ){
        $(this).addClass("bg-danger")
    }
    if ( hour > thisHour ){
        $(this).addClass("bg-warning");
    }
    if ( hour === thisHour ){
        $(this).addClass("bg-success");
    }
})
//setting what happens when a user clicks the save button 
$("button").on("click",function(){
    localStorage.setItem("9Am",(hour9am.val()));
    localStorage.setItem("10Am",(hour10am.val()));
    localStorage.setItem("11Am",(hour11am.val()));
    localStorage.setItem("12Pm",(hour12pm.val()));
    localStorage.setItem("1Pm",(hour1pm.val()));
    localStorage.setItem("2Pm",(hour2pm.val()));
    localStorage.setItem("3Pm",(hour3pm.val()));
    localStorage.setItem("4Pm",(hour4pm.val()));
    localStorage.setItem("5Pm",(hour5pm.val()));
})

//retreiving users schedule on load 

$("#9am").append(localStorage.getItem("9Am"));
$("#10am").append(localStorage.getItem("10Am"));
$("#11am").append(localStorage.getItem("11Am"));
$("#12pm").append(localStorage.getItem("12Pm"));
$("#1pm").append(localStorage.getItem("1Pm"));
$("#2pm").append(localStorage.getItem("2Pm"));
$("#3pm").append(localStorage.getItem("3Pm"));
$("#4pm").append(localStorage.getItem("4Pm"));
$("#5pm").append(localStorage.getItem("5Pm"));