function myLogin(){
    var User = document.getElementById("email").value
    var Pass = document.getElementById("passcode").value;


    if(User == "" || Pass == ""){
        swal({
            title: "Information Missing!",
            text: "Username and password required",
            icon: "warning",
            button: "ok!",
        });

    }
    else if(User === "tomide@gmail.com" && Pass === "1234"){
        /* swal({
            title: "Successfully logged in!",
            // text: "logged in succeessfully",
            icon: "success",
        }); */
        window.open("../pages/dahboard.html")

    }
    else{
        swal({
            title: "Wrong Information!",
            text: "Username and password not correct",
            icon: "warning",
            button: "ok!",
        });
    }

}