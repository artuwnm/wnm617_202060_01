<? php

include"auth.php";

function makeConn() {
	try{
		return new PDO(...PDOauth());
	} catch(PDOException $e) {
		die('{"error":"'.$e.getMessage().'"}');
	}
}

function print_p($d) {
	echo "<pre>",print_r($d),"</pre>"
	;
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
		
		/*
		$r = fetchAll($stmt);
		print_p([4stmt,$r]);
		die;

		return [
			"statement"=>$ps,
			"params"->$
		]
		*/

	}
}


function makeStatement($data) {
	$c = makeConn();
	$t = $data->type;
	$p = $data->params;
	
	switch($t) {
		case "users_all" : return makeQuery($c,"SELECT * FROM `track_users`",[]);
		case "animals_all" : return makeQuery($c,"SELECT * FROM `track_animals`",[]);
		case "locations_all" : return makeQuery($c,"SELECT * FROM `track_locations`",[]);

		case "user_by_id" : return makeQuery($c,"SELECT * FROM `track_users` WHERE `id`=?",$p);
		case "animal_by_id" : return makeQuery($c,"SELECT * FROM `track_animals` WHERE `id`=?",$p);
		case "location_by_id" : return makeQuery($c,"SELECT * FROM `track_locations` WHERE `id`=?",$p);

		case "animals_by_user_id" : return makeQuery($c,"SELECT * FROM `track_animals` WHERE `user_id`=?",$p);
		case "locations_by_animal_id" : return makeQuery($c,"SELECT * FROM `track_locations` WHERE `animal_id`=?",$p);


		case "check_signin":
			return makeQuery($c,"SELECT `id` FROM `track_users` WHERE `username`=? AND `password`=md5(?)",$p);

		case "recent_locations":
		return makeQuery ($c, "SELECT
			a.*,l.&
			FROM `track_animals` a
			LEFT JOIN (
				SELECT * FROM `track_locations`
				ORDER BY `date_create` DESC) 1
			ON a.id = l.animal_id
			WHERE a.user_id = ?
			GROUP
			/* 여기 더 적어야함... 해밀턴 넘 빨라 휴 */
	
			")





		default: return ["error"=>"No matched type"];
	}
}
}


$data = json_decode(file_get_contents("php://input"));

echo json_encode(
	makeStatement($data),
	JSON_NUMERIC_CHECK
)




?>