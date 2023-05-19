<%@ page contentType="text/html; charset=UTF-8" %>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="../images/sieteymedio.png" type="image/x-icon" />
        <link rel="stylesheet" href="juegoStyle.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        <title>Siete y Medio</title>
    </head>

    <body>
        <section class="overflow-hidden">
            <div class="container">
                <div class="row gx-lg-5 align-items-center mb-2 text-center">
                    <div style="z-index: 10;">
                        <h1 class="my-lg-4 display-3 fw-bold ls-tight" style="color: hsl(0, 0%, 0%)">
                            <img src="../images/sieteymedio.png" class="img-fluid me-3" alt="Responsive image">SIETE
                            <span style="color: hsl(0, 100%, 50%)">Y</span>
                            <span style="color: hsl(0, 0%, 0%)">MEDIO</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div class="row" >
                <h1 class="display-5 justify-content-center text-center my-5" id="playerNameTurn">

                </h1>
            </div>
            <div class="row justify-content-center mb-2">
                <div class="btn btn-danger col-sm-3 mx-5" id="up">CARTA BOCA ARRIBA</div>
                <div class="btn btn-danger col-sm-3 mx-5" id="down">CARTA BOCA ABAJO</div>
                <div class="btn btn-danger col-sm-3 mx-5" id="plantarse">PLANTARSE</div>
            </div>
            <div class="row justify-content-center my-5" id="cards"></div>
        </section>

        <form id="sendDataServlet" action="/WebProject/registrar-partido" method="POST">
            <input type="hidden" name="jugador1" value="">
            <input type="hidden" name="jugador2" value="">
            <input type="hidden" name="jugador3" value="">
            <input type="hidden" name="banca" value="">
            <input type="hidden" name="puntosJugador1" value="">
            <input type="hidden" name="puntosJugador2" value="">
            <input type="hidden" name="puntosJugador3" value="">
            <input type="hidden" name="puntosBanca" value="">
            <input type="hidden" name="apuestasTotal" value="">
          </form>

        <script src="juegoJS.js"></script>
    </body>

    </html>