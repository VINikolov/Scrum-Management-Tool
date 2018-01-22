<?php 
    require_once('TasksRepository.php');

    $tasksRepository = new TasksRepository();
    $tasks = $tasksRepository->selectByPlacement('Backlog');

    $jsonData = json_encode($tasks);
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    echo $jsonData;
    die();
?>