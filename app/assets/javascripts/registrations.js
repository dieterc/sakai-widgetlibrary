$(function() {

    // Reset all the errors on a new submit of the form
    $("#user_new, #user_edit").live("submit", function(){
        WL.reset_errors();
        $("#check_username_result").removeClass("available unavailable").text("");
    });

    // Handle checking for the username availability
    $("#check_username").on("click", function() {
        var username = $.trim($("#user_username").val());
        if (username) {
            $.ajax({
                url: "/register/check_username/" + username,
                success: function(data) {
                    if (data) {
                        var text = username + " " + data.text,
                            classToAdd = "available";
                        if (data.user_found === true) {
                            classToAdd = "unavailable";
                        }
                        $("#check_username_result").removeClass("available unavailable").addClass(classToAdd).text(text);
                    }
                }
            });
        }
    });
});
