function categoriesReducer(
    state = {
      categories: [], 
      loading: false
    },
    action
    ) {
    let idx;
    switch (action.type) {
        case 'ADD_CATEGORY':
            return [...state, action.category];

        case 'DELETE_CATEGORY':
            idx = state.findIndex(category => category.id  === action.id)
            return [...state.slice(0, idx), ...state.slice(idx + 1)];
   
        default:
            return state;
    }
}

export default categoriesReducer