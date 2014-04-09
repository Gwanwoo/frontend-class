/**
 * 
 */
var board = document.getElementById("board");

var color;



var sum;
for(var i=0; i<4; i++){
  for(var j=0; j<4; j++){
    // TODO : 여기에 필요한 코드를 작성해주세요.
    var   newSpan=document.createElement('span');
    sum=0;
    sum=i+j;
    if(sum%2===1){color="white";}
    else{color="black";}
        newSpan.setAttribute('class',color);
   board.appendChild(newSpan);
  }
}
