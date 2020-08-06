<?php

include "auth.php";
function makeConn() {
	try {
		return new PDO(...PDOauth());
	} catch (PDOException $e) {
		die('{"error":"' . $e->getMessage() . '"}');
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
		return ["error"=>"Query Failed: ".$e->getMessage()];
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

		case "user_by_id" : return makeQuery($c,"SELECT id,name,username,email,date_create,img FROM `track_users` WHERE `id`=?",$p);
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

		case "food_search" : return makeQuery($c,"SELECT *
			FROM `track_food`
			WHERE (
				`name` LIKE ? OR
				`cuisine` LIKE ? OR
				`restaurant` LIKE ?
			) AND user_id=?",$p);

		case "food_search_recent" : return makeQuery($c,"SELECT
			a.*, l.*
			FROM `track_food` a
			LEFT JOIN (
				SELECT * FROM `track_locations`
				ORDER BY `date_create` DESC
			) l
			ON a.id = l.food_id
			WHERE (
				a.name LIKE ? OR
				a.cuisine LIKE ? OR
				a.restaurant LIKE ?
			) AND a.user_id=?
			GROUP BY l.food_id",$p);

		case "food_filter" : return makeQuery($c,"SELECT *
			FROM `track_food`
			WHERE (
				`$p[0]` LIKE ?
			) AND user_id=?",[$p[1],$p[2]]);


		case "insert_user":
			$r = makeQuery($c,"SELECT `id` FROM `track_users` WHERE `username`=? OR `email`=?",[$p[0],$p[1]]);
			if(count($r['result'])) return ["error"=>"Username or Email already exists"];

			$r = makeQuery($c,"INSERT INTO
				`track_users`
				(`name`, `username`, `email`, `password`, `img`, `date_create`)
				VALUES
				('New User', ?, ?, md5(?), 'https://via.placeholder.com/400/?text=USER', NOW())
				",$p);
			return ["result"=>$c->lastInsertId()];

		case "insert_food":
			$r = makeQuery($c,"INSERT INTO
				`track_food`
				(`user_id`,`name`, `cuisine`, `restaurant`, `description`, `img`, `date_create`)
				VALUES
				(?, ?, ?, ?, ?, 'https://via.placeholder.com/400/?text=FOOD', NOW())
				",$p);
			return ["result"=>$c->lastInsertId()];

		case "update_profile_image":
			$r = makeQuery($c,"UPDATE
				`track_users`
				SET `img`=?
				WHERE `id`=?	
				",$p);
			return ["result"=>"success"];

		default: return ["error"=>"No matched type"];
	}
}

if(!empty($_FILES)) {
	$r = makeUpload("image","../uploads/");
	die(json_encode($r));
}

$data = json_decode(file_get_contents("php://input"));

echo json_encode(
	makeStatement($data),
	JSON_NUMERIC_CHECK
);
