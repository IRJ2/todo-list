import React, { Component, Fragment } from "react";
import "./Bootstrap/bootstrap-5.1.3-dist/css/bootstrap.css";

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
          <input type="text" placeholder="Enter new task" id="newtask"></input>
          <button class="btn" onClick={this.add_task} >Add</button>
          <br></br>
          <ul>
            {this.state.task_arr.map(item => {
                return(
                  <li id="task">{item}
                    <button onClick={() => this.delete_task(item)}>x</button>
                  </li>
                )
              }
            )}
          </ul>
        </Fragment>
      )
    }
}
export default App;