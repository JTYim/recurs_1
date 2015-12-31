// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	if(arguments.length>1){
		var args = Array.prototype.slice.call(arguments, 1);
		var x = args[0].childNodes;
		var x = Array.prototype.filter.call(args[0].childNodes, function(el,i,coll){
			if(el.nodeName !== '#text' && el.nodeName !== 'SCRIPT'){
				return el;
			};
		});
		// debugger;
	}else{
		var x = Array.prototype.filter.call(document.body.childNodes, function(el,i,coll){
			if(el.nodeName !== '#text' && el.nodeName !== 'SCRIPT'){
				return el;
			};
		});
	}
	// debugger;
	var y = Array.prototype.forEach.call(x, function(e,i,coll){
			Array.prototype.forEach.call(e.classList, function(el){
				debugger;
				if(el === cl){
					ans = ans.concat(e);
				}
			});
		if(!(e.childNodes==undefined)){
			// debugger;
			getElementsByClassName(cl, e);
		}else{
			return;
		}	
	});
	return ans;

	// vs
	
	// return document.getElementsByClassName(cl)
};
