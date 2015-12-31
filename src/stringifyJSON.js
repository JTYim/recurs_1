// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	// base cases for primatives
	var result = obj;
	if(typeof result === 'string'){ 
		return result = "\""+result+"\"";
	}else if(typeof result === 'number' || typeof result === 'boolean' || result===null || result==='boolean'){
		return result = String(result);
	}else if(result===undefined){
		return;
	}
	// recursive calls for arrays and objects
	if(Array.isArray(result)){
		if(result.length===0){ return "[]"; }
		result = result.reduce(function(acc, el, i,arr){
			if( i===arr.length-1 ){
				acc = acc.concat( stringifyJSON(el) );
			}else{
				acc = acc.concat( stringifyJSON(el) ) + ",";
			}
			return acc;
		},"[" );
		return result = result + "]";
	}else if(typeof result==='object'){
		if(Object.keys(result).length===0){ return "{}"; }
		var ans="";
		for(var k in result){	
			var tempV = stringifyJSON( obj[k] );
			var tempK = stringifyJSON( k );
			ans = ans.concat(tempK+ ":" + tempV+",");
		}
		return ans = "{" + ans.substring(0,ans.length-1) + "}";
	}
};
