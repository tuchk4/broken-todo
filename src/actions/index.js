let nextTodoId = 0

export const ADD_TODO = 'add.todo';
export const SET_VISIBILITY_FILTER = 'set.visibility.filter';
export const TOGGLE_TODO = 'toggle.todo';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    text
  }
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  payload: { filter }
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id }
});
