<?php


function PDOauth(){
	$host ="locahost";
	$user = "aauwnm60803";
	$pass = "aauwnm60803";
	$dbname = "aauwnm60803";
	return[
		"mysql:host=$host;dbname=$dbname;charset=utf8mb4",
      $user,
      $pass

	]
}