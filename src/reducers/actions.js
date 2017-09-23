/**
 * @flow weak
 * file name  : actions.js
 * input      :
 * output     :
 * todo       : action types, actionCreator(pure function)
*/

const types = {
  ADD_TODO: 'ADD_TODO',
  DEL_TODO: 'DEL_TODO',
  MOD_TODO: 'MOD_TODO',
  ADD_POMO: 'ADD_POMO',
  DEL_POMO: 'DEL_POMO',
  RESET_STORE: 'RESET_STORE',
};

const actionCreator = {
  addTodo: todo => {
    return {
      type: types.ADD_TODO,
      todo,
    };
  },
  delTodo: id => {
    return {
      type: types.DEL_TODO,
      id,
    };
  },
  modTodo: todo => {
    return {
      type: types.MOD_TODO,
      todo,
    };
  },
  addPomo: (todoId, timeStart, timeEnd) => {
    return {
      type: types.ADD_POMO,
      todoId,
      timeStart,
      timeEnd
    };
  },
  delPomo: pomo => {
    return {
      type: types.DEL_POMO,
      payload: {
        pomo,
      },
    };
  },
  resetStore: () => {
    return {
      type: types.RESET_STORE,
    };
  },
}

export { types, actionCreator };
