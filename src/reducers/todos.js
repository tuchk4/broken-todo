import undoable from 'redux-undo';

const todo = (state, { payload, type }) => {
  switch (type) {
    case 'add.todo':
      return {
        id: payload.id,
        text: payload.text,
        completed: false
      }
    case 'toggle.todo':
      if (state.id !== payload.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed,
      }
    default:
      return state;
  }
}

const todos = (state = [], { payload, type }) => {
  console.log(payload);
  switch (type) {
    case 'add.todo':
      return [
        ...state,
        todo(undefined, { payload, type })
      ]
    case 'toggle.todo':
      // console.log(state);
      return state.map(t =>
        todo(t, { payload, type })
      )
    default:
      return state
  }
}

const undoableTodos = undoable(todos)

export default undoableTodos
