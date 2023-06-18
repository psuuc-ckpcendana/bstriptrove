const uname = 'admin';
const pword = 'password';
function login() {
    var username = document.getElementById("eform").value;
    var password = document.getElementById("pform").value;

    if (username == uname && password == pword) {
      alert("Welcome User!");
      window.location.href = 'dashboard.html';
    } 
    else if (password == pword){
      alert("Invalid username.");
      return;
    }
    else if (username == uname ){
        alert("Invalid password.");
        return;
    }
    else{
        alert("Invalid username and password");
        return;
    }
  }

  function signup(){
    alert("Create an account");
    window.location.href = 'signup.html';
  }