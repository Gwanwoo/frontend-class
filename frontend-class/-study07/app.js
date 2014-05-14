/**
 * 
 */



var API_URL = "http://apis.daum.net/search/web?q={query}&apikey=252855d973dc969f965c442a8dcbee8a7ac7c2a6&output=json&callback={callback}";
 
 var items 
var count=0;
 
 $('#searchForm').on("submit",function(event){
 	
	console.log('submit');
	
	var query = $('#query').val();
    var url = API_URL.replace('{query}',query).replace('{callback}','?');
    $.ajax(url,{
 	cache : true,
 	dataType : 'jsonp',
 	complete  :function(jqXHR, status){
 		var data = jqXHR.responseJSON;
 		items = data.channel.item;

 			console.log(items[count]);
 			 count++;

 			var newli="<li>"+items[count].title+"</li>";
 			$('#resultUl').append(newli);

 			

 		}
 	});
 	 return false;
 	
 });
$('#more_bt').click(function() {
	console.log('submit');
	
	var query = $('#query').val();
    var url = API_URL.replace('{query}',query).replace('{callback}','?');
    $.ajax(url,{
 	cache : true,
 	dataType : 'jsonp',
 	complete  :function(jqXHR, status){
 		var data = jqXHR.responseJSON;
 		items = data.channel.item;
 		
 			console.log(items[count]);
             count++;

 			var newli="<li>"+items[count].title+"</li>";
 			$('#resultUl').append(newli);
 			
 		
 		}
 	});
 	 return false;
 	 	
 });