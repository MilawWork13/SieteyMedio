window.addEventListener(
  "DOMContentLoaded",
  () => {
            document.querySelector("#buttonRegister").addEventListener(
              "click",
              (e) => {
                const nameInput = document.querySelector("#name").value;
                const passwordInput = document.querySelector("#password").value;
                if (nameInput != "" && passwordInput != "") {
                    if (passwordInput.indexOf(" ") !== -1 || nameInput.indexOf(" ") !== -1) {
                        window.alert("La contraseña y el nombre no pueden tener espacios");
                    } else {
                      const userData = {
                        nombre: nameInput,
                        contrasena: passwordInput
                      };
                      fetch("http://localhost:8080/WebProject/introducir-jugador", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(userData)
                      })
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

