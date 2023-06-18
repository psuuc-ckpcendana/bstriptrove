const uname = 'admin';
const pword = 'password';
    function resetPassword() {
      var username = document.getElementById("eform").value;
      var newPassword = document.getElementById("epass").value;

      // Check if the provided username exists in the login credentials object
      if (username == uname) {
        alert("Password reset successful!");
        window.location.href = 'login.html'
      } else {
        alert("Invalid username. Please try again.");
      }
    }