<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Café do bairro</title>
    <link rel="icon" href="imagens/favicon.png">
    <link rel="stylesheet" href="css/estilos.css"> 
</head>
<body>
    <h1 style="text-align:center">Café do bairro</h1>
    <?php
        $dia=date("w");
        if($dia==0){
            echo "<h2 style='text-align:center'>Hoje é Domingo</h2>";
            echo "<h3 style='text-align:center'>Temos açorda</h3>";
            echo "<p style='text-align:center'><img src='imagens/acorda.jpg'></p>";
        }
        else if ($dia==1){
            echo "<h2 style='text-align:center'>Hoje é Segunda-Feira</h2>";
            echo "<h3 style='text-align:center'>Temos cozido</h3>";
            echo "<p style='text-align:center'><img src='imagens/cozido.jpg'></p>";
        }
        else if ($dia==2){
            echo "<h2 style='text-align:center'>Hoje é Terça-Feira</h2>";
            echo "<h3 style='text-align:center'>Temos dourada</h3>";
            echo "<p style='text-align:center'><img src='imagens/dourada.jpg'></p>";
        }  
        else if ($dia==3){
            echo "<h2 style='text-align:center'>Hoje é Quarta-Feira</h2>";
            echo "<h3 style='text-align:center'>Temos hamburguer</h3>";
            echo "<p style='text-align:center'><img src='imagens/hamburguer.jpg'></p>";
        }              
        else if ($dia==4){
            echo "<h2 style='text-align:center'>Hoje é Quinta-Feira</h2>";
            echo "<h3 style='text-align:center'>Temos piza</h3>";
            echo "<p style='text-align:center'><img src='imagens/piza.jpg'></p>";
        }  
        else if ($dia==5){
            echo "<h2 style='text-align:center'>Hoje é Sexta-Feira</h2>";
            echo "<h3 style='text-align:center'>Temos polvo</h3>";
            echo "<p style='text-align:center'><img src='imagens/polvo.jpg'></p>";
        }   
        else{
            echo "<h2 style='text-align:center'>Hoje é Sábado</h2>";
            echo "<h3 style='text-align:center'>Temos sardinha</h3>";
            echo "<p style='text-align:center'><img src='imagens/sardinha.jpg'></p>";
        }            
    ?>
    <form style="text-align:center" method="POST" action="reservar.php">
        <label>Data</label> <br>
        <input type="date" name="data" required> <br><br>
        <label>Contacto</label> <br>
        <input type="text" name="contacto" required> <br> <br>
        <label>Nº pessoas</label> <br>
        <input style="width:40px" type="number" name="pessoas" required> <br> <br>
        <label>Refeição</label> <br>
        <select name="refeicao" required>
            <option value="">Escolha a refeição</option>
            <option value="Almoço">Almoço</option>
            <option value="Jantar">Jantar</option>
        </select> <br> <br>
        <input type="submit" value="Reservar">
        <input type="reset" value="Cancelar">
    </form>
</body>
</html>