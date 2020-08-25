window.onload = () => {
	if(getCookie("logged_in") == true){
		setTimeout(()=> {
	        window.location.assign("profile.html");
	    }, 2000);
	} else {
	    setTimeout(()=> {
	        window.location.assign("login.html");
	    }, 2000);
	}
}