import React from 'react'
import { To_do } from "./To_do";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className='container ' style={myStyle}>
      <h3 className=" my-3">Todos List</h3>
      {props.todos.length===0? "No Todos to display": 
      props.todos.map((todo) => {
        return(
        <> 
        <To_do todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
        </>
      )})
      }
    </div>
  )
}
