var tID;
function stopAnimate() {
  clearInterval(tID);
}
function animateScript() {
  var position = 256;
  const interval = 100;
  const diff = 256;
  tID = setInterval(() => {
    document.getElementById("image").style.backgroundPosition =
      `-${position}px 0px`;    
    if (position < 1536) {
      position = position + diff;
    }
    else {
      position = 256;
    }  
  }, interval);
  myMove();
}
function myMove(){
  var elem = document.getElementById("image");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 512) {
      clearInterval(id);
      myMove();
    } else {
      pos++;
      elem.style.left = pos + "px"; 
    }
  }
}