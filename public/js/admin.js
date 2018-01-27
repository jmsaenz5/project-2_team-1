var newUser;
$(document).ready(function() {
  $("#addNewUser").on("click", function(e) {
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
    console.log(newUser);
    $.post("./api/Users", newUser);
    $("#userFirst").val("");
    $("#userLast").val("");
    $("#staffID").val("");
    $("#userEmail").val("");
    $("#securityRole").val("");
    $("#accountStatus").val("");
  });
  
  $("#editUser").on("click", function(e) {
    e.preventDefault();

  });
});
