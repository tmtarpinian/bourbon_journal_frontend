function categoriesReducer(
    state = {
      categories: [], 
      loading: false
    },
    action
    ) {
    let idx;
    switch (action.type) {
        case 'LOADING_BOURBONS':
            return {...state, loading: true};

        case 'CATEGORIES':
            return {...state, categories: action.payload, loading: false};

        case 'NEW_CATEGORY':
            return {...state, bourbons: [...state.bourbons, action.payload], loading: false}     

        case 'DELETE_CATEGORY':
            idx = state.findIndex(category => category.id  === action.id)
            return [...state.slice(0, idx), ...state.slice(idx + 1)];
   
        default:
            return state;
    }
}

export default categoriesReducer