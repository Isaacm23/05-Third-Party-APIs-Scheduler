

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
    var eventInput = $(click).val();
    localStorage.setItem(click, eventInput);
    
console.log(click)

// load from local storage on page load

let timeBlock = ["#t1","#t2","#t3","#t4","#t5","#t6","#t7","t8","#t9"]

for (let i = 0; i < timeBlock.length; i++) {
    let savedEvent = $('textarea')
    console.log(savedEvent)
           
    $(timeBlock[i]).val(localStorage.getItem(timeBlock[i]));
    console.log(timeBlock[i])
}});
