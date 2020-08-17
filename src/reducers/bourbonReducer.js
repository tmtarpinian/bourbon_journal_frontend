function bourbonReducer(
    state = {
      bourbons: [], 
      loading: false
    },
    action
    ) {
    switch (action.type) {
        case 'LOADING_BOURBONS':
            return {...state, loading: true};
        
        case 'BOURBONS':
            return {...state, bourbons: action.payload, loading: false};

        case 'NEW_BOURBON':
            return {...state, bourbons: [...state.bourbons, action.payload], loading: false}     

        case 'DELETE_BOURBON':
            return {...state, bourbons: state.bourbons.filter(bourbon => bourbon.id  !== parseInt(action.payload))}
        default:
            return state;
    }
}

export default bourbonReducer