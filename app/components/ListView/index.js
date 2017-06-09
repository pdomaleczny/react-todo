import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Delete from 'material-ui/svg-icons/action/delete';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class ListView extends Component {
  renderTitle() {
    return this.props.tasks.length > 0 ? 'My Tasks 🗃' : 'You have no tasks. Add one 👌';
  }

  deleteTask(taskIndex) {
    this.props.deleteTask(taskIndex);
  }

  render() {
    return (
      <List>
        <Subheader>{this.renderTitle()}</Subheader>
        {
          this.props.tasks.map((el, index) =>
            <ListItem
              key={index}
              primaryText={el}
              rightIcon={<Delete onTouchTap={() => { this.deleteTask(index); }} />}
            />,
          )
        }
      </List>
    );
  }
}

ListView.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string),
  deleteTask: PropTypes.func.isRequired,
};

export default ListView;
