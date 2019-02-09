import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
import Patrick from './patrick.png'
class App extends Component {
  
  state = {
    // black: false,
    todos: [
      {id: 1, content: 'Buy Chocolate', crossed: false},
      {id: 2, content: 'Play Games', crossed: false},
      {id: 3, content: 'Drink Water', crossed: false}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  changeCross = (id,crossed) => {
    // const todos = this.state.todos;
    // let idText = this.val();
    // todos.find(id);
    // for (let x in todos) {
    //   let todo = todos[x];
    //   let id = todo.id;
    //   console.log(id);
    // }
    
    let key = id - 1;
    this.state.todos[key].crossed = !crossed;
    let cross = this.state.todos[key].crossed;
    this.setState({
      cross
    })
  }
  
  render() {
    return (
      <div className="todo-app">
        <div className="patrick-container"  style={ { backgroundImage: `url(${Patrick})` } }>
          {/* <img src={Patrick} alt="" className="patrick"/> */}
          <div className="todos-container">
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} changeCross={this.changeCross}/>
            <AddTodo addTodo={this.addTodo}/>
          </div>
        </div>
        {/* <h1 className="center">Todo's</h1> */}
        
      </div>
    );
  }
}

export default App;
