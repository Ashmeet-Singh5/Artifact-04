function validateForm() {
    let fname = document.forms["valForm"]["fname"].value;
    let lname = document.forms["valForm"]["lname"].value;
    let phone = document.forms["valForm"]["phone"].value;
    let username = document.forms["valForm"]["username"].value;
    let password = document.forms["valForm"]["password"].value;
    let zip = document.forms["valForm"]["zip"].value;
    
    //First Name Validation---------------------------------------------------------------------------------
    if (fname.length > 20){
        alert("First Name cannot be longer than 20 characters");
        return false;
    }

    //Last Name Validation---------------------------------------------------------------------------------
    if (lname.length > 50){
        alert("Last Name cannot be longer than 50 characters");
        return false;
    }

    //Phone Validation---------------------------------------------------------------------------------
    if (phone.length > 15){
        alert("Phone cannot be longer than 15 characters");
        return false;
    }

    //Username Validation---------------------------------------------------------------------------------
    if (username.length > 12){
        alert("Username cannot be longer than 12 characters");
        return false;
    }

    //Password Validation---------------------------------------------------------------------------------
    if (password.length > 7){
        alert("Password cannot be longer than 7 characters");
        return false;
    }

    //Zip Validation---------------------------------------------------------------------------------
    if(zip.length > 5){
        alert("ZipCode cannot be longer than 5 characters");
        return false;
    }
  }