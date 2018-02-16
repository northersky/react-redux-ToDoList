import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Checkbox } from 'semantic-ui-react'

const Todo = ({ onClick, completed, text }) => {
  return (<Segment>
    <Checkbox onClick={onClick} checked={completed} label={text} />
  </Segment>
)}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
