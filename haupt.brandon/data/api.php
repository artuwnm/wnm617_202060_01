<?php 

include "auth.php"
function makeConn(){
    try{
        return new PDO(...PDOauth());
    } catch (PDOException $e){
        die('{"error":"'.$e.getMessage().'")');
    }
}

// function print_p($d){
//     echo "<pre>",print_r($d),"</pre>";
// }

// $r = PDO result
function fetchAll($r){
    $a = [];

    while ($row = $r->fetch(PDO::FETCH_OBJ)) {
        $a[] = $row;
    }
    return $a;
}


// $c = connection
// $ps = prepared statment
// $p = parameters

function makeQuery($c, $ps, $p){
    try {
        if (count($p)) {
            $stmt = $c->prepare($ps);
            $stmt->execute($p);
        } else {
            $stmt = $c->query($ps);
        }

        $r = fetchAll($stmt);

        return [
            // "statement"=>$ps,
            // "params"=>$p,
            "result"=>$r
        ];

    } catch (PDOException $e) {
        return ["error"=>"Query Failed: ".$e.getMessage()];
    }
}

function makeStatement($data) {
    $c = makeConn();
    $t = $data->type;
    $p = $data->params;

    switch($t){
        case "users_all" : return makeQuery($c,"SELECT * FROM `users`",[]);
        case "resource_all" : return makeQuery($c,"SELECT * FROM `users`",[]);
        case "lcations_all" : return makeQuery($c,"SELECT * FROM `users`",[]);

        case "resource_by_id" : return makeQuery($c,"SELECT * FROM `users`",[]);
        case "location_by_id" : return makeQuery($c,"SELECT * FROM `users`",[]);

        case "users_by_id" : return makeQuery($c,"SELECT * FROM `users` WHERE `id`=?",$p);

        case "resource_by_id" : return makeQuery($c,"SELECT * FROM `track_resources` WHERE `id`=?",$p);

        case "resources_by_user_id" : return makeQuery($c,"SELECT * FROM `track_resources` WHERE `user_id`=?",$p);

        case "check_signin":
            return makeQuery($c,"SELECT `id` FROM `track_users` WHERE `id`=?  AND `password`=md5(?)",$p);

        default: return["error"=>"No matched type"];
    }
}

$data = json_decode(file_get_contents("php://input"));

echo json_encode (
    makeStatement($data),
    JSON_NUMERIC_CHECK
);