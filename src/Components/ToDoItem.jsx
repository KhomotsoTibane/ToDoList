//individual todoitem component with an on checked method prop used in the delete function

import React from 'react'

function ToDoItem(props) {
  return (
    <div onClick = { ()=> {props.onChecked(props.id); }}>
    <li> {props.text} </li>
    </div>
  )
}

export default ToDoItem