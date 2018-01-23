<?php 
    require_once('TasksRepository.php');
    require_once('Task.php');

    $task = new Task($_POST['priority'],
        $_POST['assignee'], $_POST['taskName'], $_POST['estimation'], 
        $_POST['description'], $_POST['status'], $_POST['taskPlacement']);

    $tasksRepository = new TasksRepository();
    $tasksRepository->insert($task);

    $urls = parse_ini_file('../clientUrls.ini');

    header('Location: '.$urls['scrumBoard']);
    die();
?>