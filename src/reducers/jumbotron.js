
export default (state = {text: "Hello Bloc"}, action) => {
  switch (action.type) {
    case 'SET_HEADER':
      return {
        ...state,
        text: action.text
      }
    default:
      return state
  }
}

