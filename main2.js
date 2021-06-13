window.onload=pageLoad;
function pageLoad(){
	var contactForm = document.getElementById("contactForm");
	contactForm.onsubmit= validate;
}
function validate(){
	var check = true;
	var firstname = document.getElementById("firstname").value;
	var mail = document.getElementById("email").value;
	var secondname = document.getElementById("secondname").value;
	var password = document.getElementById("password").value;
    var phone = document.getElementById("telephone").value;

	if(firstname == ""){
		alert('First name is required !');
		check= false;
	}
    else if (!firstname.match(/^[A-Za-z ]+$/)){
        alert("only letters or space allowed in firstname field");
        check= false;
    }
    if (secondname == "") {
        alert('last name is required !');
        check = false;
    }
    else if (!secondname.match(/^[A-Za-z ]+$/)){ 
        alert("only letters or space allowed in last name field");
        check = false;
    }
	
	if(mail == ""){
		alert('E-mail is required !');
		check= false;
	}
    else if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
        alert("Email is Not Valid");
        check=false;
     }
    
    if (password == "")
    {
        alert ("Password is required !");
        check = false;
    }
    else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=^[A-Z])(?!.*\s).{8}$/)){
		alert("Password is Not Valid, It must contain 8 characters: 1 uppercase, one lowercase, one number and one special character at least");
		check=false;
	}
    if (phone == "") {

		alert('Phone is required !');
    } 
    else if(!phone.match(/^[0-9]{11}$/)) {

		alert("Phone is not valid");
		check=false;
    }
    return check;

}
