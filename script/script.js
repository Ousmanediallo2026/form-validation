document.addEventListener("DOMContentLoaded", function () {
    const userName = document.getElementById("name");
    const userEmail = document.getElementById("email");
    const userPhoneNumber = document.getElementById("phone-number");
    const userSelectSubject = document.getElementById("subject");
    const userPassword = document.getElementById("password");
    const userConfirmPassword = document.getElementById("password-1");
    const userCheckbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
  
    submitButton.addEventListener("click", function () {
      const name = userName.value;
      const email = userEmail.value;
      const phoneNumber = userPhoneNumber.value;
      if (name === "") {
        alert("Please enter your name");
        console.log("Please enter your name");
      }
      if (email === "") {
        alert("Please enter your phone");
        console.log("Please enter your email");
      }
      // Email input validation
     
      
      // Phone number input validation
      
      else if ( phoneNumber === "") {
        alert("Please enter your phone");
        console.log("Please enter your phone");
      }
      else {
        alert("nothing")
      }

    });
  });
  