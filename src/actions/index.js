let nextTodoId = 0
export const addTodo = (text) => {
  console.log("You Dispatched ADD_TODO");
  return{type: 'ADD_TODO',
  id: nextTodoId++,
  text}
};

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const setHeaderText = () => ({
  type: 'SET_HEADER',
  text: 'Hola Bloc'
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
