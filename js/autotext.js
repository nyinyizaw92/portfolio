const text = document.getElementById('auto-text');
const prog = "I'M CODER";
let idx = 1;

var refreshIntervalId = setInterval(writeText, 200);

/* later */



function writeText(){
  text.innerText = prog.slice(0,idx);
  idx++;
  
  if(idx-1 == prog.length){
    clearInterval(refreshIntervalId);
}

  if(idx > prog.length){
    idx = 1;
  }

}
