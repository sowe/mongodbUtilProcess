function toDate (ts){
		if(! objectExist(ts)){
		var ps = mongoEvaluation(ts).$date;
		var firstsplit = ps.split("T");
		var date = firstsplit[0];
		var time = firstsplit[1];
		var datesplit = date.split("-");
		var timesplit = time.split(":");
		var secondsplit = timesplit[2].split(".");
		var d2 = new Date(datesplit[0], datesplit[1], datesplit[2], timesplit[0], timesplit[1], secondsplit[0], secondsplit[1].replace("Z","")).getTime(); 
		return d2;	
		} else {
			var d2 = new Date();
			return d2.getTime();
		}
}

function mongoEvaluation (value){
		var tmp2;
		eval("tmp2 = " + aux);
		if(!(tmp2 instanceof Array)) {
	 		return tmp2;
		}else{
			return tmp2;
		}
}

function objectExist (aux,value){
		if(aux){
 			return aux;
		} else {
			return value;
		}
}


function objectExist (aux){
		if(aux){
 			return true;
		} else {
			return false;
		}
}
