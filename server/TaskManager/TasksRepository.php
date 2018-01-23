<?php 
    class TasksRepository {
        public function insert($task) {
            $dbConf = parse_ini_file('../configuration.ini');

            $connString = sprintf('mysql:host=%s;dbname=%s', $dbConf['host'], $dbConf['name']);
            $conn = new Pdo($connString, $dbConf['user'], $dbConf['pass']);
            $sql = $conn->prepare('INSERT INTO Task VALUES 
                (:name, :description, :estimation, :status,
                :assignedTo, :priority, :creationDate, :taskPlacement)');
            $sql->bindParam(':name', $task->name);
            $sql->bindParam(':description', $task->description);
            $sql->bindParam(':estimation', $task->estimation);
            $sql->bindParam(':status', $task->status);
            $sql->bindParam(':assignedTo', $task->assignedTo);
            $sql->bindParam(':priority', $task->priority);
            $date = date("Y-m-d");
            $sql->bindParam(':creationDate', $date);
            $sql->bindParam(':taskPlacement', $task->taskPlacement);

            $sql->execute();

            $conn = null;
        }

        public function selectByPlacement($placement) {
            $dbConf = parse_ini_file('../configuration.ini');

            $connString = sprintf('mysql:host=%s;dbname=%s', $dbConf['host'], $dbConf['name']);
            $conn = new Pdo($connString, $dbConf['user'], $dbConf['pass']);
            $sql = $conn->prepare('SELECT * FROM Task WHERE TaskPlacement=:taskPlacement AND
                Status not like :done');
            $sql->bindParam(':taskPlacement', $placement);
            $done = "Done";
            $sql->bindParam(':done', $done);
            
            $sql->execute();

            $tasks = array();
            while (is_object($row=$sql->fetch(PDO::FETCH_OBJ))) {
                array_push($tasks, $row);
            }

            $conn = null;

            return $tasks;
        }

        public function selectByStatus($status) {
            $dbConf = parse_ini_file('../configuration.ini');

            $connString = sprintf('mysql:host=%s;dbname=%s', $dbConf['host'], $dbConf['name']);
            $conn = new Pdo($connString, $dbConf['user'], $dbConf['pass']);
            $sql = $conn->prepare('SELECT * FROM Task WHERE Status=:status');
            $sql->bindParam(':status', $status);
            
            $sql->execute();

            $tasks = array();
            while (is_object($row=$sql->fetch(PDO::FETCH_OBJ))) {
                array_push($tasks, $row);
            }

            $conn = null;

            return $tasks;
        }

        public function update($task) {
            $dbConf = parse_ini_file('../configuration.ini');

            $connString = sprintf('mysql:host=%s;dbname=%s', $dbConf['host'], $dbConf['name']);
            $conn = new Pdo($connString, $dbConf['user'], $dbConf['pass']);
            $sql = $conn->prepare('UPDATE Task SET Name=:name, Description=:description,
                Estimation=:estimation, Status=:status, AssignedTo=:assignedTo, 
                Priority=:priority, TaskPlacement=:taskPlacement
                WHERE Name=:name');
            $sql->bindParam(':name', $task->name);
            $sql->bindParam(':description', $task->description);
            $sql->bindParam(':estimation', $task->estimation);
            $sql->bindParam(':status', $task->status);
            $sql->bindParam(':assignedTo', $task->assignedTo);
            $sql->bindParam(':priority', $task->priority);
            $sql->bindParam(':taskPlacement', $task->taskPlacement);

            $sql->execute();

            $conn = null;
        }
    }
?>