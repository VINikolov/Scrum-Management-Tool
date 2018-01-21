<?php 
    require_once('TasksRepository.php');

    $tasksRepository = new TasksRepository();
    $tasks = $tasksRepository->selectAll();

    $urls = parse_ini_file('../clientUrls.ini');

    $jsonData = json_encode($tasks);
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    echo $jsonData;
    // header('Location: '.$urls['tasksManager']);
    die();
?>