

$("#currentDay").text(moment().format("dddd, MMMM Do"));
$("#currentTime").text(moment().format("ha"));
$("#fw1").text(moment().add(1, "hour").format("ha"));
$("#fw2").text(moment().add(2, "hour").format("ha"));
$("#fw3").text(moment().add(3, "hour").format("ha"));
$("#fw4").text(moment().add(4, "hour").format("ha"));
$("#fw5").text(moment().add(5, "hour").format("ha"));
$("#backOne").text(moment().subtract(1, "hour").format("ha"));
$("#backTwo").text(moment().subtract(2, "hour").format("ha"));
$("#backThree").text(moment().subtract(3, "hour").format("ha"));





$(".saveBtn").on("click", function(){
    event.preventDefault();
    var click = $(this).attr("id");
    var eventInput = $("textarea").val();
    localStorage.setItem(click, eventInput);
    


// load from local storage on page load

let timeBlock = ["#t1","#t2","#t3","#t4","#t5","#t6","#t7","t8","#t9"]
let timeBlock =[ "#b1","#b2","#b3","#b4","#b5","#b6","#b7","#b8","#b9"]
for (let i = 0; i < timeBlock.length; i++) {
    let savedEvent = $('textarea')
    
           
   $(timeBlock[i]).val(localStorage.getItem(timeBlock[i]));
    
}})
