const getBourbons = () => {
    return dispatch => {
        dispatch({type: 'LOADING_BOURBONS'})
        fetch("http://localhost:3001/bourbons")
        .then(response => response.json())
        .then(bourbonData => dispatch({type: 'BOURBONS', payload: bourbonData}))
    }
}

export default getBourbons