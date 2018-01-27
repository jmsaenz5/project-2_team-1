

var newUser;
$(document).ready(function() {
  $("#addUser").on("click", function(e) {
    e.preventDefault();
    newUser = {
      First_Name: $("#userFirst")
        .val()
        .trim(),
      Last_Name: $("#userLast")
        .val()
        .trim(),
      Staff_ID: $("#staffID")
        .val()
        .trim(),
      Email: $("#userEmail")
        .val()
        .trim(),
      Security_Role: $("#securityRole").val(),
      Active_Status: $("#accountStatus").val()
    };
    $.post("./api/Users", newUser);
  });
  $("#editUser").on("click", function(e) {
    e.preventDefault();
  });
});
