function myJob(){
   var Fname = document.getElementById('fname').value
   var Mname = document.getElementById('mname').value
   var Lname = document.getElementById('lname').value
   var Street = document.getElementById('strAddress').value
   var City = document.getElementById('city').value
   var State = document.getElementById('state').value
   var Email = document.getElementById('email').value
   var Phone = document.getElementById('phone').value
   var Resume = document.getElementById('resume').value

   if (Fname == ""){
    confirm("First Name is Required")
    return false;
   }
   else if (Mname == ""){
    confirm("Middle Name is Required")
    return false;
   }
   else if (Lname == ""){
    confirm("Last Name is Required")
    return false;
   }
   else if (Street == ""){
    confirm("Street Address is required")
    return false;
   }
   else if (City == ""){
    confirm("City is required")
    return false; 
   }
   else if (State == ""){
    confirm("State is required")
    return false;
   }
   else if(Email.length == ""){
    confirm('Enter Your Email')
    }
    if (!Email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    confirm("Invalid Email")
    return false;
    }
    else if (Phone == ""){
        confirm("Email is required")
        return false;
    }
    else if (Resume == ''){
        confirm("Upload resume")
        return false;
    }

    if ((confirm ('Are you sure you want to proceed?'))){
        
    } 
    else{
        return false;
    }

    window.open("../pages/success.html", "_blank")

    /* popup = window.open ("", "", "width=600, height=400 top=240, left=340, resizeable=1, scrollbars=0")
    
    popup.document.write('Application Submitted Successfully' +
    '<br/> Futher information would be reached through your Email')
    popup.document.style.color = "red" */
}