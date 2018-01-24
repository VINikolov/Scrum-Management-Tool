<?php
    require_once('UserRepository.php');

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

    $user = new User($_POST['username'], $_POST['password'], $_POST['passwordConfirmation'], $_POST['email']);
    $userRepository = new UserRepository();
    $userRepository->insert($user);

    $urls = parse_ini_file('../clientUrls.ini');

    header('Location: '.$urls['app']);
    die();
?>