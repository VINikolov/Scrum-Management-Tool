<?php
    class Task {
        public $priority;
        public $assignedTo;
        public $name;
        public $estimation;
        public $description;
        public $status;

        public function __construct($priority,
            $assignedTo, $name, $estimation, $description, $status)
        {
            $this->priority = $priority;
            $this->assignedTo = $assignedTo;
            $this->name = $name;
            $this->estimation = $estimation;
            $this->description = $description;
            $this->status = $status;
        }
    }
?>