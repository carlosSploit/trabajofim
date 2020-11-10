
<!--En un archivo separado que guardarás con extensión .php y el cual se debe llamar enviar.php, pega el siguiente código:
      
<?php

require ('./phpMyheler/PHPMailerAutoload.php');

$name = $_GET['name']; //nombre del usuario
$mail = $_GET['mail']; //correo del usuario
$mailD = $_GET['mailD']; //correo del usuario
$message = $_GET['message'];//mensaje que se desea enviar al usuario

SWITCH($mailD){
    case 1: $mailD="arturo14212000@gmail.com"; break;
    case 2: $mailD=$mail; break;
}

$mailC = new PHPMailer();
$mailC->isSMTP();
$mailC->Host='smtp.gmail.com';
$mailC->Port= 587;
$mailC->SMTPAuth = true;
$mailC->SMTPSecure = 'tls';
$mailC->Username = 'arturo14212000@gmail.com';
$mailC->Password = '@123456789987654321';
$mailC->setFrom($mail, $name);
$mailC->addAddress($mailD);
$mailC->addReplyTo($mail,$name);
$mailC->isHTML(true);
$mailC->Subject='Enviado por:'.$name;
$mailC->Body = 'nombre: '.$name.'<br/> Messege: '.$message;
if(!$mailC->send()){
  echo 'No te puedes comer un buen culo'.$name;  
}else{
  echo 'Si te puedes comer un buen culo '.$name.' '.$message;  
}
