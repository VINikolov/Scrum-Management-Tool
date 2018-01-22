var userManagementUrls = {
    RegisterUser: "/App/RegisterUser.php",
    LoginUser: "/App/Login.php"
}

var tasksManagementUrls = {
    GetAllTasks: "/TaskManager/GetAllTasks.php",
    Create: "/TaskManager/CreateATask.php",
    Backlog: "/TaskManager/GetBacklog.php",
    ActiveSprint: "/TaskManager/GetActiveSprint.php",
    CompleteTasks: "/TaskManager/GetCompleteTasks.php"
}

export default { userManagementUrls, tasksManagementUrls };