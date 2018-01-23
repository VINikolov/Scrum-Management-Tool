var ScrumBoardLinkNames = {
    Backlog: "Backlog",
    ActiveSprint: "Active sprint",
    CompletedTasks: "Completed tasks",
    CreateATask: "Create a new task",
    Logout: "Logout"
}

var ScrumBoardMenuUrls = [
    {
        link: "/ScrumBoard/Backlog",
        linkName: ScrumBoardLinkNames.Backlog
    },
    {
        link: "/ScrumBoard/ActiveSprint",
        linkName: ScrumBoardLinkNames.ActiveSprint
    },
    {
        link: "/ScrumBoard/CompletedTasks",
        linkName: ScrumBoardLinkNames.CompletedTasks
    },
    {
        link: "/ScrumBoard/CreateATask",
        linkName: ScrumBoardLinkNames.CreateATask
    },
    {
        link: "/",
        linkName: ScrumBoardLinkNames.Logout
    }
];

export {ScrumBoardMenuUrls, ScrumBoardLinkNames}