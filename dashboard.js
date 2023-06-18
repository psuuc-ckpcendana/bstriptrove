const userData = {
 name: 'Christian Kaide Cendaña'
};
function updateProf() {
    
    var updatedName = document.getElementById("eform").value;
    var updatedEmail = document.getElementById("email").value;

    if (updatedName === "" || updatedEmail === "") {
      alert("Please fill in all fields.");
      return;
    }

    userData.name = updatedName.value;
    userData.email = updatedEmail.value;

    alert("Profile updated successfully!");
    window.location.href = 'dashboard.html'
  }
var tracker = document.getElementById("tracker");

tracker.addEventListener("mouseenter", function() {
    document.getElementById("name").innerHTML += " " + userData.name;
  });

tracker.addEventListener("mouseleave", function() {
    document.getElementById("name").innerHTML = "";
  });

function logout() {
    alert("Log out successfully");
    window.location.href = 'login.html';
}
function updateProfile()
{
  window.location.href = 'updateprofile.html'
}
