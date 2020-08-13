function categoryReducer(
    state = {
      categories: [],
      category: [], 
      loading: false
    },
    action
    ) {
    let idx;
    switch (action.type) {
        case 'LOADING_BOURBONS':
            return {...state, loading: true};
            
        case 'LOADING_CATEGORY':
            return {...state, loading: true};

        case 'CATEGORIES':
            return {...state, categories: action.payload, loading: false};

        case 'CATEGORY':
            return {...state, category: action.payload, loading: false};

        case 'NEW_CATEGORY':
            return {...state, categories: [...state.categories, action.payload], loading: false}     

        case 'DELETE_CATEGORY':
            idx = state.findIndex(category => category.id  === action.id)
            return [...state.slice(0, idx), ...state.slice(idx + 1)];
   
        default:
            return state;
    }
}

export default categoryReducer