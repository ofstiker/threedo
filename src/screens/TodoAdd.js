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
  Button, Switch, Text,
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
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>
            Title
          </Text>
          <TextInput
            style={styles.input}
            value={this.state.title}
            placeholder='What needs to be done?'
            onChangeText={(title) => this.setState({title})}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>
            Day Start
          </Text>
          <TextInput
            style={styles.input}
            value={this.state.dayStart}
            placeholder='Starting Day?'
            onChangeText={(dayStart) => this.setState({dayStart})}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>
            Day End
          </Text>
          <TextInput
            style={styles.input}
            value={this.state.dayEnd}
            placeholder='Ending Day?'
            onChangeText={(dayEnd) => this.setState({dayEnd})}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>
            Duration
          </Text>
          <TextInput
            style={styles.input}
            value={this.state.duration}
            placeholder='Duration?'
            onChangeText={(duration) => this.setState({duration})}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>
            Interval
          </Text>
          <TextInput
            style={styles.input}
            value={this.state.pomoInterval}
            placeholder='Interval?'
            onChangeText={(pomoInterval) => this.setState({pomoInterval})}
          />
        </View>
        <View style={styles.switchWrapper}>
          <Text style={styles.label}>
            Active
          </Text>
          <Switch
            style={styles.input}
            value={this.state.active}
            onValueChange={(active) => this.setState({active})}
          />
        </View>
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
    paddingVertical: 10,
  },
  input: {
    paddingVertical: 10,
  },
  label: {
    fontSize: 20,
    width: 120,
  },
  inputWrapper: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F4D2',
    // justifyContent: 'center',
  },
  switchWrapper: {
    height: 50,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F4D2',
  }
});

export default connect()(TodoAdd);
