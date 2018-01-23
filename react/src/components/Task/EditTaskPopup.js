import React, { Component } from 'react';
import './Task.css';
import apiBaseUrl from './../../ApplicationSettings';
import urls from './../../ApiUrls';

class EditTaskPopup extends Component {
    render() {
        return (
          <div className='modal'>
            <div className='modal-content'>
                <span className="close" onClick={(event) => this.props.closePopup(event)}>&times;</span>
                <h2>{this.props.name}</h2>
                <form method="POST" action={apiBaseUrl + urls.tasksManagementUrls.Update}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" defaultValue={this.props.name}/>
                    <label htmlFor="description">Description</label>
                    <textarea rows="4" name="description" defaultValue={this.props.description} />
                    <label htmlFor="assignee">Assignee</label>
                    <input type="text" name="assignee" defaultValue={this.props.assignedTo} />
                    <label htmlFor="status">Status: </label>
                    <select name="status">
                        <option selected={this.props.status === "ToDo" ? "selected" : ""} 
                            value="ToDo">ToDo</option>
                        <option selected={this.props.status === "InProgress" ? "selected" : ""}
                            value="InProgress">InProgress</option>
                        <option selected={this.props.status === "InTesting" ? "selected" : ""}
                            value="InTesting">InTesting</option>
                        <option selected={this.props.status === "Done" ? "selected" : ""}
                            value="Done">Done</option>
                    </select>
                    <label htmlFor="priority">Task priority: </label>
                    <select name="priority">
                        <option selected={this.props.priority === "Low" ? "selected" : ""}
                            value="Low">Low</option>
                        <option selected={this.props.priority === "Medium" ? "selected" : ""}
                            value="Medium">Medium</option>
                        <option selected={this.props.priority === "High" ? "selected" : ""}
                            value="High">High</option>
                        <option selected={this.props.priority === "Critical" ? "selected" : ""}
                            value="Critical">Critical</option>
                    </select>
                    <label htmlFor="taskPlacement">Currently in: </label>
                    <select name="taskPlacement">
                        <option selected={this.props.placement === "Backlog" ? "selected" : ""}
                            value="Backlog">Backlog</option>
                        <option selected={this.props.placement === "ActiveSprint" ? "selected" : ""}
                            value="ActiveSprint">ActiveSprint</option>
                    </select>
                    <br/>
                    <br/>
                    <label htmlFor="estimation">Estimation: </label>
                    <input type="number" name="estimation" defaultValue={this.props.estimation}/>

                    <input type="Submit" defaultValue="Save" />
                </form>
            </div>
          </div>
        );
      }
}

export default EditTaskPopup;