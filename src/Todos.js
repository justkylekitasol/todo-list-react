import React from 'react'

const Todos = ({todos, deleteTodo, changeCross}) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      let crossout = todo.crossed ? "crossed" : "not-crossed";
      return (
        <div className="collection-item" key={todo.id}>
          <span className={crossout} onClick={() => {changeCross(todo.id, todo.crossed)}}>{todo.content}</span>
          <span className="delete-btn" onClick={() => {deleteTodo(todo.id)}}>X</span>
        </div>
      )
    })
  ) : (
    <p className="center">You have no Todo's left!</p>
  )
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos