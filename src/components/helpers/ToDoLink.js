import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'

let ToDoLink = ({ isactive, children, onClick }) => (
  <Dropdown.Item
    onClick={onClick}
  >
    {children}
  </Dropdown.Item>
)

ToDoLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  isactive: PropTypes.string.isRequired,
  disabled: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default ToDoLink
