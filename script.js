function validateForm() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMsg = document.getElementById('error-msg');
  
        if (username === "" || password === "") {
          errorMsg.textContent = "Username and password cannot be empty!";
          return false;
        }
  
        if (username !== "admin") {
          errorMsg.textContent = "Invalid username!";
          return false;
        }
  
        if (password !== "1234") {
          errorMsg.textContent = "Invalid password!";
          return false;
        }
  
        errorMsg.textContent = " ";
        alert("Login Successfully!!")
        return true; 
      }
  
  