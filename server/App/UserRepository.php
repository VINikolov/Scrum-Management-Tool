<?php
    class UserRepository {
        public function insert($user) {
            $dbConf = parse_ini_file('../configuration.ini');

            $connString = sprintf('mysql:host=%s;dbname=%s', $dbConf['host'], $dbConf['name']);
            $conn = new Pdo($connString, $dbConf['user'], $dbConf['pass']);
            $sql = $conn->prepare('INSERT INTO User (username, password, email) VALUES (:username, :password, :email)');
            $sql->bindParam(':username', $user->username);
            $sql->bindParam(':password', $user->password);
            $sql->bindParam(':email', $user->email);
            $sql->execute();
        
            $conn = null;
        }

        public function select($username) {
            $dbConf = parse_ini_file('../configuration.ini');

            $connString = sprintf('mysql:host=%s;dbname=%s', $dbConf['host'], $dbConf['name']);
            $conn = new Pdo($connString, $dbConf['user'], $dbConf['pass']);
            $sql = $conn->prepare('SELECT username, password FROM User WHERE username=:username');
            $sql->bindParam(':username', $username);

            $sql->execute();

            $user = array();
            if (is_object($row=$sql->fetch(PDO::FETCH_OBJ))) {
                $user['username'] = $row->username;
                $user['password'] = $row->password;
            }
            else {
                //Error
            }

            $conn = null;

            return $user;
        }
    }
?>