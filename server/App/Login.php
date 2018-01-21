<?php
    require_once('UserRepository.php');

    class UserManager {
        public function validateUser($username, $password) {
            $userRepository = new UserRepository();
            $user = $userRepository->select($username);
            if ($user['password'] == $password) {
                return TRUE;
            }

            return FALSE;
        }
    }

    $username = $_POST['username'];
    $password = $_POST['password'];
    $urls = parse_ini_file('../clientUrls.ini');    
    $userManager = new UserManager();
    if ($userManager->validateUser($username, $password)) {
        header('Location: '.$urls['scrumBoard']);
        die();
    }
    else {
        //Error
    }
?>