import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  ListView,
  Input,
} from './components';
// eslint-disable-next-line no-unused-vars
import style from './styles/main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  addNewTask(newTask) {
    this.setState({
      tasks: [
        ...this.state.tasks,
        newTask,
      ],
    });
  }

  deleteTask(taskIndex) {
    this.setState({
      tasks: [
        ...this.state.tasks.slice(0, taskIndex),
        ...this.state.tasks.slice(taskIndex + 1),
      ],
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <ListView
            tasks={this.state.tasks}
            deleteTask={(taskIndex) => { this.deleteTask(taskIndex); }}
          />
          <Input addNewTask={(newTask) => { this.addNewTask(newTask); }} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
