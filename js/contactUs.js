function mySubmit(){
    var Fname = document.getElementById('fname').value
    var Lname = document.getElementById('lname').value
    var Email = document.getElementById('email').value
    var Text = document.getElementById('text').value
    var Token = document.getElementById('token').value = Math.trunc(Math.random() * 10101010)

    if ( Fname == ''){
        confirm('First Name Required')
        return false;
    }
    else if ( Lname == ''){
        confirm('Last Name Required')
        return false;
    }
    else if ( Email.length == ''){
        confirm('Email required')
        return false;
    }
    else if (!Email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        confirm('Invalid Email')
        return false;
    }
    else if ( Text == ''){
        confirm('Enter a Message')
        return false;
    }
    
        window.open("../pages/contact.html", "_blank");
    

    /* popup = window.open('', '', "width=600, height=400 top=240, left=340, resizeable=1, scrollbars=0")
    popup.document.write('Thank for contacting us' + '<br /> You would be reached through your email.'
    + '<br />' + '<br />' + 'Here is your Reference Id : ' + Token + '') */

}