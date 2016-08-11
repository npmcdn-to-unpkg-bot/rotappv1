<?php 
	
	$user = 'root';
	$password = '';
	
 	$pdo = new PDO('mysql:host=localhost; dbname=rotapp; charset=utf8', $user, $password);
 	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
?>