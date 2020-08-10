<?php
// include($_SERVER['DOCUMENT_ROOT']."auth.php");
include_once "auth.php";



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
	$t = $data->type;//check_signin
	$p = $data->params;//
	// echo $p;
	switch($t) {
		case "check_password": return makeQuery($c,"SELECT * FROM `users` WHERE `id`=? AND `password`=md5(?)",$p);
		case "update_password": return makeQuery($c,"UPDATE `users` SET `password`=md5(?) WHERE `id`=?",$p);
		
		case "check_signin": return makeQuery($c,"SELECT `id` FROM `users` WHERE `username`=? AND `password`=md5(?)",$p);
		case "users_all" : return makeQuery($c,"SELECT * FROM `users`",[]);
		case "user_by_id" : return makeQuery($c,"SELECT * FROM `users` WHERE `id`=?",$p);
		case "buddy_by_id" : return makeQuery($c,"SELECT * FROM `buddies` WHERE `id`=?",$p);
		case "buddy_by_user_id" : return makeQuery($c,"SELECT * FROM `buddies` WHERE `user_id`=?",$p);
		case "buddy_search" : 
			return makeQuery($c,"SELECT * FROM buddies WHERE (name LIKE '%$p[0]%' OR fav_alcohol LIKE '%$p[0]%' OR fav_place LIKE '%$p[0]%') AND user_id = '$p[1]'",$p);
		case "locations_by_buddy_id" : return makeQuery($c,"SELECT * FROM `track_locations` WHERE `buddy_id`=?",$p);
		case "recent_locations":
			return makeQuery($c,"SELECT
				a.*, l.*
				FROM `buddies` a
				LEFT JOIN (
					SELECT * FROM `track_locations`
					ORDER BY `date_create` DESC
				) l
				ON a.id = l.buddy_id
				WHERE a.user_id = ?
				GROUP BY l.buddy_id
				",$p);
		case "recent_locations_search": 
			return makeQuery($c,"SELECT
				a.*, l.*
				FROM `buddies` a
				LEFT JOIN (
					SELECT * FROM `track_locations`
					ORDER BY `date_create` DESC
				) l
				ON a.id = l.buddy_id
				WHERE 
					a.name LIKE '%$p[0]%' AND a.user_id=?
				GROUP BY l.buddy_id
				",[$p[1]]);
		case "add_location":
			$memory = makeQuery($c,"SELECT * FROM track_locations WHERE buddy_id=?",[$p[0]]);
			$count = count($memory['result'])+1;
			return makeQuery($c,"UPDATE buddies SET memory=? WHERE id=?",[$count, $p[0]]);
		case "add_location2":
			print_r($p);
			$sql_add = "INSERT INTO track_locations (buddy_id, lat, lng, alcohol, bar, note, date_create) VALUES ('$p[0]','$p[1]','$p[2]','$p[3]','$p[4]','$p[5]',NOW())";
			$retval = $c->query($sql_add);
			// return makeQuery($c,"INSERT INTO track_locations (buddy_id, lat, lng, alcohol, bar, note, date_create) VALUES (?,?,?,?,?,?,NOW())",$p);
			break;

		case "insert_user": 
			$r = makeQuery($c,"SELECT `id` FROM users WHERE `username` = ? OR `email`=?",[$p[0],$p[1]]);
			if(count($r['result']))	return ["error"=>"Username or Email already exists"];

			$r = makeQuery($c,"INSERT INTO users (username, email, password, date_create, img) VALUES (?,?,md5(?),NOW(),'placeholder.png')",$p);
			if(isset($r['error'])) return $r;
			return ["result"=>$c->lastInsertId()];

		case "edit_user": 
			return makeQuery($c,"UPDATE users SET username = ?, email = ?,  intro = ? , img = ?  WHERE id=?",$p);
		case "add_buddy":
			return makeQuery($c,"INSERT INTO buddies (user_id, name, fav_alcohol, fav_place, img, memory) VALUES (?,?,?,?,?,0)",$p);
			
		case "edit_buddy":
			return makeQuery($c,"UPDATE buddies SET name = ?, fav_alcohol = ?, fav_place = ? , img = ?  WHERE id=?",$p);
		case "delete_buddy":
			makeQuery($c,"DELETE FROM track_locations WHERE buddy_id=?",$p);
			return makeQuery($c,"DELETE FROM buddies WHERE id=?",$p);

		case "update_profile_image":
			$r = makeQuery($c,"UPDATE users SET img=? WHERE id=?",$p);
			return ["result"=>"success"];

		default: return ["error"=>"No matched type"];
	}
}


function makeUpload($file,$folder) {
	// echo "makeUpload";
	$filename = microtime(true) . "_" .
		$_FILES[$file]['name'];

	if(@move_uploaded_file(
		$_FILES[$file]['tmp_name'],
		$folder.$filename
	)) return ["result"=>$filename];
	else return [
		"error"=>"File Upload Failed",
		"_FILES"=>$_FILES,
		"filename"=>$filename
	];
}
if(!empty($_FILES)) {
	$r = makeUpload("image","../uploads/");
	die(json_encode($r));
	echo "not empty";
} 
// if(empty($_FILES)) {
// 	echo "empty";
// }

$data = json_decode(file_get_contents("php://input"));


// for ($x = 0; $x <= 50; $x++) {
//   	$memory = makeQuery(makeConn(),"SELECT * FROM track_locations WHERE buddy_id=?",[$x]);
// 	$count = count($memory['result']);
// 	makeQuery(makeConn(),"UPDATE buddies SET memory=? WHERE id=?",[$count, $x]);
// }


echo json_encode(
	makeStatement($data),
	JSON_NUMERIC_CHECK
);


?>