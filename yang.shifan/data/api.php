<?php

include "auth.php";
function makeConn() {
	try {
		return new PDO(...PDOauth());
	} catch (PDOException $e) {
		die('{"error":"' . $e.getMessage() . '"}');
	}
}

/* $r = PDO result */
function fetchAll($r) {
	$a = [];
	while($row = $r->fetch(PDO::FETCH_OBJ))
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
		if(count($p)) {
			$stmt = $c->prepare($ps);
			$stmt->execute($p);
		} else {
			$stmt = $c->query($ps);
		}

		$r = fetchAll($stmt);

		return ["result"=>$r];
	} catch (PDOException $e) {
		return ["error"=>"Query Failed: ".$e.getMessage()];
	}
}


function makeStatement($data) {
	$c = makeConn();
	$t = $data->type;
	$p = $data->params;

	switch($t) {
		case "users_all" : return makeQuery($c,"SELECT * FROM `track_users`",[]);
		case "food_all" : return makeQuery($c,"SELECT * FROM `track_food`",[]);
		case "locations_all" : return makeQuery($c,"SELECT * FROM `track_locations`",[]);

		case "user_by_id" : return makeQuery($c,"SELECT * FROM `track_users` WHERE `id`=?",$p);
		case "food_by_id" : return makeQuery($c,"SELECT * FROM `track_food` WHERE `id`=?",$p);
		case "location_by_id" : return makeQuery($c,"SELECT * FROM `track_locations` WHERE `id`=?",$p);

		case "food_by_user_id" : return makeQuery($c,"SELECT * FROM `track_food` WHERE `user_id`=?",$p);
		case "locations_by_food_id" : return makeQuery($c,"SELECT * FROM `track_locations` WHERE `food_id`=?",$p);

		case "check_signin":
			return makeQuery($c,"SELECT `id` FROM `track_users` WHERE `username`=? AND `password`=md5(?)",$p);

		case "recent_locations":
			return makeQuery($c,"SELECT
				f.*, l.*
				FROM `track_food` f
				LEFT JOIN (
					SELECT * FROM `track_locations`
					ORDER BY `date_create` DESC
				) l
				ON f.id = l.food_id
				WHERE f.user_id = ?
				GROUP BY l.food_id
				",$p);

		default: return ["error"=>"No matched type"];
	}
}

$data = json_decode(file_get_contents("php://input"));

echo json_encode(
	makeStatement($data),
	JSON_NUMERIC_CHECK
);
