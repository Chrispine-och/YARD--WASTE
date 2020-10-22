  // function location (){
    // var location
    // var selectedservicesavailable = document.getElementById("sevices")
    // var CostOfSize = selectedservices.options[selectedSize.selectedIndex].value
    // console.log(CostOfSize)
    // var selectedCrust = document.getElementById("location")
    // var CostOfCrust = selectedlocation.options[selectedlocation.selectedIndex].value;
    // var selectedservicesavailable= document.getElementById("services available")
    // var CostOfToppings = selectedTopping.options[selectedservices.selectedIndex].value;
    // var QuantityOftrucks= document.getElementById("nummber of trucks.value")
    // document.getElementById("totallist").value = totallist;
    // event.preventDefault();
    

  
  
  // $("#orderDelivery").on("click", function()
    // var yourLocation = document.getElementById("location").value;
    alert("show selected location and number of trucks") + yourLocation 
  // });
  
  // $("#submit").on("click", function () {
    // var userName = document.getElementById("name").value;
    // alert(userName + " " + "we have received your message, thank you for your feedback");
  // });
  
  

  
  $(document).ready(function(){
$("#form-submission").submit(function(event) {
    event.preventDefault();
    console.log("form-submission");

    var nameOfUser = $("input#user-name").val();
    
    var emailOfUser = $("input#user-email").val();
    console.log(nameofuse);

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
  });