import { Component } from "react";
import pin from './pin.png'

export class TodoList extends Component{
    state = {
        userInput:'',
        taskList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
        //console.log(e)
    }

    addTask(input) {
        if (input === '') {
            alert ("Please write a task")
        } else {
        let listArray = this.state.taskList;
        listArray.push(input);
        this.setState({taskList: listArray, userInput: ''})
        }
    }

    deleteTask() {
        let listArray = this.state.taskList;
        listArray = [];
        this.setState({taskList: listArray})
       }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }  

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <input type="text"
                    placeholder="What is the task today?"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                </div>

                <div className="container">
                    <button onClick={() => this.addTask(this.state.userInput)} className="add">Add</button>
                </div>

                <ul>
                    {this.state.taskList.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}>
                            <img src={pin} alt="pin" width="25px"/>
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="container">
                <button onClick={() => this.deleteTask()} className="delete">Delete</button>
                </div>
                </form>

            </div>
        )
    }
}