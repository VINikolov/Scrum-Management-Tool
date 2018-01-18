var TaskManagerLinkNames = {
    Tasks: "Existing tasks",
    TaskCreation: "Create a new task"
}

var TaskManagerMenuUrls = [
    {
        link: "/TaskManager",
        linkName: TaskManagerLinkNames.Tasks
    },
    {
        link: "/TaskManager/CreateATask",
        linkName: TaskManagerLinkNames.TaskCreation
    }
];

export {TaskManagerMenuUrls, TaskManagerLinkNames}