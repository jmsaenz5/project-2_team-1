var newUser;
$(document).ready(function() {
    $("#addUser").on("click", function(e) {
        e.preventDefault();
        newUser = {
            userFirst: $("#userFirst").val().trim(),
            userLast: $("#userLast").val().trim(),
            staffID: $("#staffID").val().trim(),
            loginName: $("#loginName").val().trim(),
            dateFrom: $("#dateFrom").val().trim(),
            dateTo: $("#dateTo").val().trim(),
            costCenter: $("#costCenter").val().trim(),
            locationCode: $("#locationCode").val().trim(),
            personID: $("#personID").val().trim(),
            securityRole: $("#securityRole").val(),
            accountStatus: $("#accountStatus").val()
        };
        $.post("./api/Initiator", newUser);

    });
    $("#editUser").on("click", function(e) {
        e.preventDefault();

    });
});
<<<<<<< HEAD
=======

//module.exports = newUser;
//doesn't like this - Jennifer said to get rid of it :)
>>>>>>> 471ba42432a5e56aa5e78072cbea4b1bb87d1de7
