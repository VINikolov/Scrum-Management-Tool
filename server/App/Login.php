<?php
    $dbConf = parse_ini_file('../configuration.ini');

    $username = $_POST['username'];
    $password = $_POST['password'];

    $connString = sprintf('mysql:host=%s;dbname=%s', $dbConf['host'], $dbConf['name']);
    $conn = new Pdo($connString, $dbConf['user'], $dbConf['pass']);
    $sql = $conn->prepare('SELECT username, password FROM User WHERE username=:username and password=:password');
    $sql->bindParam(':username', $username);
    $passwordHash = hash('sha256',$password);
    $sql->bindParam(':password', $passwordHash);

    $sql->execute();
    $urls = parse_ini_file('../clientUrls.ini');    

    $user = array();
    if (is_object($row=$sql->fetch(PDO::FETCH_OBJ))) {
        $user['username'] = $row->username;
        $conn = null;
        header('Location: '.$urls['scrumBoard']);
        die();
    }
    else {
        $conn = null;
        header('Location: '.$urls['app']);
        die();
    }

?>