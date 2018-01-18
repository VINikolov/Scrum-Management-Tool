var linkNames = {
    ScrumBoard: "Scrum board",
    TaskManager: "Manage tasks",
    Logout: "Logout"
}

var navBarUrls = [
    {
        link: "/ScrumBoard",
        linkName: linkNames.ScrumBoard
    },
    {
        link: "/TaskManager",
        linkName: linkNames.TaskManager
    },
    {
        link: "/",
        linkName: linkNames.Logout
    }
];

export {navBarUrls, linkNames};
