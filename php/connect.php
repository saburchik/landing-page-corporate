<?php

$connect = mysqli_connect('','','','corporate');

if (!$connect) {
    die('Error connect to DataBase');
}