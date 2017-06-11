/* eslint-disable */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow } from 'enzyme';
import Input from '../Input';

it('should render a input', () => {
    const wrapper = shallow(
        <Input addNewTask={(newTask) => { return newTask; }}/>
    );
    expect(wrapper).toMatchSnapshot();
});


it('should trigger adding task action on enter', () => {
    const addNewTaskMock = jest.fn();
    const wrapper = shallow(
        <Input addNewTask={(newTask) => { addNewTaskMock(); }}/>
    );

    wrapper.instance().keyPressed({ key: 'Enter' })

    expect(wrapper.state('text')).toEqual('');
    expect(addNewTaskMock.mock.calls.length).toEqual(1);
});

it('should trigger adding task action on button click', () => {
    const addNewTaskMock = jest.fn();
    const wrapper = shallow(
        <Input addNewTask={(newTask) => { addNewTaskMock(); }}/>
    );

    wrapper.instance().setState({ text: 'test' });
    wrapper.find('FlatButton').simulate('touchTap');

    expect(wrapper.state('text')).toEqual('');
    expect(addNewTaskMock.mock.calls.length).toEqual(1);
});
