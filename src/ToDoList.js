import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddTodo from "./AddToDo.js"

export default class TodoList extends Component{


    state = {
        todos:[
            {
                Id: '1',
                Title: 'Push code to github',
                Status: 'Done'
            },
            {
                Id: '2',
                Title: 'Email to Manager',
                Status: 'Pending'
            },
            {
                Id: '3',
                Title: 'Apply for Leave',
                Status: 'Pending'
            },
        ]
    };
    deleteItem = (todo) => {
        const filteredItems = this.state.todos.filter(x => x.Id !== todo.Id);
        this.setState({
            todos:filteredItems
        })
    }

    editItem = (x) => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if(todo.Id === x.Id){
                    return {
                        ...todo,
                        Status: todo.Status=== "Done"?"Pending" :"Done"
                    };
                }else {
                    return todo
                }
            })
        }))
    }

    //Add a method to handle all the changes on button click
    addToDo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        });
    }

    render() {
        return(
            <div>
            <AddTodo onAdd={this.addToDo}></AddTodo>

                <h1>TodoList</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map(x => {
                                return(
                                    <tr key={x.Id}>
                                        <td>{x.Id}</td>
                                        <td>{x.Title}</td>
                                        <td style={{color: x.Status ==="Done" ? "green":"red"}}>{x.Status}</td>
                                        <td>
                                        <button className="btn btn-primary" onClick={() => 
                                        this.editItem(x)}>
                                            <span>
                                                <FontAwesomeIcon icon = "edit"></FontAwesomeIcon>
                                            </span>
                                        </button>
                                       |
                                        <button className="btn btn-primary" onClick = {() => this.deleteItem(x)}>
                                            <span>
                                                <FontAwesomeIcon icon = "trash"></FontAwesomeIcon>
                                            </span>
                                        </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
            </div>
        );
    }
}