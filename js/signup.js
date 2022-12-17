function mySubmit(){
    let fname = document.getElementById('firstname').value;
    let lname = document.getElementById('lastname').value;
    let Email = document.getElementById('email').value;
    let Phone = document.getElementById('phone').value;
    var Password = document.getElementById('password');
    var Passcode = document.getElementById('password1');


    

    const el = document.createElement('div')
    el.innerHTML = "<a href='../pages/login.html'>Login</a>"


    if(fname.value === '' || lname.value === ''|| Email.value === '' || Password.value === ''
     || Passcode.value === '' || Phone.value === ''){
        swal({
            title: "Information Missing!",
            text: "All fields are required",
            icon: "warning",
            button: "ok!",
        });
    }
    else{
        swal({
            // title: "Information Missing!",
            text: "Registration Successful",
            icon: "success",
            // button: "ok!",
            content: el,
        });

    }

    /* else {
        setTimeout(()=>{
            fname.value = '';
            lname.value = '';
            Email.value = '';
            Password.value = '';
            Passcode.value = '';
        }, 2000);

        success.style.display = 'block';
    }

    setTimeout(()=> {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000); */

    
}