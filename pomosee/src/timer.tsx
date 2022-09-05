 // Default inicial value of time
const defaultValue = 25 * 60 ; 



const countdown = (countdownTime, minutes) => {
  let counts=setInterval(updated, 1000);

  var secNumber = 60;
  var minNumber = 25; 

  function updated() {    


  
    var Mcount= document.querySelector(".min");
    var Scount= document.querySelector(".sec");

  



  
  
    var sec = --secNumber; 

    if(sec < 10 ) { sec = "0" + sec }
    if (sec === 59 && minNumber === 25) {--minNumber}; 

    if(minNumber != 25 && secNumber == 0) {
      --minNumber
      secNumber = 60;

    }

    Scount.innerHTML= sec;
    Mcount.innerHTML= minNumber;

      
    if(sec == 0) {
      Scount.innerHTML = "00";
      clearInterval(counts);
      
    } 

      

  }
   


  return updated();
  
  
 
} 







// Buttom export
export function activateLasers() {

  var countdownTime = document.querySelector(".countdown-timer"); 
  // Variable to the time
  var minutes = defaultValue


  return countdown( countdownTime, minutes );

}
