<%@ page contentType="text/html; charset=UTF-8" %>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="../images/sieteymedio.png" type="image/x-icon" />
        <link rel="stylesheet" href="juegoConfigStyle.css">
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
            <div class="row">
                <div class="col-sm-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title text-center">JUGADOR 1</h5>
                            <button type="button" class="btn btn-danger col-6" id="showUnknownUserButton1">Sin
                                identificacion</button>
                            <button type="button" class="btn btn-dark col-5" id="showKnownUserButton1">Usuario
                                conocido</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title text-center">JUGADOR 2</h5>
                            <button type="button" class="btn btn-danger col-6">Sin identificacion</button>
                            <button type="button" class="btn btn-dark col-5">Usuario conocido</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title text-center">JUGADOR 3</h5>
                            <button type="button" class="btn btn-danger col-6">Sin identificacion</button>
                            <button type="button" class="btn btn-dark col-5">Usuario conocido</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title text-center">BANCA</h5>
                            <button type="button" class="btn btn-danger col-6">Sin identificacion</button>
                            <button type="button" class="btn btn-dark col-5">Usuario conocido</button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <button type="submit"
                        class="btn btn-success position-relative col-sm-2 top-50 start-50 translate-middle my-3"
                        id="startGame">¡JUGAR!</button>
                    <form action="/WebProject/index.jsp" method="GET">
                        <button
                            class="btn btn-secondary col-md-1 position-relative col-sm-2 my-4 top-50 start-50 translate-middle ">INICIO</button>
                    </form>
                </div>
            </div>
        </section>

        <script src="juegoConfigJS.js"></script>
    </body>

    </html>