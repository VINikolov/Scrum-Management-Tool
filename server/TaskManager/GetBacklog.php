<?php 
    require_once('TasksRepository.php');

    $tasksRepository = new TasksRepository();
    $tasks = $tasksRepository->selectByPlacement("Backlog");

    $urls = parse_ini_file('../clientUrls.ini');

    $jsonData = json_encode($tasks);
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    echo $jsonData;
    die();
?>