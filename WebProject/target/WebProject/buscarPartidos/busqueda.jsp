<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../images/sieteymedio.png" type="image/x-icon" />
    <link rel="stylesheet" href="busquedaStyle.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <title>Buscar partidos</title>
</head>
<body>
    <section class="overflow-hidden">
        <div class="container">
            <div class="row gx-lg-5 align-items-center mb-2 text-center">
                <div style="z-index: 10;">
                    <h1 class="my-lg-4 display-3 fw-bold ls-tight" style="color: hsl(0, 0%, 0%)">
                        <img src="../images/sieteymedio.png" class="img-fluid me-3" alt="Responsive image">SIETE <span
                            style="color: hsl(0, 100%, 50%)">Y</span>
                        <span style="color: hsl(0, 0%, 0%)">MEDIO</span>
                    </h1>
                </div>
                <div class="row">
                    <h5>Busquen el partido con el nombre de cualquier jugador:</h5>
                </div>
                <div class="row">
                    <label for="name" class="col-form-label d-flex" style="margin-top: 15px;">- Nombre del jugador</p>
                        <div>
                            <input type="text" id="name" class="form-control mx-5" style="margin-top: -5px;"
                                placeholder="Nombre">
                        </div>
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
                                <th scope="col">Total dinero apostado</th>
                                <th scope="col">Fecha</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</body>
</html>