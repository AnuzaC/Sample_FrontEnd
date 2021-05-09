function validateForm(){
	var username = document.loginForm.username.value.trim();
	var password = document.loginForm.password.value;
	document.getElementById('err_username').style.color = "red";

	if (username == '') {
		// alert('Enter username');
		document.getElementById('err_username').innerHTML = "Enter Username";
		document.loginForm.username.focus();
		return false;
	}  else if(username.length < 8){
		document.getElementById('err_username').innerHTML = "Username must be 8 character"
		// alert('Username must be 8 character');
		document.loginForm.username.focus();
		return false;
	} else {
		document.getElementById('err_username').innerHTML = "";
	}

	if (password == '') {
		alert('Enter password');
		document.loginForm.password.focus();
		return false;
	}
}
