$destino = "danielestupinan0802@gmail.com";
    $nombre = $_POST["name"];
    $email = $_POST["mail"];
    $mensaje = $_POST["message"];
    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $email . "\nAsunto: " . $mensaje;
    mail($destino, "Contacto", $contenido);
    header("Location: A_Donde_Lo_Quieras_Redireccionar");
//Esto es opcional, aqui pueden colocar un mensaje de "enviado correctamente" o redireccionarlo a algun lugar
?>