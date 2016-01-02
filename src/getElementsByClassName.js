// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className){
	var ans=[];
	// If only className as argument, element default is document.body
	var element = arguments.length>1 ? arguments[1] :  document.body

	// Iterate through classList of element looking for match
	Array.prototype.forEach.call(element.classList, function(name){
		if( name==className ){ 
			return 	ans = ans.concat(element); 
		}
	});
	// Filter possible childNodes  
	var lowerNodes = Array.prototype.filter.call(element.childNodes, function(el){
		if(el.nodeName !== '#text' && el.nodeName !== 'SCRIPT'){
			return el;
		};
	});
	// If childNodes exist, recursive call on each childNode
	if( lowerNodes !== undefined ){
		Array.prototype.forEach.call(lowerNodes, function(el){	
			ans = ans.concat(getElementsByClassName(className, el));
		});
	}

	return ans;
};
