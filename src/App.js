import React, { Component, Fragment } from "react";
class App extends Component {
    state = {task_arr:[]}
    add_task = () => {
      let new_task = document.getElementById("newtask").value
      var temp =  [...this.state.task_arr]
      temp.push(new_task);
      this.setState({task_arr: temp})
    } 
    display_task = () => {
      document.getElementById()
    }
    delete_task = (id) => {
      var temp = [...this.state.task_arr];
      temp.filter(ele => ele !== id)
      alert(temp)
      this.setState({task_arr:temp})
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
                  <li>{item}
                  <button onclick={this.delete_task(item)}>Del</button>
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
