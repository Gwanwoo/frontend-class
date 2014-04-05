/**
 * 
 */
function sumTest(){
var arr=[];

for(var i=0;i<1000;i++){
 arr[i]=prompt("정수를 입력하세요");
  if(arr[i]==null){
	break;
}	
}
var sum=0;
for(var k=0;k<arr.length;k++){
sum=sum+arr[k]*1;
}

alert("합은"+sum);
}

sumTest();