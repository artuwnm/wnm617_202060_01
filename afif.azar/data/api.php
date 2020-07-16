<?php


fuction makeConn() {
	try {
		return new PDO(...PDOauth());
    } catch (PDOEception $e) {
    	die('{"error":"' .$e.getMessage() . '"}' );
    }
}

function fetchAll($r) {
	$a = []
}

function makeQuery($c,$ps,$p) {
    try{
    	if(count($p)) {
    		$stmt - $c - >prepare($ps);
    		$smt - > excute($p);
    	} else {
    		$stmt = $c - >query($ps);
    	}

    	$r = fetchAll($stmt);

      return ["results"= > ]
    } catch (PDOExeption $e) {
}


function makeStatement($data) {
    $c = makeConn();
    $t = $data- >type;
    $p = $data- >params;

    switch($t) {
    	case"user_all" : return makeQuery($c, "SELECT * FORM 'users'",[]);
    	case"user_by_id" :  return makeQuery($c, "SELECT * FORM 'users' WHERE 'id'=?",$p);

    	defult: return ["error"= >"No matched type"];
    }
}

$data

echo json_encode(
    makeStatement($data),
    JSON_NUMERIC_CHECK
);