<?php
    class User {
        public $username;
        public $password;
        public $passwordConfirmation;
        public $email;

        public function __construct($username, $password, $passwordConfirmation, $email) {
            $this->username = $username;
            $this->password = $password;
            $this->passwordConfirmation = $passwordConfirmation;
            $this->email = $email;
        }
    }

    class UserRepository {
        private $dbUser;
        private $dbPass;
        private $dbName;
        private $dbHost;

        public function __construct($dbUser, $dbPass, $dbName, $dbHost) {
            $this->dbUser = $dbUser;
            $this->dbPass = $dbPass;
            $this->dbName = $dbName;
            $this->dbHost = $dbHost;
        }

        public function Insert($user) {
            $connString = sprintf('mysql:host=%s;dbname=%s', $this->dbHost, $this->dbName);
            $conn = new Pdo($connString, $this->dbUser, $this->dbPass);
            $sql = $conn->prepare('INSERT INTO User (username, password, email) VALUES (:username, :password, :email)');
            $sql->bindParam(':username', $user->username);
            $sql->bindParam(':password', $user->password);
            $sql->bindParam(':email', $user->email);
        
            $sql->execute();
        
            $conn = null;
        }
    }

    $user = new User($_POST['username'], $_POST['password'], $_POST['passwordConfirmation'], $_POST['email']);

    $dbConf = parse_ini_file('../configuration.ini');

    $userRepository = new UserRepository($dbConf['user'], $dbConf['pass'], $dbConf['name'], $dbConf['host']);
    $userRepository->Insert($user);

    header('Location: http://localhost:3000/ScrumBoard');
?>