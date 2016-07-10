
/* Sending Form Data To Google Form--Experimental */

<script language="JavaScript">
    function postDetailToGoogle() {
        var name = $('#name').val();
        var email = $('#email').val();
        var find = $('#find-us').val();
        var message = $('#message').val();

            $.ajax({
                url: "https://docs.google.com/forms/d/12HQS86SIvLtz1zGXRKOXC9j8J1DkcjGb9LiQB1xENO0/formResponse",
                data: { "entry_1327998690": name,
                "entry_1884294530": email, "entry_1290591818":
                find, "entry_901261253": message },
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                        window.location.replace("ThankYou.html");
                    },
                    200: function () {
                        window.location.replace("ThankYou.html");
                    }
                }
            });
    }
</script>