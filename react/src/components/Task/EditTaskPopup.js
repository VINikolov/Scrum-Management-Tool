import React, { Component } from 'react';
import './Task.css';

class EditTaskPopup extends Component {
    render() {
        return (
          <div className='modal'>
            <div className='modal-content'>
                <span className="close" onClick={(event) => this.props.closePopup(event)}>&times;</span>
                <h1>Edit task {this.props.name}</h1>
            </div>
          </div>
        );
      }
}

export default EditTaskPopup;