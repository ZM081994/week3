define(function(){
	var url=location.search;
	if(url.indexOf("?")!=-1){
		url=url.substr(1);
	}
	
	var parms={};
	var bigArr=url.split("&");
	bigArr.forEach(function(item){
		var sArr=item.split("=");
		parms[sArr[0]]=sArr[1]
	})
	
	return parms;
})