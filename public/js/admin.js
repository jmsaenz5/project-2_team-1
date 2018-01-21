var newUser;
$(document).ready(function() {
    $("#addUser").on("click", function(e) {
        e.preventDefault();
        newUser = {
            userFirst: $("#userFirst").val().trim(),
            userLast: $("#userLast").val().trim(),
            staffID: $("#staffID").val().trim(),
            loginName: $("#")
        };
    });
});