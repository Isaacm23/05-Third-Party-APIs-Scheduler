

  
  
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



// heres what I have so far
$(".saveBtn").click(function() {
    value = $(this).siblings("textarea").val();
    hourString = $(this).siblings("div").text();
    
    localStorage.setItem(hourString, JSON.stringify(value));
})
    function onload(){
    var timeBlock = ["#currentTime","#fw1","#fw2","#fw3","#fw4","#fw5","#backOne","#backTwo","#backthree"]

    for (var i = 0; i < timeBlock.length; i++) {
        var savedEvent = $('hour')
        
               
       $(timeBlock[i]).val(localStorage.getItem(JSON.stringify(timeBlock[i])));
        
    }};
    
    
   
