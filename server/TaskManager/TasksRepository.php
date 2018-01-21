<?php 
    class TasksRepository {
        public function selectAll() {
            $dbConf = parse_ini_file('../configuration.ini');

            $connString = sprintf('mysql:host=%s;dbname=%s', $dbConf['host'], $dbConf['name']);
            $conn = new Pdo($connString, $dbConf['user'], $dbConf['pass']);
            $sql = $conn->prepare('SELECT * FROM Task');
            
            $sql->execute();

            $tasks = array();
            while (is_object($row=$sql->fetch(PDO::FETCH_OBJ))) {
                array_push($tasks, $row);
            }

            $conn = null;

            return $tasks;
        }

        public function insert($task) {
            $dbConf = parse_ini_file('../configuration.ini');

            $connString = sprintf('mysql:host=%s;dbname=%s', $dbConf['host'], $dbConf['name']);
            $conn = new Pdo($connString, $dbConf['user'], $dbConf['pass']);
            $sql = $conn->prepare('INSERT INTO Task VALUES 
                (:name, :description, :estimation, :status, :assignedTo, :priority, :creationDate)');
            $sql->bindParam(':name', $task->name);
            $sql->bindParam(':description', $task->description);
            $sql->bindParam(':estimation', $task->estimation);
            $sql->bindParam(':status', $task->status);
            $sql->bindParam(':assignedTo', $task->assignedTo);
            $sql->bindParam(':priority', $task->priority);
            $date = date("Y-m-d");
            $sql->bindParam(':creationDate', $date);

            $sql->execute();

            $conn = null;
        }
    }
?>