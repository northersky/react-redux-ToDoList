import React, { Component } from 'react';

import ToDoListManager from './components/ToDoListManager';
import ModalCreateToDo from './components/ModalCreateToDo';
import ToDoFilterMenuManager from './components/ToDoFilterMenuManager';

import { Container, Divider, Header, Icon, Menu, Segment } from 'semantic-ui-react'

class App extends Component {

  constructor() {
    super();
    this.state = {
      activeItem: '',
      openCreateTodoModal: "open"
    };

    this.handleItemCreateTaskClick = this.handleItemCreateTaskClick.bind(this);
  }


  handleItemCreateTaskClick = (e, { name }) => {
    e.preventDefault();
    this.setState({
      activeItem: name,
      openCreateTodoModal: name === 'newTask'
    })
  }

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <ModalCreateToDo open={this.state.openCreateTodoModal} />
        <Container textAlign="center" >
          <Segment.Group raised>

            <Segment padded inverted>
              <Header as='h2'>ToDoList</Header>
            </Segment>

            <Segment padded>
              <Menu stackable>
                <Menu.Item>
                  <Icon name='ordered list' />
                </Menu.Item>
                <Menu.Item
                  name='newTask'
                  onClick= {this.handleItemCreateTaskClick}
                  active={activeItem === 'newTask'} >
                  <Icon name='plus' />
                  New Task
                </Menu.Item>
                <ToDoFilterMenuManager />
              </Menu>
            </Segment>

            <Segment padded textAlign="left">
              <ToDoListManager />
            </Segment>

            <Segment padded inverted>
              <Divider horizontal inverted >Infos</Divider>
            </Segment>

          </Segment.Group>
        </Container>
      </div>
    );
  }
}

export default App;
