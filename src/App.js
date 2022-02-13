import React, { Component, Fragment } from "react";
import "./App.css";

class App extends Component {
    state = {task_arr:[]};
    add_task = () => {
      let new_task = document.getElementById("newtask").value
      var temp =  [...this.state.task_arr]
      temp.push(new_task);
      this.setState({task_arr: temp})
    }
    delete_task = (id) => {
      let index = this.state.task_arr.indexOf(id)
      this.state.task_arr.splice(index, 1)
      this.setState({task_arr: this.state.task_arr})
      console.log(this.state.task_arr)
    }
    render(){
      return (
        <Fragment>

        
        <div class="container">
          <h1> let's be TaskManiac!</h1>
          <input  type="text" placeholder="Enter new task" id="newtask"></input>
          <button class="btn" onClick={this.add_task} >+</button>
          <br></br>
          <ul>
            {this.state.task_arr.map(item => {
                return(
                  <li class="list-group-item list-group-item-action" id="task"><h6>{item}</h6>
                    <button  class="done-but" data-bs-toggle="tooltip" title="Hooray!" onClick={() => this.delete_task(item)}>Done</button>
                  </li>
                )
              }
            )}
          </ul>
        </div>
        </Fragment>
      )
    }
}
export default App;