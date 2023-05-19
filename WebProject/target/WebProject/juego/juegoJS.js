const playerNameTurn = document.getElementById('playerNameTurn');
const nombres = JSON.parse(sessionStorage.getItem("nombres"));
const apostado = JSON.parse(sessionStorage.getItem("apostado"));

let apuestasTotal = 0;
for (let i = 0; i < apostado.length; i++) {
    apuestasTotal += apostado[i];
}
console.log(apuestasTotal);


const section = document.querySelector('section');

const buttonCardUp = document.getElementById('up');
const buttonCardDown = document.getElementById('down');
const buttonPlantarse = document.getElementById('plantarse');

const divCards = document.createElement('div');
divCards.setAttribute('id', 'divCards', 'justify-content-center')
divCards.classList.add('row', 'my-3')
section.appendChild(divCards);

const suits = ["basto", "copa", "espada", "oro"];
const values = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
const cards = [];
const selectedCards = [];
const playerPoints = [];
let currentTurn = 0;

// Create the cards array with four cards for each value and suit
for (const suit of suits) {
    for (const value of values) {
        for (let i = 0; i < 4; i++) {
            cards.push({
                suit: suit,
                value: value,
                image: `../images/Cards/${value}_${suit}.png`
            });
        }
    }
}



document.addEventListener("DOMContentLoaded", startGame, false);
let eventsDone = false;


function startGame() {
    playerNameTurn.textContent = nombres[currentTurn] + "(Turno " + (currentTurn + 1) + ")";
    let cardsPlayerValue = 0;


    if (eventsDone == false) {
        buttonCardUp.addEventListener('click', function () {
            sacarCarta();
        });

        buttonCardDown.addEventListener('click', function () {
            sacarCartaDown();
        });

        buttonPlantarse.addEventListener('click', function () {
            nextPlayer();
        });
    }

    function nextPlayer() {
        playerPoints.push(cardsPlayerValue);
        console.log(playerPoints);
        cardsPlayerValue = 0;
        if (currentTurn == 3) {
            sessionStorage.setItem(
                "playersPoints",
                JSON.stringify(playerPoints)
            );

            submitFormData(nombres);
        } else {
            currentTurn++;
            divCards.innerHTML = '';
            playerNameTurn.textContent = nombres[currentTurn] + "(Turno " + (currentTurn + 1) + ")";
            selectedCards.length = 0;
        }
    }

    function sacarCarta() {
        if (cards.length > 0) {
            const cartaAleatoria = obtenerYRemoverCartaAleatoria();

            const isAlreadySelected = selectedCards.some(card => {
                return card.suit === cartaAleatoria.suit && card.value === cartaAleatoria.value;
            });

            if (!isAlreadySelected) {
                selectedCards.push(cartaAleatoria);

                const imageCard = document.createElement('img');
                imageCard.setAttribute('id', 'image');
                imageCard.classList.add('col-2');
                imageCard.src = cartaAleatoria.image;
                divCards.appendChild(imageCard);
            }

            let cardValue = calculateCardValue(cartaAleatoria.value);
            cardsPlayerValue += cardValue;
            console.log(cardsPlayerValue);

            checkPlayerPoints();
        }
    }

    let facedownCard = null;

    function sacarCartaDown() {
        if (cards.length > 0) {
            if (facedownCard) {
                facedownCard.src = facedownCard.card.image;
                facedownCard.removeEventListener('mouseover', handleMouseOver);
                facedownCard.removeEventListener('mouseout', handleMouseOut);
                facedownCard.isFacedown = false;
            }

            const cartaAleatoria = obtenerYRemoverCartaAleatoria();

            const isAlreadySelected = selectedCards.some(card => {
                return card.suit === cartaAleatoria.suit && card.value === cartaAleatoria.value;
            });

            if (!isAlreadySelected) {
                selectedCards.push(cartaAleatoria);

                const imageCard = document.createElement('img');
                imageCard.setAttribute('id', 'image');
                imageCard.classList.add('col-2');
                imageCard.card = cartaAleatoria;
                imageCard.src = '../images/Cards/dorso.png';
                imageCard.isFacedown = true;

                imageCard.addEventListener('mouseover', handleMouseOver);
                imageCard.addEventListener('mouseout', handleMouseOut);

                facedownCard = imageCard;

                divCards.appendChild(imageCard);
            }

            let cardValue = calculateCardValue(cartaAleatoria.value);
            cardsPlayerValue += cardValue;
            console.log(cardsPlayerValue);

            checkPlayerPoints();
        }
    }

    function handleMouseOver() {
        if (this.isFacedown) {
            this.src = this.card.image; // Show the card image
        }
    }

    function handleMouseOut() {
        if (this.isFacedown) {
            this.src = '../images/Cards/dorso.png'; // Show the facedown image
        }
    }

    // Function to get a random card and remove it from the array
    function obtenerYRemoverCartaAleatoria() {
        const indice = Math.floor(Math.random() * cards.length);
        const carta = cards.splice(indice, 1)[0]; // Remove the selected card from the array
        return carta;
    }

    function calculateCardValue(value) {
        if (value >= 1 && value <= 7) {
            return value;
        } else if (value >= 10 && value <= 12) {
            return 0.5;
        }
        return 0;
    }

    function checkPlayerPoints() {
        if (cardsPlayerValue > 7.5) {
            window.alert("Se ha pasado: " + cardsPlayerValue);
            nextPlayer();
        }
    }

}

function submitFormData(nombres) {
    const formData = document.getElementById('sendDataServlet');
    const jugador1NameInput = formData.querySelector('input[name="jugador1"]');
    const jugador2NameInput = formData.querySelector('input[name="jugador2"]');
    const jugador3NameInput = formData.querySelector('input[name="jugador3"]');
    const bancaNameInput = formData.querySelector('input[name="banca"]');
    const jugador1ScoreInput = formData.querySelector('input[name="puntosJugador1"]');
    const jugador2ScoreInput = formData.querySelector('input[name="puntosJugador2"]');
    const jugador3ScoreInput = formData.querySelector('input[name="puntosJugador3"]');
    const bancaScoreInput = formData.querySelector('input[name="puntosBanca"]');
    const totalBid = formData.querySelector('input[name="apuestasTotal"]');

    jugador1NameInput.value = nombres[0];
    jugador2NameInput.value = nombres[1];
    jugador3NameInput.value = nombres[2];
    bancaNameInput.value = nombres[3];
    jugador1ScoreInput.value = playerPoints[0];
    jugador2ScoreInput.value = playerPoints[1];
    jugador3ScoreInput.value = playerPoints[2];
    bancaScoreInput .value = playerPoints[3];
    totalBid.value = apuestasTotal;

    formData.submit();
}


