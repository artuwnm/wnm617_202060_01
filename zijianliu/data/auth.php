<?php


function PDOauth(){
	$host ="localhost";
	$user = "aauwnm60803";
	$pass = "aauwnm60803";
	$dbname = "aau.wnm608.03";
	return[
		"mysql:host=$host;dbname=$dbname;charset=utf8mb4",
      $user,
      $pass

	];
}