import React, { Component } from 'react';
import './TaskCreationForm.css';
import apiBaseUrl from '../../ApplicationSettings';
import urls from '../../ApiUrls';
import TaskCreationInputField from './TaskCreationInputField';
import TaskCreationDropdownMenu from './TaskCreationDropdownMenu';

class TaskCreationForm extends Component {
    render() {
        return (
            <div className="creation-form">
                <h1 className="creation-form-heading">
                    Create a new task
                </h1>
                <form method="POST" action={apiBaseUrl + urls.tasksManagementUrls.Create}>
                    <TaskCreationInputField fieldPlaceholder="Task name"
                        name="taskName"
                        required="required" />
                    <textarea rows="4" name="description" placeholder="Task description" />
                    <TaskCreationInputField fieldPlaceholder="Assignee (optional)"
                        name="assignee"
                        required="" />
                    <label htmlFor="status">Select workflow status: </label>
                    <TaskCreationDropdownMenu menuName="status" 
                        menuElements={["ToDo", "InProgress",
                                        "InTesting", "Done"]} />
                    <label htmlFor="priority">Select task priority: </label>
                    <TaskCreationDropdownMenu menuName="priority" 
                        menuElements={["Low", "Medium",
                                        "High", "Critical"]} />
                    <label htmlFor="taskPlacement">Add to: </label>
                    <TaskCreationDropdownMenu menuName="taskPlacement" 
                        menuElements={["Backlog", "ActiveSprint"]} />
                    <label htmlFor="estimation">Estimation(optional): </label>
                    <input type="number" name="estimation"/>

                    <input type="Submit" defaultValue="Create" />
                </form>
            </div>
        );
    }
}

export default TaskCreationForm;