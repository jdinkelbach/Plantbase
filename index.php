<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Plantbase</title>
        <link rel="icon" href="img/icon.png" type="image/png"> 
        <link rel="stylesheet" href="css/styles.css" type="text/css" />
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Kurale&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" type="text/css" />
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" type="text/javascript" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    </head>
    <body class="text-center">
        <header id="nav" class="sticky-top bg-white py-4 d-flex justify-content-between">
            <h1 class="my-0"><i class="fab fa-envira"></i> Plantbase</h1>
            <form id="search-bar" class="d-flex flex-nowrap align-self-center">
                <input type="text" name="search" id="search" placeholder="Search for a plant (EX: 'fern')" class="text-center"/>
                <button type="submit" id="submit" class="btn mx-2 py-1 px-2"><i class="fas fa-search"></i></button>
            </form>
        </header>
        <div id=results class="d-flex flex-wrap justify-content-between"></div>
        <footer class="mt-2">
            &copy; Justin Dinkelbach - 2020<br>
        </footer>
        <!--JS-->
        <script type="text/javascript" src="js/index.js"></script> 
    </body>
</html>