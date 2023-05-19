<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../images/sieteymedio.png" type="image/x-icon" />
    <link rel="stylesheet" href="registroStyle.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <title>Registrar usuario</title>
</head>

<body class="background-radial-gradient">
    <section class="overflow-hidden">
        <div class="container py-5 px-6 my-5 text-center text-lg-start">
            <div class="row gx-lg-5 align-items-center mb-5">
                <div class="col-lg-5" style="z-index: 10;">
                    <h1 class="my-5 display-6 fw-bold ls-tight" style="color: hsl(0, 0%, 100%);  text-align: center;">
                        Juego de cartas<br />
                        <span style="color: hsl(0, 0%, 100%)">Siete y Medio</span>
                    </h1>
                    <p class="mb-4 opacity-70 " style="color: hsl(0, 0%, 100%)">
                        Se trata de un juego de baraja española de 40 cartas, el objetivo es intentar sumar siete y
                        medio o el número más cercano posible, sin sobrepasar dicha cantidad.
                    </p>
                </div>

                <div class="col-lg-7 mb-5 mb-lg-0 position-relative">
                    <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
                    <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

                    <div class="card bg-glass">
                        <div class="card-body px-4 py-5 px-md-5">
                            <form>
                                <!-- 2 column grid layout with text inputs for the first and last names -->
                                <div class="row text-center">

                                    <h1 class="my-lg-4 display-3 fw-bold ls-tight" style="color: hsl(0, 0%, 0%)">
                                        <img src="../images/sieteymedio.png" class="img-fluid me-3"
                                            alt="Responsive image">SIETE <span style="color: hsl(0, 100%, 50%)">Y</span>
                                        <span style="color: hsl(0, 0%, 0%)">MEDIO</span>
                                    </h1>
                                    <p class="mb-2 opacity-100" style="color: #000000">
                                        <strong>¡Bienvenido, cree un nuevo usuario!</strong>
                                    </p>
                                </div>


                                <!-- Email input -->
                                <div class="form-outline mb-2">
                                    <input type="name" id="name" class="form-control" />
                                    <label class="form-label" for="name">Nombre</label>
                                </div>

                                <!-- Password input -->
                                <div class="form-outline mb-2">
                                    <input type="password" id="password" class="form-control" />
                                    <label class="form-label" for="password">Contraseña</label>
                                </div>

                                <!-- Checkbox & Sign in Row-->
                                <div class="row justify-content-start">
                                    <div class="col-lg-3">
                                        <form action="/WebProject/index.jsp" method="GET" id="formIndex">
                                        <button type="submit" class="btn btn-danger col-lg-12 mb-4" id="buttonRegister">
                                            Registrarse
                                        </button>
                                           </form>

                                    </div>
                                    <div class="col-lg-10">
                                    <form action="/WebProject/index.jsp" method="GET">
                                        <button type="submit" class="btn btn-dark">
                                            Comenzar juego sin usuario
                                        </button>
                                        </form>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="registroJS.js"></script>
</body>
</html>