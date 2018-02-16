import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'

import ToDoForm from './ToDoForm';

class ModalCreateToDo extends Component {

  constructor(props) {
    super(props)
    this.state = {open: false};
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.open) {
      this.show('blurring');
    } else {
      this.close();
    }
  }

  show = (dimmer) => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Create a new ToDo</Modal.Header>
          <Modal.Content>
            <ToDoForm />
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default ModalCreateToDo
