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
    <h1 style="text-align:center">Listagem de reservas</h1>

        <center>
        <table>
            <tr>    
                <th>Data</th>
                <th>Contacto</th>
                <th>Pessoas</th>
                <th>Refeição</th>
            </tr>
        <?php
           $ligacao=mysqli_connect("localhost","root","12345678","bdcafe");
           $tabela=mysqli_query($ligacao,"select * from reservas");

           while ($linha=mysqli_fetch_array($tabela)){
                echo "<tr><td>".$linha['data']."</td><td>".$linha['contacto']."</td><td>".
                $linha['pessoas']."</td><td>".$linha['refeicao']."</td></tr>";
           }
        ?> 
        </table>
        
        <br>
        <a href="index.php"><input type="button" value="Voltar"></a>
        </center>
</body>
</html>