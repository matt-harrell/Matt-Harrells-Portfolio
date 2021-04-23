(function() {
      emailjs.init("user_2qUgrDgOaTC97OzhbZIal");
      })();

window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // generate a five digit number for the contact_number variable


            if ($("#name").val()==="") {
              $("#incomplete_warning").removeClass("chidden");
              $("#incomplete_warning_name").removeClass("chidden");
            } else {
                $("#incomplete_warning_name").addClass("chidden");
            }

            if ($("#email").val()==="") {
              $("#incomplete_warning").removeClass("chidden");
              $("#incomplete_warning_email").removeClass("chidden");
            } else {
                $("#incomplete_warning_email").addClass("chidden");
            }

            if ($("#message").val()==="") {
              $("#incomplete_warning").removeClass("chidden");
              $("#incomplete_warning_message").removeClass("chidden");
            } else {
                $("#incomplete_warning_message").addClass("chidden");
            }


            if ($("#name").val()==="") {
              $("#incomplete_warning").removeClass("chidden");
              $("#incomplete_warning_name").removeClass("chidden");
            } else if ($("#email").val()==="") {
              $("#incomplete_warning").removeClass("chidden");
              $("#incomplete_warning_email").removeClass("chidden");

            }  else if ($("#message").val()==="") {
                $("#incomplete_warning").removeClass("chidden");
                $("#incomplete_warning_message").removeClass("chidden");

            } else {


              this.contact_number.value = Math.random() * 100000 | 0;
              emailjs.sendForm('service_flclhna', 'template_a32bvui', this)
              // (function() {
              //     console.log('SUCCESS!');
              //     $(".form_text").val("");
              //     alert("Message Sent. Thank you for your feedback!");
              // }, function(error) {
              //     console.log('FAILED...', error);
              // });
                  console.log('SUCCESS!');
                  $("#incomplete_warning").addClass("chidden");
                  $(".form_text").val("");
                  alert("Message Sent. Thank you for your feedback!");


            }

        });
    }
