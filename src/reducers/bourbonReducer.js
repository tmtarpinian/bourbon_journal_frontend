function bourbonReducer(
    state = {
      bourbons: [], 
      loading: false
    },
    action
    ) {
    let idx;
    switch (action.type) {
        case 'ADD_BOURBON':
            return [...state, action.book];

        case 'DELETE_BOURBON':
            idx = state.findIndex(bourbon => bourbon.id  === action.id)
            return [...state.slice(0, idx), ...state.slice(idx + 1)];
   
        default:
            return state;
    }
}

export default bourbonReducer