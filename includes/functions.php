<?php
    $result = array();

    function getAllUsers($conn) {
        $query = "SELECT * FROM favthings";
        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }
        echo (json_encode($result));
    }

    function getSingleUser($conn, $id) {
        $query = "SELECT * FROM favthings WHERE id=" . $id . ";";
        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }
        echo (json_encode($result));
    }