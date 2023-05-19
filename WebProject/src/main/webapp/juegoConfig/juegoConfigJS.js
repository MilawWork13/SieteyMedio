// Get all elements with the class 'btn-danger'
const showUnknownUserButtons = document.getElementsByClassName('btn-danger');
// Get all elements with the class 'btn-dark'
const showKnownUserButtons = document.getElementsByClassName('btn-dark');
// Get the element with the ID 'startGame'
const startGameButton = document.getElementById('startGame');
// Empty arrays to store player names and bets
const nombres = [];
const apostado = [];
// Array to store confirm buttons
const confirmButtonsArr = [];

// Assign event listeners to each "showknownUser" button
for (let i = 0; i < showKnownUserButtons.length; i++) {
    showKnownUserButtons[i].addEventListener('click', function () {

        // Get the parent element of the button
        const cardBody = this.parentNode;
        cardBody.setAttribute('id', 'knownUser');

        const firstCard = document.createElement('div');
        firstCard.className = 'row';
        cardBody.appendChild(firstCard);

        // Create elements for name and password input fields
        const fieldName = document.createElement('input');
        fieldName.type = 'text';
        fieldName.className = 'form-control';
        fieldName.placeholder = 'Nombre';

        const fieldPass = document.createElement('input');
        fieldPass.type = 'password';
        fieldPass.className = 'form-control';
        fieldPass.placeholder = 'Contraseña';

        const textDiv1Card = document.createElement('div');
        textDiv1Card.classList.add('row');
        cardBody.appendChild(textDiv1Card);

        const lastButtonsRow = document.createElement('div');
        lastButtonsRow.classList.add('row');
        cardBody.appendChild(lastButtonsRow);

        const confirmButton = document.createElement('button');
        confirmButton.classList.add('btn', 'btn-success', 'col-6', 'my-2');
        confirmButton.textContent = 'Confirmar';
        confirmButtonsArr.push(confirmButton);
        lastButtonsRow.appendChild(confirmButton);

        const backButton = document.createElement('button');
        backButton.classList.add('btn', 'btn-secondary', 'col-6', 'my-2');
        backButton.textContent = 'Volver';
        lastButtonsRow.appendChild(backButton);

        firstCard.appendChild(fieldName);
        firstCard.appendChild(fieldPass);
        firstCard.appendChild(textDiv1Card);

        if (i != 3) {
            // Create elements for bet input fields
            const textLabelDiv1 = document.createElement('h6');
            textLabelDiv1.classList.add('text-center', 'my-4');
            textLabelDiv1.textContent = 'Apuesta por realizar';
            textDiv1Card.appendChild(textLabelDiv1);

            const moneyFieldsDiv = document.createElement('div');
            moneyFieldsDiv.classList.add('row');
            cardBody.appendChild(moneyFieldsDiv);

            const fieldEur = document.createElement('input');
            fieldEur.type = 'number';
            fieldEur.classList.add('col-6', 'form-control');
            fieldEur.placeholder = 'Max 2 EUR';
            fieldEur.setAttribute('id', 'euros');
            fieldEur.setAttribute('min', '0');
            fieldEur.setAttribute('max', '2');
            moneyFieldsDiv.appendChild(fieldEur);

            const fieldCents = document.createElement('input');
            fieldCents.type = 'number';
            fieldCents.classList.add('col-6', 'form-control')
            fieldCents.placeholder = 'Max 99 cents';
            fieldCents.setAttribute('id', 'cents');
            fieldCents.setAttribute('min', '0');
            fieldCents.setAttribute('max', '99');
            moneyFieldsDiv.appendChild(fieldCents);

            firstCard.appendChild(moneyFieldsDiv);
        }
        firstCard.appendChild(lastButtonsRow);

        const euros = document.getElementById('euros');
        const cents = document.getElementById('cents');

        //Add and eventListener to Confirm buttons to save data
        confirmButton.addEventListener('click', function () {
            if (fieldName.value == "" || fieldPass.value == "") {
                window.alert("Faltan datos por introducir");
            } if (i !== 3) {
                if (euros.value === '' && cents.value === '') {
                    euros.value = 0;
                    cents.value = 0;
                    window.alert("¡Se ha cambiado su apuesta a 0 por defecto!");
                } else {
                    if (euros.value === '') {
                        euros.value = 0;
                    } else if (cents.value == "" || (parseFloat(euros.value) + parseFloat(cents.value) / 100) > 2) {
                        cents.value = 0;
                    }

                    if (parseInt(euros.value) >= 2) {
                        euros.value = 2;
                        cents.value = 0;
                    } else if (Number(parseFloat(euros.value)) === parseFloat(euros.value) &&
                        parseFloat(euros.value) % 1 !== 0
                    ) {
                        euros.value = Math.floor(parseFloat(euros.value));
                    }

                    if (parseInt(cents.value) > 99) {
                        cents.value = 99;
                    } else if (parseInt(cents.value) < 0 || parseInt(euros.value) == 2) {
                        cents.value = 0;
                    } else if (
                        Number(parseFloat(cents.value)) === parseFloat(cents.value) &&
                        parseFloat(cents.value) % 1 !== 0
                    ) {
                        cents.value = Math.floor(parseFloat(cents.value));
                    }

                    const sumaApostado = parseFloat(euros.value) + parseFloat(cents.value) / 100;
                    if (sumaApostado > 1) {

                    } else {
                        sumaApostado == sumaApostado / 100;
                    }

                    checkForPlayerExistance(fieldName, fieldPass, i, sumaApostado, confirmButton, backButton); //Function to check players with same name
                }
            }
        });

        backButton.addEventListener('click', function () {
            firstCard.remove();
            showUnknownUserButtons[i].style.display = 'initial';
            showKnownUserButtons[i].style.display = 'initial';
        });

        showUnknownUserButtons[i].style.display = 'none';
        showKnownUserButtons[i].style.display = 'none';

        console.log(confirmButton);
    });
}
//Function to check players with same name
function checkForPlayerExistance(fieldName, fieldPass, i, sumaApostado, confirmButton, backButton) {
    let nombreExistente = false;
    let x = 0;

    while (x < nombres.length && !nombreExistente) {
        if (nombres[x] === fieldName.value) {
            window.alert('Jugador con el nombre ' + fieldName.value + ' ya está participando');
            nombreExistente = true;
        }
        x++;
    }

    if (!nombreExistente) {
        checkNamePassUser(fieldName.value, fieldPass.value, i, sumaApostado, confirmButton, backButton);
    }
}
//Function to check if the player exists in database
function checkNamePassUser(name, password, i, sumaApostado, confirmButton, backButton) {

    // Create a data object with the collected information
    const data = {
        nombre: name,
        contrasena: password
    };

    // Send a request to validate the user
    fetch('http://localhost:8080/WebProject/comprobar-jugador', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            if (result == "1") {
                // User exists, confirm the data
                if (i != 3) {
                    nombres[i] = name;
                    apostado[i] = sumaApostado;
                    window.alert('Jugador confirmado con éxito!')
                    confirmButton.disabled = true;
                    backButton.disabled = true;

                } else if (i == 3) {
                    nombres[i] = name;
                    window.alert('Jugador confirmado con éxito!')
                    confirmButton.disabled = true;
                    backButton.disabled = true;

                }
                console.log(nombres);
            } else {
                // User does not exist
                window.alert('Jugador no existe!');
            }
        })
        .catch(error => {
            console.error(error);
        });
    return nombres, apostado;
}

// Assign event listeners to each "showUnknownUser" button
for (let i = 0; i < showUnknownUserButtons.length; i++) {
    showUnknownUserButtons[i].addEventListener('click', function () {
        const cardBody = this.parentNode;
        cardBody.setAttribute('id', 'unknownUser');

        const firstCard = document.createElement('div');
        firstCard.className = 'row';
        cardBody.appendChild(firstCard);

        const textDiv1Card = document.createElement('div');
        textDiv1Card.classList.add('row');
        cardBody.appendChild(textDiv1Card);

        const lastButtonsRow = document.createElement('div');
        lastButtonsRow.classList.add('row');
        cardBody.appendChild(lastButtonsRow);

        const confirmButton = document.createElement('button');
        confirmButton.setAttribute('id', 'confirmButton' + i);
        confirmButton.classList.add('btn', 'btn-success', 'col-6', 'my-2');
        confirmButton.textContent = 'Confirmar';
        lastButtonsRow.appendChild(confirmButton);

        const backButton = document.createElement('button');
        backButton.classList.add('btn', 'btn-secondary', 'col-6', 'my-2');
        backButton.textContent = 'Volver';
        lastButtonsRow.appendChild(backButton);

        firstCard.appendChild(textDiv1Card);

        if (i !== 3) {
            // Create elements for bet input fields
            const textLabelDiv1 = document.createElement('h6');
            textLabelDiv1.classList.add('text-center', 'my-4');
            textLabelDiv1.textContent = 'Apuesta por realizar';
            textDiv1Card.appendChild(textLabelDiv1);

            const moneyFieldsDiv = document.createElement('div');
            moneyFieldsDiv.classList.add('row');
            cardBody.appendChild(moneyFieldsDiv);

            const fieldEur = document.createElement('input');
            fieldEur.type = 'number';
            fieldEur.classList.add('col-6', 'form-control');
            fieldEur.placeholder = 'Max 2 EUR';
            fieldEur.setAttribute('id', 'euros-' + i);
            fieldEur.setAttribute('min', '0');
            fieldEur.setAttribute('max', '2');
            moneyFieldsDiv.appendChild(fieldEur);

            const fieldCents = document.createElement('input');
            fieldCents.type = 'number';
            fieldCents.classList.add('col-6', 'form-control')
            fieldCents.placeholder = 'Max 99 cents';
            fieldCents.setAttribute('id', 'cents-' + i);
            fieldCents.setAttribute('min', '0');
            fieldCents.setAttribute('max', '99');
            moneyFieldsDiv.appendChild(fieldCents);

            firstCard.appendChild(moneyFieldsDiv);
        }
        firstCard.appendChild(lastButtonsRow);

        const euros = document.getElementById('euros-' + i);
        const cents = document.getElementById('cents-' + i);

        //Add eventlisteners to Confirm button to save data for next page
        confirmButton.addEventListener('click', function () {
            if (i !== 3) {
                if (euros.value === '' && cents.value === '') {
                    euros.value = 0;
                    cents.value = 0;
                    window.alert("¡Se ha cambiado su apuesta a 0 por defecto!");
                    confirmButton.disabled = true;
                    backButton.disabled = true;

                } else {
                    if (euros.value === '') {
                        euros.value = 0;
                    } else if (cents.value == "" || (parseFloat(euros.value) + parseFloat(cents.value) / 100) > 2) {
                        cents.value = 0;
                    }

                    if (parseInt(euros.value) >= 2) {
                        euros.value = 2;
                        cents.value = 0;
                    } else if (Number(parseFloat(euros.value)) === parseFloat(euros.value) &&
                        parseFloat(euros.value) % 1 !== 0
                    ) {
                        euros.value = Math.floor(parseFloat(euros.value));
                    }

                    if (parseInt(cents.value) > 99) {
                        cents.value = 99;
                    } else if (parseInt(cents.value) < 0 || parseInt(euros.value) == 2) {
                        cents.value = 0;
                    } else if (
                        Number(parseFloat(cents.value)) === parseFloat(cents.value) &&
                        parseFloat(cents.value) % 1 !== 0
                    ) {
                        cents.value = Math.floor(parseFloat(cents.value));
                    }

                    const sumaApostado = parseFloat(euros.value) + parseFloat(cents.value) / 100;
                    if (sumaApostado > 1) {

                    } else {
                        sumaApostado == sumaApostado / 100;
                    }

                    nombres[i] = "Jugador Nuevo";
                    apostado[i] = sumaApostado;


                    window.alert('¡Jugador confirmado con éxito!');
                    confirmButton.disabled = true;
                    backButton.disabled = true;

                }
            } else {
                nombres[i] = "Banca";

                window.alert('¡Jugador confirmado con éxito!');
                confirmButton.disabled = true;
                backButton.disabled = true;


                console.log(nombres);
                console.log(apostado);
            }

        });

        backButton.addEventListener('click', function () {
            firstCard.remove();
            showUnknownUserButtons[i].style.display = 'initial';
            showKnownUserButtons[i].style.display = 'initial';
        });

        showUnknownUserButtons[i].style.display = 'none';
        showKnownUserButtons[i].style.display = 'none';

        // Event listener for the start game button
        startGameButton.addEventListener("click", function () {
            // Perform actions to start the game
            let start = true;

            // Check if any confirmButtons are enabled or nombres[] has less than 4 elements
            if (confirmButtonsArr.some(button => !button.disabled) || nombres.length < 4) {
                start = false;
                alert("Hacen falta más jugadores!");
            }

            if (start) {
                sessionStorage.setItem("nombres", JSON.stringify(nombres));
                sessionStorage.setItem("apostado", JSON.stringify(apostado));
                window.location.replace("http://localhost:8080/WebProject/juego/juego.jsp");
            }
        });
    });

}