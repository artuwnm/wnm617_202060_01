<? php

include"auth.php";

function makeConn() {
	try{
		return new PDO(...PDOauth());
	} catch(PDOException $e) {
		die('{"error":"'.$e.getMessage().'"}');
	}
}

/*$r = PDO result*/

function fetchAll($r){
	$a =[];
	while($row = $r->fetch(PDO:;FETCH_OBJ))
		$a[] = $row;
		return $a;
}


/*
$c = connection
$ps = prepared statement
$p = parameters
*/

function makeQuery($c,$ps,$p) {
	try{
		if (count($p)) {
			$stmt = $c->prepare($ps);
			$stmt->execute($p);
		} else {
			$stmt = $c->query($ps);
		} 

		$r = fetchAll($stmt);

		return["result"=>$r];
	} catch(PDOException $e) {
			return ["error"=> "Query Failed: ".$e.getMessage()];
		}
		
		$r = fetchAll($stmt);
		print_p([4stmt,$r]);
		die;

		return [
			"statement"=>$ps,
			"params"->$
		]


	}
}


function makeStatement($data){
	$c = makeConn();
	$t = $data->type;
	$p = $data->params;

	switch ($t) {
		case "users_all":return makeQuery($c,"SELET * FROM `track_users`",[]);
		case "users_by_id":return makeQuery($c,"SELET * FROM `track_users` WHERE `id`=?",$p);
		
		default:return["error"=>"No matched type"];
	
	}
}


$data = json_decode(file_get_contents("php://input"));

echo json_encode(
	makeStatement($data),
	JSON_NUMERIC_CHECK
)




