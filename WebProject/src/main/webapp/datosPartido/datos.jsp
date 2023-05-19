<%@ page contentType="text/html; charset=UTF-8" %>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="../images/sieteymedio.png" type="image/x-icon" />
        <link rel="stylesheet" href="datosStyle.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        <title>Datos del partido</title>
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
                    <div class="row">
                        <h5>Su partido ha finalizado con el siguiente resultado</h5>
                    </div>

                    <div class="row">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Jugador 1</th>
                                    <th scope="col">Jugador 2</th>
                                    <th scope="col">Jugador 3</th>
                                    <th scope="col">Banca</th>
                                    <th scope="col">Puntos Jugador 1</th>
                                    <th scope="col">Puntos Jugador 2</th>
                                    <th scope="col">Puntos Jugador 3</th>
                                    <th scope="col">Banca</th>
                                    <th scope="col">Total dinero apostado</th>
                                    <th scope="col">Fecha</th>
                                </tr>
                            </thead>
                            <tbody id="bodyTable">

                            </tbody>
                        </table>
                    </div>

                    <div class="row">
                        <form action="/WebProject/index.jsp" method="GET">
                            <button
                                class="btn btn-secondary col-md-1 position-relative col-sm-2 my-4 top-50 start-50 translate-middle ">INICIO</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <script src="datosJS.js"></script>
    </body>

    </html>