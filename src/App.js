import React, { Component, Fragment } from "react";
class App extends Component {
    state = {task_arr:[]}
    add_task = () => {
      let new_task = document.getElementById("newtask").value
      var temp = this.state.task_arr;
      temp.push(new_task);
      this.setState({task_arr: temp})
    } 
    render(){
      return (
        <Fragment>
          <input type="text" placeholder="Enter new task" id="newtask"></input>
          <button class="btn" onClick={this.add_task} >Add</button>
          <h1>{this.state.task_arr}</h1>
        </Fragment>
      )
    }
}
export default App;
