(function(){
	var DOMAIN = "creazionidaphne.com";
	
	var NEW_DOCUMENT = 0;
	if(this != parent && name == "XYZZY2"){
		parent.postMessage({type: NEW_DOCUMENT, title: document.title, pathquery: location.pathname+location.search}, "http://"+DOMAIN);
	}else if(!window.PL || location.hash.search(/access_token/) == -1){
		location.replace("//"+DOMAIN+location.pathname+location.search);
	}
})()