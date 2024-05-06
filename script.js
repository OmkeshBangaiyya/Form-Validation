    function seterror(id, error) {
      document.getElementById(id + "Error").innerHTML = error;
    }

    function validateForm() {
      var name = document.forms["myForm"]["fname"].value;
      var email = document.forms["myForm"]["femail"].value;
      var phone = document.forms["myForm"]["fphone"].value;
      var pass = document.forms["myForm"]["fpass"].value;
      var cpass = document.forms["myForm"]["fcpass"].value;

      document.getElementById("nameError").innerHTML = "";
      document.getElementById("emailError").innerHTML = "";
      document.getElementById("phoneError").innerHTML = "";
      document.getElementById("passError").innerHTML = "";
      document.getElementById("cpassError").innerHTML = "";

      if (name === "") {
        seterror("name", "Name cannot be empty");
        return false;
      }

      if (email === "") {
        seterror("email", "Email cannot be empty");
        return false;
      }

      if (phone === "") {
        seterror("phone", "Phone cannot be empty");
        return false;
      }

      if (pass === "") {
        seterror("pass", "Password cannot be empty");
        return false;
      }

      if (cpass === "") {
        seterror("cpass", "Confirm Password cannot be empty");
        return false;
      }

      if (pass !== cpass) {
        seterror("cpass", "Passwords do not match");
        return false;
      }

      return true;
    }

    function storeFormData() {
      var formData = {
        name: document.getElementById("fname").value,
        email: document.getElementById("femail").value,
        phone: document.getElementById("fphone").value,
        password: document.getElementById("fpass").value,
        confirmPassword: document.getElementById("fcpass").value
      };
      // Store form data in localStorage
      localStorage.setItem("formData", JSON.stringify(formData));

      // Optionally, you can redirect the user to another page after storing the data
    //   window.location.href = "thankyou.html";
    }
 