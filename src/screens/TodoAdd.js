/**
 * @flow weak
 * file name  : TodoAdd.js
 * input      :
 * output     :
 * todo       : todos
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, TextInput,
  Button, Switch,
} from 'react-native';
import { connect } from 'react-redux';
import { actionCreator } from '../reducers/actions';

class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTimer: props.currentTimer,
      title: '',
      dayStart: '2017-09-17',
      dayEnd: '2017-12-31',
      duration: '66',
      pomoInterval: '1',
      active: true,
    };
  }

  handleSubmit = () => {
    if(!this.state.title) return;

    const {
      title, dayStart, dayEnd, duration, pomoInterval, active
    } = this.state;

    const todo = {
      title, dayStart, dayEnd, duration, pomoInterval, active
    };

    this.props.dispatch(actionCreator.addTodo(todo));

    this.setState({
      title: '',
      dayStart: '2017-09-17',
      dayEnd: '2017-12-31',
      duration: '66',
      pomoInterval: '1',
      active: true,
    });

    this.props.navigation.navigate('TodoList');
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.title}
          placeholder='What needs to be done?'
          onChangeText={(title) => this.setState({title})}
        />
        <TextInput
          style={styles.input}
          value={this.state.dayStart}
          placeholder='Starting Day?'
          onChangeText={(dayStart) => this.setState({dayStart})}
        />
        <TextInput
          style={styles.input}
          value={this.state.dayEnd}
          placeholder='Ending Day?'
          onChangeText={(dayEnd) => this.setState({dayEnd})}
        />
        <TextInput
          style={styles.input}
          value={this.state.duration}
          placeholder='Duration?'
          onChangeText={(duration) => this.setState({duration})}
        />
        <TextInput
          style={styles.input}
          value={this.state.pomoInterval}
          placeholder='Interval?'
          onChangeText={(pomoInterval) => this.setState({pomoInterval})}
        />
        <Switch
          style={styles.input}
          value={this.state.active}
          onValueChange={(active) => this.setState({active})}
        />
        <Button
          title='SUBMIT'
          onPress={this.handleSubmit}
        />
      </View>
    )
  };
}

TodoAdd.propTypes = {
  currentTimer: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    paddingVertical: 10,
  },
});

export default connect()(TodoAdd);
