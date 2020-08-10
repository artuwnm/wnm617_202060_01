<?php


function PDOauth() {
	$host = "localhost";
	$user = "root";
	$pass = "zzzzzz";
	$dbname = "dbdata";
	return [
		"mysql:host=$host;dbname=$dbname;charset=utf8mb4",
      $user,
      $pass
	];
}