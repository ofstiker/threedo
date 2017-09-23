/**
 * @flow weak
 * file name  : todoReducer.js
 * input      :
 * output     :
 * todo       : 
*/

import { types } from './actions';

const initState = {
  todos: [
    {
      id: Date.now(),
      title: 'Languages',
      dayStart: '2017-09-15',
      dayEnd: '2017-12-31',
      duration: '66',
      pomoInterval: '1',
      active: true,
    },
  ],
  pomos: [],
};

const todoReducer = ( state=initState, action ) => {
  switch(action.type) {
    case types.ADD_TODO: {
      const {
        title, dayStart, dayEnd, duration, pomoInterval, active
      } = action.todo;
      return {
        ...state,
        todos: [
          {
            id: Date.now(),
            title,
            dayStart,
            dayEnd,
            duration,
            pomoInterval,
            active,
          },
          ...state.todos,
        ],
      };
    }
    case types.DEL_TODO: {
      const { id } = action;
      return {
        ...state,
        todos: state.todos.filter( todo => todo.id !== id ),
      };
    }
    case types.MOD_TODO: {
      const {
        id, title, dayStart, dayEnd, duration, pomoInterval, active
      } = action.todo;
      return {
        ...state,
        todos: state.todos.map( todo => {
          if (todo.id !== id) return todo;
          return {
            id,
            title,
            dayStart,
            dayEnd,
            duration,
            pomoInterval,
            active,
          };
        }),
      };
    }
    case types.ADD_POMO: {
      const { todoId, timeStart, timeEnd } = action;
      return {
        ...state,
        pomos: [
          {
            id: Date.now(),
            todoId,
            timeStart,
            timeEnd,
          },
          ...state.pomos,
        ],
      };
    }
    // case types.DEL_POMO: {
    //   return {
    //     ...state,
    //     pomos: state.pomos.filter( pomo => pomo.id !== id ),
    //   };
    // }
    case types.RESET_STORE:
      return initState;
    default:
      return state;
  }
};

export { initState, todoReducer };
