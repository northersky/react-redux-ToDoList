import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Button, Form } from 'semantic-ui-react'

let ToDoForm = ({ dispatch }) => {
  let input

  return (
    <div>
      <Form success onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
        <Form.Group widths=''>
          <Form.Field>
            <input ref={node => {
              input = node
              }} placeholder='Enter a task' />
          </Form.Field>
          <Form.Field>
            <Button type='submit'>Submit</Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </div>
  )
}
ToDoForm = connect()(ToDoForm)

export default ToDoForm
