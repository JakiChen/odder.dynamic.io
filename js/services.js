

BaseURL = "http://10.10.2.24:8888"; 

angular.module('oohDear.services', [])
.factory('seris', function($http){
	var serisList =[];
	$http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
	$http.get( BaseURL + '/shop/seirs.json' )
		 .success(function(data, status, headers,config){
		 console.log('data success');
		 console.log(data); // object seems fine
	})
	
	
	
	.error(function(data, status, headers,config){
		 console.log('data error');
	})
	.then(function(result){
		 serisList = result.data;
	});
	return {
		all: function() {
		  console.log('return');
		  console.log(serisList);
		  return serisList;
		}
	}
	
});
