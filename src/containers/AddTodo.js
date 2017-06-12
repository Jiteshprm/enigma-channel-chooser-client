import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ users, dispatch }) => {
  let input
    console.log("state1", users)
    console.log("dispatch1", dispatch)

  return (

        <div onClick={() => dispatch(addTodo("aaa"))}>
      aaaa

    </div>
  )
}
const mapStateToProps = function(store) {
    return {
        users: store
    };
}

AddTodo = connect(mapStateToProps)(AddTodo)

export default AddTodo
