import React from 'react'

import { Dropdown, Menu } from 'semantic-ui-react'
import ToDoLinkReduxWrapper from './helpers/ToDoLinkReduxWrapper'

let ToDoFilterMenuManager = () => {
  return (
    <Menu.Menu >
        <Dropdown item text='Filter'>
          <Dropdown.Menu>
            <ToDoLinkReduxWrapper filter="SHOW_ALL">All</ToDoLinkReduxWrapper>
            <ToDoLinkReduxWrapper filter="SHOW_ACTIVE">Active</ToDoLinkReduxWrapper>
            <ToDoLinkReduxWrapper filter="SHOW_COMPLETED">Completed</ToDoLinkReduxWrapper>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
  )
}

export default ToDoFilterMenuManager
