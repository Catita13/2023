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
    <h1 style="text-align:center">Confirmação da reserva</h1>
    <p style="text-align:center">
        <?php
            echo "Data:".$_POST['data']."<br><br>";
            echo "Contacto:".$_POST['contacto']."<br><br>";
            echo "Nº Pessoas:".$_POST['pessoas']."<br><br>";
            echo "Refeição:".$_POST['refeicao']."<br><br>";

             // ligação ao servidor do MySql.
             $ligacao=mysqli_connect("localhost","root","12345678","bdcafe");

             // Inserir os dados
             mysqli_query($ligacao,"insert into reservas (data,contacto,pessoas,refeicao) 
              values('$_POST[data]','$_POST[contacto]',
              '$_POST[pessoas]','$_POST[refeicao]')");

              echo "<br>Reserva efetuada.<br>";
 
        ?> 
        <br>
        <a href="index.php"><input type="button" value="Voltar"></a>
        <a href="listagem.php"><input type="button" value="Ver Reservas"></a>
    </p>
</body>
</html>