// @flow weak
import React, { Component } from 'react';
import moment from 'moment';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { actionCreator } from '../reducers/actions';

class TodoView extends Component {
  constructor(props) {
    super(props);
    const { pomoInterval } = this.props.navigation.state.params.item;
    this.state = {
      isRunning: false,
      controllerText: 'START',
      currentTimer: props.currentTimer || 0,
      pomoInterval: pomoInterval * 1000,
      timeStart: null,
      timeEnd: null,
    };
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  _handleTimer = () => {
    if (this.state.isRunning) {
      // stopping timer
      this.setState({
        isRunning: false,
        controllerText: 'START',
        timeEnd: Date.now(),
      });
      clearInterval(this.intervalId);
      return;
    }

    // starting timer
    this.setState({
      isRunning: true,
      controllerText: 'STOP',
      timeStart: Date.now(),
    });

    this.intervalId = setInterval( () => {
      this.setState({
        currentTimer: this.state.currentTimer + 1000,
      });
      // closing this interval
      if (  this.state.currentTimer === this.state.pomoInterval ||
            this.state.currentTimer >= this.state.pomoInterval ) {
        clearInterval(this.intervalId);
        this.setState({
          isRunning: false,
          controllerText: 'START',
          currentTimer: 0,
          timeEnd: Date.now(),
        });
        // adding pomo
        this.props.dispatch(actionCreator.addPomo(
          this.props.navigation.state.params.item.id,
          this.state.timeStart,
          this.state.timeEnd
        ));
      }
    }, 1000);
  };

  renderAnchoring() {
    return (
      <View style={styles.anchorWrapper}>
        <Text style={styles.anchorText}>
          This is anchoring area.
        </Text>
      </View>
    );
  }

  renderTarget() {
    return (
      <View style={styles.targetWrapper}>
        <Text style={styles.target}>
          This is target area.
        </Text>
      </View>
    );
  }

  render() {
    const { title } = this.props.navigation.state.params.item;
    const currentTimerText = moment.utc(this.state.currentTimer).format('mm:ss');
    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>
            {title} - {this.state.pomoInterval}
          </Text>
          <Text style={styles.title}>
            [{this.props.pomos.length}]
          </Text>
        </View>
        <View style={styles.timerWrapper}>
          <Text style={styles.timer}>
            {currentTimerText}
          </Text>
          <View style={styles.controlButtonWrapper} >
            <TouchableOpacity
              onPress={this._handleTimer}
            >
              <Text style={styles.controlButtonText}>
                {this.state.controllerText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.renderAnchoring()}
        {this.renderTarget()}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  titleWrapper: {
    height: 60,
    backgroundColor: '#252525',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    padding: 10,
    fontSize: 26,
    color: '#FF9700',
  },
  timerWrapper: {
    padding: 15,
    height: 70,
    flexDirection: 'column',
  },
  timer: {
    left: 15,
    position: 'absolute',
    fontSize: 60,
    fontWeight: 'bold',
  },
  controlButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  controlButtonText: {
    position: 'absolute',
    right: 5,
    fontSize: 40,
    paddingRight: 10,
  },
  anchorWrapper: {
    height: 60,
    backgroundColor: '#0E2431',
    justifyContent: 'center',
    alignItems: 'center',
  },
  anchorText: {
    fontSize: 30,
    color: '#EEE',
  },
  targetWrapper: {
    height: 40,

  },
  target: {
    fontSize: 40,
  },
});

const mapStateToProps = (state, props) => {
  const { id } = props.navigation.state.params.item;
  return {
    pomos: state.pomos.filter( pomo => pomo.todoId === id ),
  };
};

export default connect(mapStateToProps)(TodoView);
