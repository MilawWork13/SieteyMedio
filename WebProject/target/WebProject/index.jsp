<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="images/sieteymedio.png" type="image/x-icon" />
    <link rel="stylesheet" href="indexStyle.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <title>Siete y Medio</title>
</head>

<body>
    <section class="overflow-hidden">
        <div class="container">
            <div class="row gx-lg-5 align-items-center mb-5 text-center">
                <div style="z-index: 10;">
                    <h1 class="my-lg-4 display-7 fw-bold ls-tight" style="color: hsl(0, 0%, 0%)">
                        <img src="images/sieteymedio.png" class="img-fluid me-3" alt="Responsive image">SIETE <span
                            style=" color: hsl(0, 100%, 50%)">Y</span>
                        <span style="color: hsl(0, 0%, 0%)">MEDIO</span>
                    </h1>
                    <div class="row">
                        <div class="col-md-4">
                            <form action="/WebProject/registro/registro.jsp" method="GET">
                                <button type="submit" class="btn btn-dark">Registrarse</button>
                            </form>
                        </div>
                        <div class="col-md-4">
                            <form action="/WebProject/juegoConfig/juegoConfig.jsp" method="GET">
                                <button type="submit" class="btn btn-dark">Jugar</button>
                            </form>
                        </div>
                        <div class="col-md-4">
                            <form action="/WebProject/buscarPartidos/busqueda.jsp" method="GET">
                                <button type="submit" class="btn btn-dark">Buscar partidos</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
</html>