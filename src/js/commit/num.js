define(function(){
	
	var nums=function(data,num){
		var newArr=[];
		var total=Math.ceil(data.length/num);
		for(var i=0;i<total;i++){
			newArr.push(data.splice(0,num));
		}
		return newArr;
	}
	return nums
})