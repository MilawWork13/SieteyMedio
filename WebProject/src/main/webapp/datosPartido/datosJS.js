// Retrieve and parse the "nombres" data from sessionStorage
const nombres = JSON.parse(sessionStorage.getItem("nombres"));
// Retrieve and parse the "apuestasTotal" data from sessionStorage
const apuestasTotal = JSON.parse(sessionStorage.getItem("apuestasTotal"));
// Retrieve and parse the "playersPoints" data from sessionStorage
const puntosJugadores = JSON.parse(sessionStorage.getItem("playersPoints"));
const tdPuntosJugador = [];

//Create Date with new appearence
const date = new Date();

let currentDay = String(date.getDate()).padStart(2, '0');
let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
let currentYear = date.getFullYear();

// To display the date as DD-MM-YYYY 
let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;

window.addEventListener('DOMContentLoaded', resultadoFinal, false);

//Create a table to display all data retrieved from session
function resultadoFinal() {
    const bodyTable = document.getElementById('bodyTable');
    const tr = document.createElement('tr');
    bodyTable.appendChild(tr);

    const tdGame = document.createElement('td');
    tdGame.setAttribute('scope', 'row');
    tdGame.textContent = "1";
    tr.appendChild(tdGame);

    for (let i = 0; i < nombres.length; i++) {
        const td = document.createElement('td');
        td.textContent = nombres[i];
        tr.appendChild(td);
    }

    //Rules for the winners and losers in game "Siete y Medio"
    for (let i = 0; i < puntosJugadores.length; i++) {
        const td = document.createElement('td');
        td.setAttribute('id', 'jugador' + i);
        if (puntosJugadores[i] > 7.5) {
            td.textContent = puntosJugadores[i] + " (Loss)";
        } else if (puntosJugadores[i] <= 7.5 && puntosJugadores[puntosJugadores.length - 1] > 7.5) {
            td.textContent = puntosJugadores[i] + " (Win)";
        } else if (puntosJugadores[i] <= 7.5 && puntosJugadores[puntosJugadores.length - 1] < puntosJugadores[i]) {
            td.textContent = puntosJugadores[i] + " (Win)";
        } else if (puntosJugadores[i] == puntosJugadores[puntosJugadores.length - 1] && i != 3) {
            td.textContent = puntosJugadores[i] + " (Loss)";
        } else if (puntosJugadores[i] < puntosJugadores[puntosJugadores.length - 1] && puntosJugadores[puntosJugadores.length - 1] <= 7.5) {
            td.textContent = puntosJugadores[i] + " (Loss)";
            if (puntosJugadores[i] === 7.5) {
                td.textContent = puntosJugadores[i] + " (Siete y medio)";
            }
        } else if (puntosJugadores[i] > 7.5 && puntosJugadores[puntosJugadores.length - 1] > puntosJugadores[i]) {
            td.textContent = puntosJugadores[i] + " (Win)";
        } else if (puntosJugadores[i] === 7.5) {
            td.textContent = puntosJugadores[i] + " (Siete y medio)";
        } else {
            td.textContent = puntosJugadores[i];
        }
        console.log(td);
        tr.appendChild(td);
    }

    const dineroApostado = document.createElement('td');
    dineroApostado.textContent = apuestasTotal + " EUR";
    tr.appendChild(dineroApostado);

    const fecha = document.createElement('td');
    fecha.textContent = currentDate;
    tr.appendChild(fecha);

    //Clean the session of unnecesary data
    sessionStorage.clear();
}

