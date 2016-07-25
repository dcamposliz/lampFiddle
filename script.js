function showHint(str){
	if(str.length == 0){
		document.getElementById("txtHint").innerHTML = "";
		return;
	}else{
		var ajaxCall = new XMLHttpRequest();
		ajaxCall.onreadystatechange = function(){
			if(ajaxCall.readyState == 4 && ajaxCall.status == 200){
				documentGetElementById("txtHint").innerHTML = ajaxCall.responseText;
			}
		};
		ajaxCall.open("GET", "getHint.php?q=" + str, true);
		ajaxCall.send();
	}
}