function bourbonReducer(
    state = {
      bourbons: [], 
      loading: false
    },
    action
    ) {
    let idx;            //remove this variable if not used for edit/update
    switch (action.type) {
        case 'LOADING_BOURBONS':
            return {...state, loading: true};
        
        case 'BOURBONS':
            return {...state, bourbons: action.payload, loading: false};

        case 'NEW_BOURBON':
            return {...state, bourbons: [...state.bourbons, action.payload], loading: false}     

        case 'DELETE_BOURBON':
            return {...state, bourbons: state.bourbons.filter(bourbon => bourbon.id  != action.payload)};
   
        default:
            return state;
    }
}

export default bourbonReducer



//return {...state, bourbons: [[...state.bourbons.slice(0, idx.id), ...state.bourbons.slice(idx + 1)]]};