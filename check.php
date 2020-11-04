<?php 

$username = filter_var(trim($_POST['username']),
FILTER_SANITIZE_STRING);
$email = filter_var(trim($_POST['email']),
FILTER_SANITIZE_STRING);
$password = filter_var(trim($_POST['password']),
FILTER_SANITIZE_STRING);

if(mb_strlen($username) < 3 || mb_strlen($username) > 50) {
    echo "Недопустимая длина имени";
    exit();
} else if(mb_strlen($email) < 3 || mb_strlen($email) > 50) {
    echo "Недопустимая длина email";
    exit();
} else if (mb_strlen($password) < 2 || mb_strlen($password) > 15) {
    echo "Недопустимая длина пароля";
    exit();
}

$password = md5($password."mfijnwej3494fnif34f");

$mysql = new mysqli('','','','corporate');
$mysql->query("INSERT INTO `clients` (`username`, `email`, `password`)
VALUE('$username', '$email', '$password')");

$mysql->close();

header('Location: results.html');

?>