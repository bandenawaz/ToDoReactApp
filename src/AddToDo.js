import React, { Component } from "react";


export default class AddTodo extends Component {

    state = {
        Id: "",
        Title: "",
        Status: "Pending"
    };

    //Lets write the code for change in events
    handleIdChange = (event) => {
        this.setState({
            Id: event.target.value
        });
    };

    handleTitleChange = (event) => {
        this.setState({
            Title: event.target.value
        });
    };

     handleStatusChange = (event) => {
        this.setState({
            Status: event.target.value
        });
    };

    //Handler for button click
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd({
            Id:this.state.Id,
            Title:this.state.Title,
            Status: this.state.Status
        });

        this.setState({
            Id:"",
            Title:"",
            Status:"Pending"
        });
    }


    render(){
        return(
            <div>
                <h3> Add ToDo</h3>

                <form>
                    <div className="form-group">
                        <input value={this.state.Id} onChange={this.handleIdChange} className="form-control" placeholder="Enter Id"/>
                    </div>

                    <div className="form-group">
                        <input value={this.state.Title} onChange={this.handleTitleChange} className="form-control" placeholder="Enter Title"/>

                    </div>
                    <div className="form-group">
                        <select value={this.state.Status} onChange={this.handleStatusChange} className="form-control">
                            <option value="Done">Done</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>

                        <button type="submit" className="form-control" btn btn-primary onClick={this.handleSubmit}>
                            Add Item
                        </button>

                </form>
            </div>
        );
    }
}