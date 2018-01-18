var ScrumBoardLinkNames = {
    Backlog: "Backlog",
    ActiveSprint: "Active sprint",
    CompletedTasks: "Completed tasks",
    ActiveBugs: "Active bugs"
}

var ScrumBoardMenuUrls = [
    {
        link: "/ScrumBoard",
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
        link: "/ScrumBoard/ActiveBugs",
        linkName: ScrumBoardLinkNames.ActiveBugs
    }
];

export {ScrumBoardMenuUrls, ScrumBoardLinkNames}