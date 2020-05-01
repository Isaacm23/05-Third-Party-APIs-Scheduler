    
    
       
    $("#currentDay").text(moment().format("dddd, MMMM Do"))
        
    $("#currentTime").text(moment().format("ha"))
        
    $("#fw1").text(moment().add(1, 'hour').format("ha"))
    $("#fw2").text(moment().add(2, 'hour').format("ha"))
    $("#fw3").text(moment().add(3, 'hour').format("ha"))
    $("#fw4").text(moment().add(4, 'hour').format("ha"))
    $("#fw5").text(moment().add(5, 'hour').format("ha"))
    $("#backOne").text(moment().subtract(1, 'hour').format("ha"))
    $("#backTwo").text(moment().subtract(2, 'hour').format("ha"))
    $("#backThree").text(moment().subtract(3, 'hour').format("ha"))

var currentHour = moment().format("h")
    function colors(){ 
        

    };

        
  console.log(currentHour)

    

    

