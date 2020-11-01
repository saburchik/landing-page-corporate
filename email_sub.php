<?php 

$email = filter_var(trim($_POST['email']),
FILTER_SANITIZE_STRING);

if(mb_strlen($email) < 3 || mb_strlen($email) > 50) {
    echo "Недопустимая длина email";
    exit();
} 

$mysql = new mysqli('','','','');
$mysql->query("INSERT INTO `email_sub` (`email`)
VALUE('$email')");

$mysql->close();

header('Location: results.html');

?>