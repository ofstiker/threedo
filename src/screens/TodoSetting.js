/**
 * @flow weak
 * file name  : TodoSetting.js
 * input      :
 * output     :
 * todo       : todos
*/

import React, { Component } from 'react';
import {
  View, StyleSheet, TextInput,
  Button, Switch,
} from 'react-native';
import { connect } from 'react-redux';
import { actionCreator } from '../reducers/actions';

class TodoSetting extends Component {
  constructor(props) {
    super(props);
    const {
      id,
      title,
      dayStart,
      dayEnd,
      duration,
      pomoInterval,
      active,
    } = this.props.navigation.state.params.item;

    this.state = {
      currentTimer: props.currentTimer,
      id,
      title,
      dayStart,
      dayEnd,
      duration,
      pomoInterval,
      active,
    };
  }

  handleSubmit = () => {
    if(!this.state.title) return;

    const {
      id, title, dayStart, dayEnd, duration, pomoInterval, active
    } = this.state;

    const todo = {
      id, title, dayStart, dayEnd, duration, pomoInterval, active
    };

    this.props.dispatch(actionCreator.modTodo(todo));

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    paddingVertical: 10,
  },
});

export default connect()(TodoSetting);
