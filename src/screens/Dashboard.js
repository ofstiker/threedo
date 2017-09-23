/**
 * file name  : Dashboard.js
 * input      :
 * output     :
 * todo       : todos
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View, StyleSheet, FlatList
} from 'react-native';
import TodoCard from '../components/TodoCard';
import { actionCreator } from '../reducers/actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTimer: props.currentTimer,
    };
  }

  _renderItem = ({ item }) => (
    <TodoCard
      todo={item}
      handleViewTodo={() =>
        this.props.navigation.navigate('TodoTabView', { item })
      }
      handleDelTodo={() => this._deleteTodo(item.id)}
    />
  );

  _deleteTodo = id => {
    if (!id) return;
    this.props.dispatch(actionCreator.delTodo(id));
  }

  _keyExtractor = item => item.id;

  render() {
    return (
      <View style={styles.container}>
        {/* <Button
          title='RESET STORE'
          onPress={() => this.props.dispatch(actionCreator.resetStore())}
        /> */}
        <FlatList
          data={this.props.todos}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Dashboard);
