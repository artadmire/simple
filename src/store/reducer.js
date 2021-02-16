
const initData = {
  list: []
}

export default function(state = initData, action) {
  switch (action.type) {
    case 'JS':
      return {
        ...state,
        list: action.payload
      }
    default:
      return {
        ...state
      }
  }
}