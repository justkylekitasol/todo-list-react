import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo:</label><br></br>
          <input type="text" onChange={this.handleChange} value={this.state.content} className="input-todo"/>
        </form>
      </div>
    )
  }
}

export default AddTodo