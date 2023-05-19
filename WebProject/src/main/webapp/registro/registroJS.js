// Add event listener when the DOM is loaded
window.addEventListener(
  "DOMContentLoaded",
  () => {
    // Add event listener to the register button
    document.querySelector("#buttonRegister").addEventListener(
      "click",
      (e) => {
        // Get the input values for name and password
        const nameInput = document.querySelector("#name").value;
        const passwordInput = document.querySelector("#password").value;

        // Check if both name and password inputs are not empty
        if (nameInput != "" && passwordInput != "") {
          // Check if name or password contains spaces
          if (passwordInput.indexOf(" ") !== -1 || nameInput.indexOf(" ") !== -1) {
            window.alert("La contraseña y el nombre no pueden tener espacios");
          } else {
            // Create an object with user data
            const userData = {
              nombre: nameInput,
              contrasena: passwordInput
            };

            // Send a POST request to the specified URL with user data
            fetch("http://localhost:8080/WebProject/introducir-jugador", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(userData)
            })

            // Redirect to a new location
            location.replace("http://localhost:8080/WebProject/index.jsp?");
          }
        } else {
          alert("No puede haber campos en blanco");

        }
      },
      false
    );
  },
  false
);

