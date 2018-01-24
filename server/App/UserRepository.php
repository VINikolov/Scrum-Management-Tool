<?php
    class UserRepository {
        public function insert($user) {
            $dbConf = parse_ini_file('../configuration.ini');

            $connString = sprintf('mysql:host=%s;dbname=%s', $dbConf['host'], $dbConf['name']);
            $conn = new Pdo($connString, $dbConf['user'], $dbConf['pass']);
            $sql = $conn->prepare('INSERT INTO User (username, password, email) VALUES (:username, :password, :email)');
            $sql->bindParam(':username', $user->username);
            $passwordHash = hash('sha256',$user->password);
            $sql->bindParam(':password', $passwordHash);
            $sql->bindParam(':email', $user->email);
            $sql->execute();
        
            $conn = null;
        }
    }
?>