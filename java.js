    
 
       
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

    
    var Info =[];

    function addText(){
        ev.preventDefault();  //to stop the form submitting
        let newInfo = {
            textarea: document.getElementById('textarea').value,
            
        }
        Info.push(newInfo);
        
        //for display purposes only
        

        //saving to localStorage
        localStorage.setItem('userInput', JSON.stringify(Info) );
    }
    document.addEventListener('.fas fa-save', ()=>{
        document.getElementById('b1').addEventListener('click', '.saveBtn');
    });