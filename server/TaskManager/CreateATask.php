<?php 
    require_once('TasksRepository.php');
    require_once('Task.php');

    $task = new Task($_POST['creationDate'], $_POST['priority'],
        $_POST['assignee'], $_POST['name'], $_POST['estimation'], 
        $_POST['description'], $_POST['status']);

    $tasksRepository = new TasksRepository();
    $tasksRepository->insert($task);

    $urls = parse_ini_file('../clientUrls.ini');

    header('Location: '.$urls['tasksManager']);
    die();
?>