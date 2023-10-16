

document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit");
  const paragraphElement = document.getElementById("paragraph");

  submitButton.addEventListener("click", function () {
    const userName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const userSelectSubject = document.getElementById("subject").value;
    const userPassword = document.getElementById("password-1").value;
    const userConfirmPassword = document.getElementById("password-2").value;
    const userCheckbox = document.getElementById("checkbox").value;
    console.log(userSelectSubject);


    if (userName === "") {
      paragraphElement.style.display = "block";
      paragraphElement.textContent = "Please enter your name";
      console.log("Please enter your name");
      return false;

    }  
    if (email === "") {
      paragraphElement.style.display = "block";
      paragraphElement.textContent = "Please enter your email";
      console.log("email input")
      return false;
      
    }  
    if (phoneNumber === "") {
      paragraphElement.style.display = "block";
      paragraphElement.textContent = "Please enter your phone number";
      console.log("Phone Input")
      return false;

    }
     if (userSelectSubject == 0) {
      paragraphElement.style.display = "block";
      paragraphElement.textContent = "Please Select One Subject";
      console.log("hello")
      return false;
      
    } 
    
     if (userPassword === "") {
      paragraphElement.style.display = "block";
      paragraphElement.textContent = "Please enter your password";
      return false;
     
      
    }
    if (userConfirmPassword === "") {
      paragraphElement.style.display = "block";
      paragraphElement.textContent = "Please enter the same password";
      return false;
       
        
      } 
     
      if (userPassword !== userConfirmPassword) {
        paragraphElement.style.display = "block";
        paragraphElement.textContent = "The Password does not match.";
        return false;
      
    } 
    if (userCheckbox === "") {
      paragraphElement.style.display = "block";
      paragraphElement.textContent = "Please check the box to move forward.";
      console.log("sucessful")
      return false;
    }
     else {
      alert("Successfully Submitted");
    }
  });
});
