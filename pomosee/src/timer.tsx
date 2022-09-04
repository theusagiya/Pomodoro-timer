
// Function that implermant start buttom
function startTimer(duration: number, display: Element  ) {
  var timer = duration, minutes, seconds;
  console.log(display);

  var interval = setInterval(() => {
    
  
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);


    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    
    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
        timer = duration
    } 

    

  }, 1000); 



  


}



function timer() {
  var duration = 60 * 1; 
  var display = document.querySelector("#timer");
  return startTimer(duration, display);

}




// Buttom export
export function activateLasers() {

  return timer();
}
