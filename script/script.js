

  document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit");
    const paragraphElement = document.getElementById("paragraph");
  
    submitButton.addEventListener("click", function () {
      const userName = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phoneNumber = document.getElementById("phone-number").value;
      const userSelectSubject = document.getElementById("subject").value;
      const userPassword = document.getElementById("password").value;
      const userConfirmPassword = document.getElementById("password-1").value;
      const userCheckbox = document.getElementById("checkbox");
  
      if (userName === "") {
        paragraphElement.style.display = "block";
        paragraphElement.textContent = "Please enter your name";
        console.log("Please enter your name");
      } else if (email === "") {
        paragraphElement.style.display = "block";
        paragraphElement.textContent = "Please enter your email";
        
      } else if (phoneNumber === "") {
        paragraphElement.style.display = "block";
        paragraphElement.textContent = "Please enter your phone number";

      } else if (userSelectSubject === "") {
        paragraphElement.style.display = "block";
        paragraphElement.textContent = "Please Select One Subject";
        
      } else if (userPassword === "") {
        paragraphElement.style.display = "block";
        paragraphElement.textContent = "Please enter your password";
        
      } else if (userConfirmPassword === "") {
        paragraphElement.style.display = "block";
        paragraphElement.textContent = "Please enter confirm the same password above";
         
          
        } else if (userPassword == userConfirmPassword) {
          paragraphElement.style.display = "block";
          paragraphElement.textContent = "The Password does not match.";
        
      } 
       else {
        alert("Successfully Submitted");
      }
    });
  });
  