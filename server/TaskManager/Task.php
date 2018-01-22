<?php
    class Task {
        public $priority;
        public $assignedTo;
        public $name;
        public $estimation;
        public $description;
        public $status;
        public $taskPlacement;

        public function __construct($priority,
            $assignedTo, $name, $estimation, $description, $status, $taskPlacement)
        {
            $this->priority = $priority;
            $this->assignedTo = $assignedTo;
            $this->name = $name;
            $this->estimation = $estimation;
            $this->description = $description;
            $this->status = $status;
            $this->taskPlacement = $taskPlacement;
        }
    }
?>