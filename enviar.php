<?php
$destino = "danielestupinan0802@gmail.com";
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $email = $_POST["email"];
    $numero = $_POST["numero"];
    $mensaje = $_POST["mensaje"];
    $contenido = "Nombre: " . $nombre . "\nApellido: " . $apellido . "\nCorreo: " . $email . "\nNúmero: " . $numero . "\nAsunto: " . $mensaje;
    mail($destino, "Contacto", $contenido);
    header("Location: A_Donde_Lo_Quieras_Redireccionar");
//Esto es opcional, aqui pueden colocar un mensaje de "enviado correctamente" o redireccionarlo a algun lugar
?>