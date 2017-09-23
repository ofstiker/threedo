/**
 * @flow weak
 * file name  : TodoCard.js
 * input      :
 * output     :
 * todo       : todos
*/

import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Button, Dimensions,
} from 'react-native';
import { connect } from 'react-redux';

class TodoCard extends Component {
  render() {
    const { title } = this.props.todo;
    return (
      <TouchableOpacity onPress={this.props.handleViewTodo}>
        <View style={styles.container}>
          <Text style={styles.title}>
            [{this.props.pomo.length}] {title}
          </Text>
          <Button
            title='  X  '
            onPress={this.props.handleDelTodo}
          />
        </View>
      </TouchableOpacity>
    );
  };
}

const {
  width: WIDTH,
} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    height: 200,
    width: WIDTH,
    backgroundColor: '#0E2431',
    borderWidth: 1,
    borderColor: '#E8D5B7',
  },
  title: {
    fontSize: 26,
    color: '#EEE',
  }
});

const mapStateToProps = (state, props) => {
  const { id } = props.todo;
  return {
    pomo: state.pomos.filter(pomo => pomo.todoId === id),
  };
};

export default connect(mapStateToProps)(TodoCard);
