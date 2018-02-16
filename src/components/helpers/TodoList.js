import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { Segment } from 'semantic-ui-react'

const TodoList = ({ todos, onTodoClick }) => {
  if (todos !== undefined && todos !== null && todos.length !== 0) {
    return (
      <Segment.Group>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
      </Segment.Group>
    )
  } else {
    return (
      <div></div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
