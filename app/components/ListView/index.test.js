/* eslint-disable */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow } from 'enzyme';
import ListView from '../ListView';
import Subheader from 'material-ui/Subheader';
import Delete from 'material-ui/svg-icons/action/delete';

it('should render a ListView', () => {
    const tasks = ['Test', 'Test2'];
    const wrapper = shallow(
        <ListView tasks={tasks}/>
    );
    expect(wrapper).toMatchSnapshot();
});

it('should pass tasks as props', () => {
    const tasks = ['Test', 'Test2'];
    const deleteTaskMock = jest.fn();
    const wrapper = shallow(
        <ListView tasks={tasks} deleteTask={(taskIndex) => { deleteTaskMock(); }}/>
    );
    expect(wrapper.find('ListItem').length).toEqual(2);
    expect(wrapper.find(Subheader).props().children).toEqual('My Tasks 🗃');
});

it('should return different title when no tasks', () => {
    const tasks = [];
    const deleteTaskMock = jest.fn();
    const wrapper = shallow(
        <ListView tasks={tasks} deleteTask={(taskIndex) => { deleteTaskMock(); }}/>
    );
    expect(wrapper.find('ListItem').length).toEqual(0);
    expect(wrapper.find(Subheader).props().children).toEqual('You have no tasks. Add one 👌');
});

it('should trigger delete action', () => {
    const tasks = ['Test', 'Test2'];
    const wrapper = shallow(
        <ListView tasks={tasks}/>
    );

    wrapper.instance().deleteTask = jest.fn();
    wrapper.update();

    wrapper.find(Delete).simulate('touchTap');

    expect(wrapper.instance().deleteTask.mock.calls.length).toEqual(1);
});

