$("#form-submission").submit(function(event) {
    var nameOfUser = $("input#user-name").val();
    var emailOfUser = $("input#user-email").val();

    if (nameOfUser != "" && emailOfUser != "") {
      alert(
        "Hey there " +
          nameOfUser +
          ". Thank you for contacting us. We will get in touch with you through your email: " +
          emailOfUser
      );

      $("form-submission").reset();
    } else {
      alert("Invalid input! Please fill in your name and email address.");
    }

    event.preventDefault();
  });
