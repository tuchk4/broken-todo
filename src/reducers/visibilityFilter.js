const visibilityFilter = (state = 'SHOW_ALL', { type, payload }) => {
  switch (type) {
    case 'set.visibility.filter':
      return payload.filter
    default:
      return state
  }
}

export default visibilityFilter
